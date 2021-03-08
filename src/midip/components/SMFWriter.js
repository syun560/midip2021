import React, { Component } from 'react'
import { connect } from 'react-redux'
import Lib from '../Lib'

class SMFWriter extends Component {

    // SMFに書き出す
    SMFWrite() {
        const MidiWriter = require('midi-writer-js')
        const tracks = []
        
        // チャンネル数分繰り返す
        this.props.channelData.map((ch, index) => {
            const newTrack = new MidiWriter.Track()
            
            alert('ch: ' + index + 'Program: ' + ch.program)

            // Program Change
            newTrack.addEvent(new MidiWriter.ProgramChangeEvent({instrument: ch.program, channel: index}))
            
            // 現在のチャンネルのnoteEventを取り出す
            const ne = this.props.noteEvents.filter(noteEvent=> noteEvent.channel === index)

            // noteEvents
            ne.map(noteEvent => {
                let note = new MidiWriter.NoteEvent({
                    pitch: Lib.noteNumberToNoteName(noteEvent.note),
                    duration: '8',
                    channel: index + 1,
                    velocity: noteEvent.vel
                })
                console.log(note)
                newTrack.addEvent(note)
            })
            tracks.push(newTrack)
        })

        //newTrack.addEvent(notes, (event, index) => {sequential: true})

        const writer = new MidiWriter.Writer(tracks)
        //let writer = new MidiWriter.Writer(newTrack)

        // URL遷移（ダウンロード）
        window.location.href = writer.dataUri()
        //writer.saveMIDI('name')
    }

    constructor(props){
        super(props)

        // ステートの設定
        this.state = {
        }
        
        this.SMFWrite = this.SMFWrite.bind(this)
    }

    render() {

        return (
            <button className="btn btn-primary" onClick={this.SMFWrite}>SMF</button>
        )
    }
}

export default connect(state=>state)(SMFWriter)
