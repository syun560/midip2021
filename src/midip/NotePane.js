import React, { Component } from 'react'
import { connect } from 'react-redux'

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

        const noteItem = this.props.noteEvents.map((noteEvent, index)=>(
            <tr key={index}>
                <td>{noteEvent.mea}</td>
                <td>{noteEvent.tick}</td>
                <td>{noteEvent.note}</td>
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
