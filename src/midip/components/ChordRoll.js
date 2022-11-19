import React, { Component } from 'react'
import { connect } from 'react-redux'
import ChordRollCell from './ChordRollCell'

const ChordRoll = () => {
    const th = {
        width: '100px'
    }
    const clicker = {
        overflowY: 'scroll',
        cursor: 'pointer'
    }
    const maxTick = 16
    const ticks = []
    for (let i = 0; i < maxTick; i++) {
        ticks.push(<ChordRollCell key={i} tick={i} />)
    }

    return <div style={clicker}>
        <table className="table table-bordered table-sm"><tbody><tr>
            <th style={th}>C</th>
            {ticks}
        </tr></tbody></table>
    </div>
}

export default connect(state=>state)(ChordRoll)
