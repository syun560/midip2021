import React, { Component } from 'react'
import { connect } from 'react-redux'
import Lib from '../Lib'

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

        // ステートの設定
        this.state = {
        }

        this.ChangeSelector = this.ChangeSelector.bind(this)
        this.AddChannel = this.AddChannel.bind(this)
    }

    render() {
        // セレクトタグの内容を作る
        let n = 0
        let items = this.props.channelData.map(channel =>
            <option key={n} value={n}>Ch.{n++} {Lib.programName[channel.program]}</option> 
        )

        return (
            <>
            <select onChange={this.ChangeSelector} defaultValue="-1" value={this.props.channel}>{ items }</select>
            <button className="btn btn-secondary btn-sm" onClick={this.AddChannel}>+</button>
            </>
        )
    }
}

export default connect(state=>state)(ChannelSelector)
