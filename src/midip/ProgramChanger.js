import React, { Component } from 'react'
import { connect } from 'react-redux'
import Lib from './Lib'

class ProgramChanger extends Component {

    // Program Change
    ChangeSelector(e) {
        this.props.dispatch({
            type: 'PROGRAM_CHANGE',
            programNumber: e.target.value*1
        })
    }

    constructor(props){
        super(props)

        // ステートの設定
        this.state = {
        }

        this.ChangeSelector = this.ChangeSelector.bind(this)
    }

    render() {
        // セレクトタグの内容を作る
        let n = 0
        let items = Lib.programName.map(value =>
            <option key={n} value={n}>{n++}. {value}</option> 
        )

        return (
            <select onChange={this.ChangeSelector} value={this.props.channelData[this.props.channel].program}>{ items }</select>
        )
    }
}

export default connect(state=>state)(ProgramChanger)
