import React, { Component } from 'react'
import { connect } from 'react-redux'
import Lib from '../Lib'

class NotePane extends Component {
    box = {
        height: '500px',
        overflow: 'auto'
    }

    doClick(e) {
    }

    constructor(props){
        super(props)

        // ステートの設定
        this.state = {
        }
        
        this.doClick = this.doClick.bind(this)
    }

    render() {
        // 現在のチャンネルのイベントのみを取り出す
        const channelItem = this.props.noteEvents.filter(noteEvent=>{
            return noteEvent.channel == this.props.channel
        })

        // ペインに表示されるテーブルを生成
        const noteItem = channelItem.map((noteEvent, index)=>(
            <tr key={index}>
                <td>{noteEvent.mea}</td>
                <td>{noteEvent.tick}</td>
                <td>{Lib.noteNumberToNoteName(noteEvent.note)}</td>
                <td>{noteEvent.gate}</td>
                <td>{noteEvent.vel}</td>
            </tr>
        ))

        return (
            <div style={this.box}>
                <table className="table table-sm">
                    <thead>
                        <tr>
                            <th>Mea</th>
                            <th>Tick</th>
                            <th>Event</th>
                            <th>Gate</th>
                            <th>Vel/Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        {noteItem}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default connect(state=>state)(NotePane)
