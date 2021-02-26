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
    whitelist: ['noteEvents','channelData']
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

    style = {
        background: "#FDFDFD"
    }

    render() {
    return (
        <div className="container-fluid" style={this.style}>
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

            <h4>参考</h4>
            <li><a href="http://www.yk.rim.or.jp/~kamide/music/chordhelper/">MIDI Chord Helper</a></li>
            <li><a href="https://musiclab.chromeexperiments.com/Song-Maker/song/5766211904733184">Song Maker</a></li>
            <li>KORG-DS-10</li>
            <li><a href="http://www2.odn.ne.jp/~cbu69490/MIDI/MIDIlect/MIDIlect3.html">MIDIメッセージの分類</a></li>
            <li><a href="https://magenta.tensorflow.org/demos/performance_rnn/index.html">Performance RNN</a></li>
            <li><a href="https://weva.cloud/?p=284">Web乗で使える音楽ツールまとめ</a></li>
            <li><a href="https://qiita.com/to-lz1/items/94747b67ec97ab10f878">Web Audio API+Reactでブラウザで動くシーケンサを作る</a></li>
        </div>
    )
    }
}

export default App
