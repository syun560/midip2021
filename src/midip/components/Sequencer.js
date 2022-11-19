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
import PersistForm from '../PersistForm'

const Sequencer = (props) => {
    const doClick = (e) => {
        props.dispatch({
            type: 'DEL_ALL'
        })
    }

    return <div>
        <div className='row mt-4'>
            <div className='col-md-3'>
                <div>
                    <div>
                        <SongSelector />
                        <SaveDialog />
                        {/* <SMFWriter /> */}
                        <PersistForm />
                    </div>
                    <ChannelSelector />
                    <ProgramChanger />
                </div>
                <NotePane />
                <button className='btn btn-danger' onClick={doClick}>Del All Event</button>
            </div>

            <div className='col-md-9'>
                <Conductor />
                <PianoRoll />
                <ChordRoll />
                <SMFWriter />
            </div>
        </div>
    </div>
}

export default connect(state=>state)(Sequencer)
