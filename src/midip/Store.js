import  { createStore } from 'redux'

// 初期値
const initData = {
    noteEvents: [
        
    ],
    output: null,
    mea: 1,
    channel: 0,
    channelData: [
        {
            program: 0,
            name: 'Piano'
        },
        {
            program: 0,
            name: 'Bass'
        },
        {
            program: 0,
            name: 'Piano'
        },
        {
            program: 0,
            name: 'Piano'
        },
        {
            program: 0,
            name: 'Piano'
        },
        {
            program: 0,
            name: 'Piano'
        },
        {
            program: 0,
            name: 'Piano'
        },
        {
            program: 0,
            name: 'Piano'
        },
        {
            program: 0,
            name: 'Drums'
        },
    ]
}

// 配列のソート
function sortNotes(arr) {
    arr.sort((a, b) => {
        if (a.mea < b.mea) return -1
        if (a.mea > b.mea) return 1
        if (a.tick < b.tick) return -1
        if (a.tick > b.tick) return 1
        if (a.note < b.note) return -1
        if (a.note > b.note) return 1
        return 0
    })
}

// レデューサ
export function midipReducer(state=initData, action) {
    switch(action.type) {
    // MIDIイベント管理----------------------------------
    case 'ADD_EVENT':
        let new_data = state.noteEvents.slice()
        new_data.push(action.data)
        sortNotes(new_data)
        return {
            output: state.output,
            noteEvents: new_data,
            mea: state.mea,
            channel: state.channel,
            channelData: state.channelData
        }
    case 'DEL_EVENT':
        let del_data = state.noteEvents.filter(
            noteEvent=>(
                noteEvent.channel != action.data.channel ||
                noteEvent.mea != action.data.mea ||
                noteEvent.tick != action.data.tick ||
                noteEvent.note != action.data.note
            )
        )
        return {
            output: state.output,
            noteEvents: del_data,
            mea: state.mea,
            channel: state.channel,
            channelData: state.channelData
        }
    case 'DEL_ALL':
        return {
            output: state.output,
            noteEvents: initData.noteEvents,
            mea: state.mea,
            channel: state.channel,
            channelData: state.channelData
        }

    // MIDIデバイス操作-------------------------------------
    case 'REGISTER_OUTPUT':
        return {
            output: action.output,
            noteEvents: state.noteEvents,
            mea: state.mea,
            channel: state.channel,
            channelData: state.channelData
        }
    case 'NOTE_ON':
        {
            let ch = 0
            if (action.data.channel === undefined) ch = 0
            else ch = action.data.channel
            state.output.send([0x90 + ch, action.data.note, action.data.vel])
            state.output.send([0x80 + ch, action.data.note, action.data.vel], window.performance.now() + action.data.gateMs);      // 1秒後にノートオフ
            break
        }
    case 'ALL_NOTE_OFF':
        state.output.send([0xB0, 0x7B, 0])
        break
    case 'PROGRAM_CHANGE':
        {
            const ch = state.channel
            const num = action.programNumber
            state.output.send([0xC0 + ch, num])
            let newChannelData = state.channelData.slice()
            newChannelData[ch].program = num
            return {
                output: state.output,
                noteEvents: state.noteEvents,
                mea: state.mea,
                channel: state.channel,
                channelData: newChannelData
            }
        }
            
    // シーケンス操作--------------------------------------
    case 'MOVE_MEA':
        let mea = action.mea
        if (mea > 128) mea = 128
        if (mea < 1) mea = 1
        
        return {
            output: state.output,
            noteEvents: state.noteEvents,
            mea: mea,
            channel: state.channel,
            channelData: state.channelData
        }

    // チャンネル操作-------------------------------------
    case 'MOVE_CHANNEL':
        let channel = action.channel
        if (channel > 15) channel = 15
        if (channel < 0) channel = 0
        return {
            output: state.output,
            noteEvents: state.noteEvents,
            mea: state.mea,
            channel: channel,
            channelData: state.channelData
        }
    default: 
        break
    }
    return state
}


// 追加のアクション
export function addEvent(data) {
    return {
        type: 'ADD_EVENT',
        data: data
    }
}

// ストアを作成
export default createStore(midipReducer)