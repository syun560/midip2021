import React, { Component } from 'react'
import { connect } from 'react-redux'

class ProgramChanger extends Component {

    // テストで音を鳴らす
    ChangeSelector(e) {
        this.props.dispatch({
            type: 'PROGRAM_CHANGE',
            programNumber: e.target.value*1
        })
    }

    constructor(props){
        super(props)
        this.programName = [
            "Piano 1",
	        "Piano 2",
	        "Piano 3",
	        "Honkey-tonk",
	        "E.Piano 1",
	        "E.Piano 2",
	        "Harpsichord",
	        "Clav.",
	        "Celesta",
	        "Glockenspiel",
	        "Music Box",
	        "Vibraphone",
	        "Marimba",
	        "Xylophone",
	        "Tubular Bells",
	        "Dulcrimer",
	        "Organ 1",
	        "Organ 2",
	        "Organ 3",
	        "Pipe Organ",
	        "Reed Organ",
	        "Accordion",
	        "Harmonica",
	        "Bandneon",
	        "Nylon-str.Guitar",
	        "Steel-str.Gt",
	        "Jazz Guitar",
	        "Clean Guitar",
	        "Muted Guitar",
	        "Overdrive Guitar",
	        "Distortion Guitar",
	        "Gt.Harmonics",
	        "Acoustic Bass",
	        "Fingered Bass",
	        "Picked Bass",
	        "Fretless Bass",
	        "Slap Bass 1",
	        "Slap Bass 2",
	        "Synth Bass 1",
	        "Synth Bass 2",
	        "Violin",
	        "Viola",
	        "Cello",
	        "Contrabass",
	        "Tremolo Strings",
	        "Pizzicato Strings",
	        "Harp",
	        "Timpani",
	        "Strings",
	        "Slow Strings",
	        "Synth Strings 1",
	        "Synth Strings 2",
	        "Chor Aahs",
	        "Voice Oohs",
	        "Synth Vox",
	        "OrchestraHit",
	        "Trumpet",
	        "Trombone",
	        "Tuba",
	        "MutedTrumpet",
	        "French Horns",
	        "Brass 1",
	        "Synth Brass 1",
	        "Synth Brass 2",
	        "Soprano Sax",
	        "Alto Sax",
	        "Tenor Sax",
	        "Baritone Sax",
	        "Oboe",
	        "English Horn",
	        "Bassoon",
	        "Clarinet",
	        "Piccolo",
	        "Flute",
	        "Recorder",
	        "Pan Flute",
	        "Bottle Blow",
	        "Shakuhachi",
	        "Whistle",
	        "Ocarina",
	        "Square Wave",
	        "Saw Wave",
	        "Synth Calliope",
	        "Chiffer Lead",
	        "Charang",
	        "Solo Vox",
	        "5th Saw Wave",
	        "Bass & Lead",
	        "Fantasia",
	        "Warm Pad",
	        "Polysynth",
	        "Space Voice",
	        "Bowed Glass",
	        "Metal Pad",
	        "Halo Pad",
	        "Sweep Pad",
	        "Ice Rain",
	        "SoundTrack",
	        "Crystal",
	        "Atomosphere",
	        "Brightness",
	        "Goblin",
	        "Echo Drops",
	        "Star Theme",
	        "Sitar",
	        "Banjo",
	        "Shamisen",
	        "Koto",
	        "Kalimba",
	        "Bagpipe",
	        "Fiddle",
	        "Shenai",
	        "Tinkle Bell",
	        "Agogo",
	        "Steel Drums",
	        "Woodblock",
	        "Taiko",
	        "Melodic Tom",
	        "Synth Drum",
	        "Reverse Sym",
	        "Gt.FretNoise",
	        "Breath Noise",
	        "Seashore",
	        "Bird",
	        "Telephone",
	        "Helicopter",
	        "Applause",
	        "Gun Shot",
        ]

        // ステートの設定
        this.state = {
        }

        this.ChangeSelector = this.ChangeSelector.bind(this)
    }

    render() {
        // セレクトタグの内容を作る
        let n = 0
        let items = this.programName.map(value =>
            <option key={n} value={n}>{n++}. {value}</option> 
        )

        return (
            <select onChange={this.ChangeSelector} value={this.props.channelData[this.props.channel].program}>{ items }</select>
        )
    }
}

export default connect(state=>state)(ProgramChanger)
