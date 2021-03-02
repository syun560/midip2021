import './App.css'
import React, { Component } from 'react'

import { Provider } from 'react-redux'
import MidipStore, { midipReducer } from './midip/Store'
import { createStore } from 'redux'

import { persistStore, persistReducer } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import storage from 'redux-persist/lib/storage'

import Instrument from './midip/Instrument'
import Sequencer from './midip/Sequencer'

// Redux Persistの設定
const persistConfig = {
    key: 'midip',
    storage: storage,
    blacklist: ['output'],
    whitelist: ['songs', 'noteEvents','channelData']
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
        background: "#FDFDFD",
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

            <footer class="text-center text-black-50">©syun560/2021</footer>
        </div>
    )
    }
}

export default App
