import './App.css'
import React, { Component } from 'react'
import Instrument from './midip/Instrument'

class App extends Component {
    constructor(props){
        super(props)
    }

    render() {
    return (
        <div className="container-fluid">
            
            <h3>シーケンサ</h3>
            <li>入力、保存ができる</li>

            <hr />

            <h3>WEB MIDI APIを利用した楽器</h3>
            <li>MIDI機器を接続して音をならす</li>
            <Instrument />

            <hr />

            <h4>メモ</h4>
            <li>プライベートリポジトリとしてGitにPushしよう</li>
            <li><b>なぜスタイルが適用されなくなった？</b></li>
            <li>Appはコンポーネントだったか？</li>
            <li>出力はできた、次はInputだ</li>
            <li>Outputが複数ある状況の再現はどうしたらいい？</li>
            <li>Program Changeのイベントも送信できるようにしよう、セレクトタグか？</li>
        </div>
    )
    }
}

export default App
