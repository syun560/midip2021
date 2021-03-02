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

    // チャンネルを追加する
    AddChannel() {
        this.props.dispatch({
            type: 'ADD_CHANNEL',
        })
    }

    constructor(props){
        super(props)
        this.channelName = ['Piano', 'Bass', 'Piano','Piano','Piano','Piano','Piano','Piano','Piano','Piano','Piano','Drums']

        // ステートの設定
        this.state = {
        }

        this.ChangeSelector = this.ChangeSelector.bind(this)
        this.AddChannel = this.AddChannel.bind(this)
    }

    render() {
        // セレクトタグの内容を作る
        let n = 0
        let items = this.props.channelData.map(value =>
            <option key={n} value={n}>Ch.{n++} {value.name}</option> 
        )

        return (
            <>
            <select onChange={this.ChangeSelector} defaultValue="-1">{ items }</select>
            <button className="btn btn-secondary btn-sm" onClick={this.AddChannel}>+</button>
            </>
        )
    }
}

export default connect(state=>state)(ChannelSelector)
