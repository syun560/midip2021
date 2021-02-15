import React, { Component } from 'react'
import { connect } from 'react-redux'

class ChannelSelector extends Component {

    // テストで音を鳴らす
    ChangeSelector(e) {
        this.props.dispatch({
            type: 'MOVE_CHANNEL',
            channel: e.target.value*1
        })
    }

    constructor(props){
        super(props)
        this.channelName = ['Piano', 'Bass', 'Drums']

        // ステートの設定
        this.state = {
        }

        this.ChangeSelector = this.ChangeSelector.bind(this)
    }

    render() {
        // セレクトタグの内容を作る
        let n = 0
        let items = this.channelName.map(value =>
            <option key={n} value={n}>Ch.{n++} {value}</option> 
        )

        return (
        <div>
            <select onChange={this.ChangeSelector} defaultValue="-1">{ items }</select>
        </div>
        )
    }
}

export default connect(state=>state)(ChannelSelector)
