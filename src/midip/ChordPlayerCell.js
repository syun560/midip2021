import React, { Component } from 'react'
import { connect } from 'react-redux'
import Lib from './Lib'

class ChordPlayerCell extends Component {

    // テストで音を鳴らす
    doClick() {
        const chord = this.props.chord
        const noteEvents = Lib.chordNameToNoteEvents(chord)
        
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
        // 調による色分け
        let style

        const diff = (this.props.nowKey - this.props.index + 24) % 12
        if (diff == 1 || diff == 0 || diff == 11) {
            style = {
                background: 'pink',
                cursor: 'pointer'
            }
        }
        else if (diff == 2 || diff == 3 || diff == 4){
            style = {
                background: 'cyan',
                cursor: 'pointer'
            }
        }
        else if (diff == 5 || diff == 6 || diff == 7){
            style = {
                background: 'gray',
                cursor: 'pointer'
            }
        }
        else if (diff == 8 || diff == 9 || diff == 10){
            style = {
                background: 'yellow',
                cursor: 'pointer'
            }
        }
        else {
            style = {
                background: 'gray',
                cursor: 'pointer'
            }
        }

        return (
        <td onClick={this.doClick} style={style}>           
            {this.props.chord}
        </td>
        )
    }
}

export default connect(state=>state)(ChordPlayerCell)
