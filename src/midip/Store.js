import  { createStore } from 'redux'

// 初期値
const initData = {
    songs: [
        {
            id: 1,
            name: 'Sample Song',
            updated: '2021-01-01',
            author: 'syun560',
            channelData: [{
                program: 0,
                name: 'Piano'
            }],
            noteEvents:[],
            tempo: 12
        }
    ],
    noteEvents: [],
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
            ...state,
            noteEvents: new_data
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
            ...state,
            noteEvents: del_data,
        }
    case 'DEL_ALL':
        return {
            ...state,
            noteEvents: initData.noteEvents,
        }

    // MIDIデバイス操作-------------------------------------
    case 'REGISTER_OUTPUT':
        return {
            ...state,
            output: action.output,
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
    case 'PROGRAM_SET_ALL':
        state.channelData.map((ch, index) => state.output.send([0xC0 + index, ch.program]))
        break
    case 'PROGRAM_CHANGE':
        {
            const ch = state.channel
            const num = action.programNumber
            state.output.send([0xC0 + ch, num])
            let newChannelData = state.channelData.slice()
            newChannelData[ch].program = num
            return {
                ...state,
                channelData: newChannelData
            }
        }
        
            
    // シーケンス操作--------------------------------------
    case 'MOVE_MEA':
        let mea = action.mea
        if (mea > 128) mea = 128
        if (mea < 1) mea = 1
        
        return {
            ...state,
            mea: mea,
        }

    // チャンネル操作-------------------------------------
    case 'MOVE_CHANNEL':
        let channel = action.channel
        if (channel > 15) channel = 15
        if (channel < 0) channel = 0
        return {
            ...state,
            channel: channel,
        }
    case 'ADD_CHANNEL':
        let newChannel = state.channelData.length
        if (newChannel > 15) break
        console.log(newChannel)
        let newChannelData = state.channelData.slice()
        newChannelData.push({
            program: 0,
            name: 'Piano'
        })
        return {
            ...state,
            channelData: newChannelData,
            channel: newChannel
        }

    // Song操作-------------------------------------
    case 'SAVE_SONG':
        // 日付オブジェクトを文字列にして更新する
        let d = new Date()
        let date = d.getFullYear() + '/' + (d.getMonth()+1) + '/' + d.getDay() + ' ' +  d.getHours() + ':' + d.getMinutes()

        // 配列の内容をコピーする
        let newSongs = state.songs.slice()
        let newSong = {
            id: state.songs[state.songs.length - 1].id + 1,
            name: action.name,
            updated: date,
            author: 'syun560',
            channelData: state.channelData,
            noteEvents: state.noteEvents
        }
        newSongs.push(newSong)

        return {
            ...state,
            songs: newSongs
        }
    case 'OPEN_SONG':
        // 指定されたidの曲を検索
        let foundSong = state.songs.find(song => song.id === action.id)
        if (foundSong===undefined) {
            console.log("can't find song of selected ID: " + action.id)
            break
        }
        // プログラムリセット
        foundSong.channelData.map((ch, index) => state.output.send([0xC0 + index, ch.program]))

        return {
            ...state,
            channelData: [...foundSong.channelData],
            noteEvents: [...foundSong.noteEvents],
            mea: initData.mea,
            channel: initData.channel
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