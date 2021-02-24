import './App.css'
import React, { Component } from 'react'
import Instrument from './midip/Instrument'
import Sequencer from './midip/Sequencer'
import { Provider } from 'react-redux'
import MidipStore, { midipReducer } from './midip/Store'
import { createStore } from 'redux'

import { persistStore, persistReducer } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import storage from 'redux-persist/lib/storage'

// Redux Persistの設定
const persistConfig = {
    key: 'midip',
    storage: storage,
    blacklist: ['output'],
    whitelist: ['noteEvents']
}

// パーシストレデューサの設定
const persistedReducer = persistReducer(persistConfig, midipReducer)

// ストア、パーシスタの作成
let store = createStore(persistedReducer)
let pstore = persistStore(store)

class App extends Component {
    constructor(props){
        super(props)
    }

    render() {
    return (
        <div className="container-fluid">
            <Provider store={store}>
                <PersistGate loading={<p>loading...</p>} persistor={pstore}>
                    <Sequencer />
                    <hr />
                    <Instrument />
                </PersistGate>
            </Provider>

            <hr />

            <h4>Memo</h4>
            <li><a href="https://github.com/syun560/midip2021">GitHub</a></li>

            <h5>目的</h5>
            <li>自動耳コピ</li>
            <li>公開、使ってもらえること</li>
            <li>タブ譜作成</li>
            <li>MIDI出力</li>
            <li></li>

            <li>コンソールにMIDIメッセージは出力できているので、インタラクティブな出力をする</li>
            
            <li>Program Changeのイベントも送信できるようにしよう、セレクトタグか？</li>

            <li>キーボードショートカット</li>

            <h4>参考</h4>
            <li><a href="http://www.yk.rim.or.jp/~kamide/music/chordhelper/">MIDI Chord Helper</a></li>
            <li><a href="https://musiclab.chromeexperiments.com/Song-Maker/song/5766211904733184">Song Maker</a></li>
            <li>KORG-DS-10</li>
            
        </div>
    )
    }
}

export default App
