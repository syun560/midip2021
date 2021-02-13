import './App.css'
import React, { Component } from 'react'
import Instrument from './midip/Instrument'
import Sequencer from './midip/Sequencer'
import { Provider } from 'react-redux'
import MidipStore from './midip/Store'

class App extends Component {
    constructor(props){
        super(props)
    }

    render() {
    return (
        <div className="container-fluid">

            <Provider store={MidipStore}>
                <Sequencer />
            </Provider>

            <hr />

            <Instrument />

            <hr />

            <h4>メモ</h4>
            <li><a href="https://github.com/syun560/midip2021">GitHub</a></li>

            <li>Instrument.jsが少し複雑な気がする</li>
            <li>コンソールにMIDIメッセージは出力できているので、インタラクティブな出力をする</li>
            
            <li>Outputが複数ある状況の再現はどうしたらいい？</li>
            <li>Program Changeのイベントも送信できるようにしよう、セレクトタグか？</li>

            <li>ある程度キーボード操作もできるようにしておく</li>
        </div>
    )
    }
}

export default App
