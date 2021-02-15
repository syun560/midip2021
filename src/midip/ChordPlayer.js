import React, { Component } from 'react'
import { connect } from 'react-redux'
import ChordPlayerCell from './ChordPlayerCell'

class ChordPlayer extends Component {

    // テストで音を鳴らす
    doClick() {
        
    }

    constructor(props){
        super(props)

        // ステートの設定
        this.state = {
        }

        this.doClick = this.doClick.bind(this)
    }

    render() {
        return (
            <ChordPlayerCell />
        )
    }
}

export default connect(state=>state)(ChordPlayer)
