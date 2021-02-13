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
            return noteEvent.tick == this.state.nowTick
        })

        // 該当するデータがあれば
        if (data.length > 0) {
            // 音を鳴らす
            data.map(d => {
                this.props.dispatch({
                    type: 'NOTE_ON',
                    data: {
                        note: d.note,
                        gate: 240 * 1000 / this.state.bpm * (d.gate / (480 * 4)) - 1,
                        vel: d.vel,
                    }
                })
            })
        }
    }

    // tickが進むごとに実行される関数
    Proceed() {
        this.setState( state=> ({
            nowTick: (state.nowTick + 1) % this.maxTick
        }))

        this.Play()
        
        this.timer = setTimeout(this.Proceed, 240 * 1000 / this.state.bpm / this.maxTick )
    }

    ChangeBPM(e) {
        this.setState({bpm: e.target.value})
    }

    constructor(props){
        super(props)

        // ステートの設定
        this.state = {
            bpm : 120,
            nowTick: 0,
            isPlaying: false
        }
        
        this.PlayToggle = this.PlayToggle.bind(this)
        this.Proceed = this.Proceed.bind(this)
        this.ChangeBPM = this.ChangeBPM.bind(this)
    }

    render() {
        let ticks = []
        for (let i = 0; i < this.maxTick; i++) {
            ticks.push(<td key={i} style={this.state.nowTick == i ? this.tdNow : this.td}></td>)
        }

        return (
            <div>
                <p>
                    <input type="number" value={this.state.bpm} min="0" max="300" onChange={this.ChangeBPM} />
                    <button className="btn btn-primary" onClick={this.PlayToggle}>
                        {this.state.isPlaying ? 'Playing' : 'Play'}
                    </button>
                </p>
                <table className="table table-bordered table-sm"><tbody><tr>
                    <th style={this.th}>4/4</th>
                    {ticks}
                </tr></tbody></table>
            </div>
        )
    }
}

//export default connect(state=>state)(PianoRoll)
export default connect(state=>state)(Conductor)
