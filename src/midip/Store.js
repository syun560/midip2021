import  { createStore } from 'redux'

// 初期値
const initData = {
    noteEvents: [
        
    ],
    output: null
}

// 配列のソート
function sortNotes(arr) {
    arr.sort((a, b) => {
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
    case 'ADD_EVENT':
        let new_data = state.noteEvents.slice()
        new_data.push(action.data)
        sortNotes(new_data)
        return {
            output: state.output,
            noteEvents: new_data
        }
    case 'DEL_EVENT':
        let del_data = state.noteEvents.filter(
            noteEvent=>(
                noteEvent.mea != action.data.mea ||
                noteEvent.tick != action.data.tick ||
                noteEvent.note != action.data.note
            )
        )
        return {
            output: state.output,
            noteEvents: del_data
        }
    case 'DEL_ALL':
        return {
            output: state.output,
            noteEvents: initData.noteEvents
        }
    case 'REGISTER_OUTPUT':
        return {
            output: action.output,
            noteEvents: state.noteEvents
        }
    case 'NOTE_ON':
        let gateMs = action.data.gate
        state.output.send([0x90, action.data.note, action.data.vel])
        state.output.send([0x80, action.data.note, action.data.vel], window.performance.now() + gateMs);      // 1秒後にノートオフ
        return {
            output: state.output,
            noteEvents: state.noteEvents
        }
    default: 
        return state
    }
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