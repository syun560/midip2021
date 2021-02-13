import  { createStore } from 'redux'
import { ActionCreators } from 'redux-devtools'

// 初期値
const initData = {
    noteEvents: [
        {
            mea: 1,
            tick: 0,
            note: 60,
            gate: 480,
            vel: 100
        },
        {
            mea: 2,
            tick: 0,
            note: 62,
            gate: 480,
            vel: 100
        }
    ]
}

// レデューサ
export function midipReducer(state=initData, action) {
    switch(action.type) {
    case 'ADD_EVENT':
        let new_data = state.noteEvents.slice()
        new_data.push(action.data)
        return {
            noteEvents: new_data
        }
    case 'DEL_ALL':
        return {
            noteEvents: initData.noteEvents
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