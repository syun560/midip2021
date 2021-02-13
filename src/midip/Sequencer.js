import React, { Component } from 'react'
import PianoRoll from './PianoRoll'
import NotePane from './NotePane'
import { connect } from 'react-redux'

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
                        <NotePane />
                    </div>
            
                    <div className='col-md-9'>
                        <PianoRoll />
                    </div>
                    
            </div>
            
            <div className='row'>
                <button className='btn btn-danger' onClick={this.doClick}>すべて削除</button>
            </div>
        </div>
    }
}

export default connect(state=>state)(Sequencer)
