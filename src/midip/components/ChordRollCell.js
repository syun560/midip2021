import React, { Component } from 'react'
import { connect } from 'react-redux'

class ChordRollCell extends Component {
    td = {
        width: '50px'
    }
    ChangeChord(tick, chord) {
        this.props.dispatch({
            type: 'ADD_CHORD',
            data: {
                mea: this.props.mea,
                tick: tick,
                chord: chord
            }
        })
    }

    constructor(props){
        super(props)

        // ステートの設定
        this.state = {
        }
        
        this.ChangeChord = this.ChangeChord.bind(this)
    }

    render() {
        // イベントを検索し、見つけたらtrueとする（なんか遅くなりそうな実装）
        const findData = this.props.chordEvents.find(chordEvent=> (
            chordEvent.mea == this.props.mea &&
            chordEvent.tick == this.props.tick
        ))

        return (
            <td style={this.td}>
                {findData && findData.chord}
            </td>
        )
    }
}

export default connect(state=>state)(ChordRollCell)
