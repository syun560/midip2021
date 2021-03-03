import React, { Component } from 'react'
import { connect } from 'react-redux'
import ChordRollCell from './ChordRollCell'

class ChordRoll extends Component {
    th = {
        width: '100px'
    }
    clicker = {
        overflowY: 'scroll',
        cursor: 'pointer'
    }
    maxTick = 16

    constructor(props){
        super(props)

        // ステートの設定
        this.state = {
        }
    }

    render() {

        const ticks = []
        for (let i = 0; i < this.maxTick; i++) {
            ticks.push(<ChordRollCell key={i} tick={i} />)
        }

        return (
            <div style={this.clicker}>
                <table className="table table-bordered table-sm"><tbody><tr>
                    <th style={this.th}>C</th>
                    {ticks}
                </tr></tbody></table>
            </div>
        )
    }
}

export default connect(state=>state)(ChordRoll)
