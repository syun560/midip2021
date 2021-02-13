import React, { Component } from 'react'
import { addEvent } from './Store'
import { connect } from 'react-redux'

class PianoRollElement extends Component {
    tdUnselected = {
        width: '50px'
    }
    tdSelected = {
        width: '50px',
        background: 'cyan'
    }

    doClick(e) {
        let row = e.target.getAttribute('data-row')
        let col = e.target.getAttribute('data-col')
        this.setState(state => ({selected: !state.selected}))
        // console.log(row + ', ' + col + ' ' + this.state.selected)

        let action = addEvent({
            mea: 1,
            tick: col,
            note: row,
            gate: 480,
            vel: 100
        })
        this.props.dispatch(action)
    }

    constructor(props){
        super(props)

        // ステートの設定
        this.state = {
            selected: false
        }
        
        this.doClick = this.doClick.bind(this)
    }

    // Paneに格納されているデータと連動する
    

    render() {
        return (
            <td style={this.state.selected ? this.tdSelected : this.tdUnselected}
            onClick={this.doClick} data-row={this.props.row} data-col={this.props.col}></td>
        )
    }
}

export default connect(state=>state)(PianoRollElement)
