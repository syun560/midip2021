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
                <hr />
                <Instrument />
            </Provider>

            <hr />

            <h4>Memo</h4>
            <li><a href="https://github.com/syun560/midip2021">GitHub</a></li>

            <li>大きな目標って何なんだ？</li>
            <li>自動耳コピ</li>
            <li>公開、使ってもらえること</li>
            <li></li>

            <li>BPMを正しくするぞ。</li>
            <li>コンソールにMIDIメッセージは出力できているので、インタラクティブな出力をする</li>
            
            <li>Outputが複数ある状況の再現はどうしたらいい？</li>
            <li>Program Changeのイベントも送信できるようにしよう、セレクトタグか？</li>

            <li>ある程度キーボード操作もできるようにしておく</li>
        </div>
    )
    }
}

export default App
