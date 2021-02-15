import React, { Component } from 'react'
import { addEvent } from './Store'
import { connect } from 'react-redux'

class PianoRollElement extends Component {
    tdUnselected = {
        width: '50px'
    }
    tdSelected = {
        width: '50px',
        background: 'cyan'
    }

    doClick(e) {
        let row = e.target.getAttribute('data-row')
        let col = e.target.getAttribute('data-col')
        this.setState(state => ({selected: !state.selected}))
        // console.log(row + ', ' + col + ' ' + this.state.selected)

        if (this.state.selected){
            this.props.dispatch({
                type: 'DEL_EVENT',
                data: {
                    mea: this.props.mea,
                    tick: col*1,
                    note: row*1
                }
            })
        }
        else {
            let action = addEvent({
                channel: this.props.channel,
                mea: this.props.mea,
                tick: col*1,
                note: row*1,
                gate: 120,
                vel: 100
            })
            this.props.dispatch(action)

            // 音をプレビューする
            this.props.dispatch({
                type: 'NOTE_ON',
                data: {
                    channel: this.props.channel,
                    note: row*1,
                    gateMs: 200,
                    vel: 100
                }
            })
        }
    }

    constructor(props){
        super(props)

        // ステートの設定
        this.state = {
            selected: false
        }
        
        this.doClick = this.doClick.bind(this)
    }

    // Paneに格納されているデータと連動する
    

    render() {
        let noteNum = this.props.row
        let tick = this.props.col

        // イベントを検索し、見つけたらtrueとする（なんか遅くなりそうな実装）
        let findData = this.props.noteEvents.find(noteEvent=> (
            noteEvent.channel == this.props.channel &&
            noteEvent.mea == this.props.mea &&
            noteEvent.note == noteNum &&
            noteEvent.tick == tick
        ))
        if (findData === undefined) this.state.selected = false
        else this.state.selected = true

        return (
            <td style={this.state.selected ? this.tdSelected : this.tdUnselected}
            onClick={this.doClick} data-row={noteNum} data-col={tick}></td>
        )
    }
}

export default connect(state=>state)(PianoRollElement)
