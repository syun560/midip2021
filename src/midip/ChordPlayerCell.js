import React, { Component } from 'react'
import { connect } from 'react-redux'

class ChordPlayerCell extends Component {

    // テストで音を鳴らす
    doClick() {
        const noteEvents = [
            {
                note: 60,
                vel: 100,
                gateMs: 500
            },
            {
                note: 64,
                vel: 100,
                gateMs: 500
            },
            {
                note: 67,
                vel: 100,
                gateMs: 500
            },
        ]
        noteEvents.map(noteEvent=>{
            this.props.dispatch({
                type: 'NOTE_ON',
                data: noteEvent
            })
        })
    }

    constructor(props){
        super(props)

        // ステートの設定
        this.state = {
        }

        this.doClick = this.doClick.bind(this)
    }

    render() {
        return (
        <div>            
            <button className="btn btn-primary btn-large" onClick={this.doClick}>Play C</button>
        </div>
        )
    }
}

export default connect(state=>state)(ChordPlayerCell)
