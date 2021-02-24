import React, { Component } from 'react'
import { addEvent } from './Store'
import { connect } from 'react-redux'

class PianoRollCell extends Component {
    tdUnselected = {
        width: '50px'
    }
    tdSelected = {
        width: '50px',
        background: 'cyan'
    }
    border = {
        borderLeft: '2px solid blue',
        background: 'cyan'
    }

    // セルがマウスオーバーされた時
    doMouseEnter(e) {
        // シングルモードの時
        if (this.props.isSingle) {
            // マウス左クリックが押下状態にある時
            if ((e.buttons & 0x0001) ? true : false) {
                console.log('Entered')
                this.doClick(e)
            }
        }
    }

    // セルがクリックされた時
    doClick(e) {
        let tick = e.target.getAttribute('data-col') * 1
        let note = e.target.getAttribute('data-row') * 1
        this.setState(state => ({selected: !state.selected}))

        if (this.state.selected){
            this.props.dispatch({
                type: 'DEL_EVENT',
                data: {
                    channel: this.props.channel,
                    mea: this.props.mea,
                    tick: tick,
                    note: note
                }
            })
        }
        else {
            let action = addEvent({
                channel: this.props.channel,
                mea: this.props.mea,
                tick: tick,
                note: note,
                gate: 120,
                vel: 100
            })
            this.props.dispatch(action)

            // 単音モードの場合は同じTickの音を消す（遅い実装っぽい、Storeに関数作る？、もしくはindexを取得）
            if (this.props.isSingle) {
                // 検索
                const sameTickEvents = this.props.noteEvents.filter(noteEvent=>(
                    noteEvent.channel == action.data.channel &&
                    noteEvent.mea == action.data.mea &&
                    noteEvent.tick == action.data.tick
                ))

                // 削除
                if (sameTickEvents.length > 0) {
                    sameTickEvents.map((noteEvent)=>{
                        this.props.dispatch({
                            type: 'DEL_EVENT',
                            data: {
                                channel: this.props.channel,    
                                mea: this.props.mea,
                                tick: tick,
                                note: noteEvent.note
                            }
                        })
                    })
                }
            }

            if (this.props.isPreview) {
                // プレビュー前にNoteOffする
                this.props.dispatch({
                    type: 'ALL_NOTE_OFF'
                })
                
                // 音をプレビューする
                this.props.dispatch({
                    type: 'NOTE_ON',
                    data: {
                        channel: this.props.channel,
                        note: note,
                        gateMs: 200,
                        vel: 100
                    }
                })
            }
        }
    }

    constructor(props){
        super(props)

        // ステートの設定
        this.state = {
            selected: false
        }
        
        this.doClick = this.doClick.bind(this)
        this.doMouseEnter = this.doMouseEnter.bind(this)
    }
    

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
            onClick={this.doClick} onMouseEnter={this.doMouseEnter} data-row={noteNum} data-col={tick}>
                <div style={this.border}></div>
            </td>
        )
    }
}

export default connect(state=>state)(PianoRollCell)
