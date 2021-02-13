import React, { Component } from 'react'
import { connect } from 'react-redux'
import Conductor from './Conductor'
import Instrument from './Instrument'

class Player extends Component {

    constructor(props){
        super(props)

        // ステートの設定
        this.state = {
        }
        
    }

    render() {
        return <div>
        </div>
    }
}

export default connect(state=>state)(Player)
