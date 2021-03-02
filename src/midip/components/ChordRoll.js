import React, { Component } from 'react'
import { connect } from 'react-redux'

class ChordRoll extends Component {
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
    clicker = {
        overflowY: 'scroll',
    }
    maxTick = 16
    ChangeChord() {
        
    }

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

    constructor(props){
        super(props)

        // ステートの設定
        this.state = {
        }
        
    }

    render() {
        let ticks = []
        for (let i = 0; i < this.maxTick; i++) {
            ticks.push(<td key={i} data-tick={i} onClick={this.ChangeChord} style={this.td}>C</td>)
        }

        return (
            <div style={this.clicker}>
                <table className="table table-bordered table-sm"><tbody><tr>
                    <th style={this.th}>4/4</th>
                    {ticks}
                </tr></tbody></table>
            </div>
        )
    }
}

export default connect(state=>state)(ChordRoll)
