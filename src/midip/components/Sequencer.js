import React, { Component } from 'react'
import PianoRoll from './PianoRoll'
import ChordRoll from './ChordRoll'
import NotePane from './NotePane'
import { connect } from 'react-redux'
import Conductor from './Conductor'
import ChannelSelector from './ChannelSelector'
import ProgramChanger from './ProgramChanger'
import SongSelector from './SongSelector'
import SaveDialog from './SaveDialog'
import SMFWriter from './SMFWriter'


class Sequencer extends Component {
    doClick(e) {
        this.props.dispatch({
            type: 'DEL_ALL'
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
        return <div>
            <div className='row mt-4'>
                
                <div className='col-md-3'>
                    <div>
                        <div>
                            <SongSelector />
                            <SaveDialog />
                            {/* <SMFWriter /> */}
                        </div>
                        <ChannelSelector />
                        <ProgramChanger />
                    </div>
                    <NotePane />
                    <button className='btn btn-danger' onClick={this.doClick}>Del All Event</button>
                </div>

                <div className='col-md-9'>
                    <Conductor />
                    <PianoRoll />
                    {/* <ChordRoll /> */}
                </div>
            </div>
        </div>
    }
}

export default connect(state=>state)(Sequencer)
