import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Player} from './Player'
import Lib from './Lib'
import { findDOMNode } from 'react-dom'

class Conductor extends Component {
    th = {
        width: '100px'
    }
    td = {
        width: '50px'
    }
    tdNow = {
        width: '50px',
        background: 'yellow'
    }
    maxTick = 16

    PlayToggle() {
        if (this.state.isPlaying) {
            this.setState({isPlaying: false})
            clearTimeout(this.timer)
        }
        else {
            this.setState({isPlaying: true})
            this.Play()
            this.timer = setTimeout(this.Proceed,  240 * 1000 / this.state.bpm / this.maxTick )
        }
    }

    Play() {
        // このタイミングで演奏する？ それともストアでやらせるか？
        // noteを検索
        const data = this.props.noteEvents.filter(noteEvent=>{
            if (this.state.isSolo) {
                return noteEvent.channel == this.props.channel && noteEvent.mea == this.props.mea && noteEvent.tick == this.state.nowTick
            }
            else return noteEvent.mea == this.props.mea && noteEvent.tick == this.state.nowTick
        })

        // 該当するデータがあれば
        if (data.length > 0) {
            // 音を鳴らす
            data.map(d => {
                this.props.dispatch({
                    type: 'NOTE_ON',
                    data: {
                        note: d.note,
                        gateMs: 240 * 1000 / this.state.bpm * (d.gate / (480 * 4)) - 1,
                        vel: d.vel,
                    }
                })
            })
        }
    }

    // tickが進むごとに実行される関数
    Proceed() {
        // 小節の最後までTickが進んだらmeaを進める
        let nextTick = this.state.nowTick + 1
        if (nextTick == this.maxTick) {
            nextTick %= this.maxTick
            if (!this.state.isLoop) {
                // なぜか遅れる（要対処！！！！）
                this.props.dispatch({ type:'MOVE_MEA', mea: this.props.mea*1 +1 })
            }
        }
        this.setState({ nowTick: nextTick })
        
        this.Play()
        
        // 小節の終わりの一個前のtickに来たら、delayTimeを少し短くする（無理やりな実装）
        let delayTime = 240 * 1000 / this.state.bpm / this.maxTick
        if (nextTick == this.maxTick - 1 && !this.state.isLoop) delayTime -= 40
        
        this.timer = setTimeout(this.Proceed, delayTime )
    }

    ChangeBPM(e) {
        this.setState({bpm: e.target.value})
    }

    ChangeLoop(e) {
        this.setState({isLoop: e.target.checked})
    }

    ChangeSolo(e) {
        this.setState({isSolo: e.target.checked})
    }

    constructor(props){
        super(props)

        // ステートの設定
        this.state = {
            bpm : 60,
            nowTick: 0,
            isPlaying: false, // 再生中かどうか
            isLoop: true, // ループするかどうか
            isSolo: false // ソロ演奏するかどうか
        }
        
        this.PlayToggle = this.PlayToggle.bind(this)
        this.Proceed = this.Proceed.bind(this)
        this.ChangeBPM = this.ChangeBPM.bind(this)
        this.ChangeLoop = this.ChangeLoop.bind(this)
        this.ChangeSolo = this.ChangeSolo.bind(this)
    }

    render() {
        let ticks = []
        for (let i = 0; i < this.maxTick; i++) {
            ticks.push(<td key={i} style={this.state.nowTick == i ? this.tdNow : this.td}></td>)
        }

        return (
            <div>
                <p>
                    {/* 再生・停止ボタン（別コンポーネントのほうがいい？） */}
                    <input type="number" value={this.state.bpm} min="0" max="300" onChange={this.ChangeBPM} />
                    <button className="btn btn-primary" onClick={this.PlayToggle}>
                        {this.state.isPlaying ? 'Playing' : 'Play'}
                    </button>

                    {/* ループボタン */}
                    <label>Loop: </label>
                    <input type="checkbox" id="loop" onChange={this.ChangeLoop} checked={this.state.isLoop}/>

                    {/* ソロボタン */}
                    <label>Solo: </label>
                    <input type="checkbox" id="solo" onChange={this.ChangeSolo} checked={this.state.isSolo}/>
                </p>

                {/* シーケンスクリック（横に流れていくやつ）表示 */}
                <table className="table table-bordered table-sm"><tbody><tr>
                    <th style={this.th}>4/4</th>
                    {ticks}
                </tr></tbody></table>
            </div>
        )
    }
}

export default connect(state=>state)(Conductor)
