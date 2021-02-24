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
        this.channelName = ['Piano', 'Bass', 'Piano','Piano','Piano','Piano','Piano','Piano','Piano','Piano','Piano','Drums']

        // ステートの設定
        this.state = {
        }

        this.ChangeSelector = this.ChangeSelector.bind(this)
    }

    render() {
        // セレクトタグの内容を作る
        let n = 0
        let items = this.props.channelData.map(value =>
            <option key={n} value={n}>Ch.{n++} {value.name}</option> 
        )

        return (
            <select onChange={this.ChangeSelector} defaultValue="-1">{ items }</select>
        )
    }
}

export default connect(state=>state)(ChannelSelector)
