import React, { Component } from 'react'
import PianoRollCell from './PianoRollCell'
import { connect } from 'react-redux'
import Lib from './Lib'

class PianoRoll extends Component {
    // div全体（スクロールできる）
    box = {
        height: '500px',
        overflow: 'auto',
        cursor: 'pointer',
        userSelect: 'none'
    }
    th = {
        width: '100px'
    }
    
    changeBaseKey(e) { this.setState({baseNote: e.target.value}) }
    changeMea(e) { 
        this.props.dispatch({type: 'MOVE_MEA', mea: e.target.value}) 
    }
    changeSingle(e) {this.setState({isSingle: e.target.checked})}
    changePreview(e) {this.setState({isPreview: e.target.checked})}

    constructor(props){
        super(props)

        // ステートの設定
        this.state = {
            width : 16,
            height : 13,
            baseNote: 72,
            isSingle: true, // 単音モード
            isPreview: true, // プレビューするかどうか
        }
        
        this.changeBaseKey = this.changeBaseKey.bind(this)
        this.changeMea = this.changeMea.bind(this)
        this.changeSingle = this.changeSingle.bind(this)
        this.changePreview = this.changePreview.bind(this)
        this.rollStyle = this.rollStyle.bind(this)

        this.ref = React.createRef()
    }

    // 読み込み時にピアノロールの中央までスクロールを行う
    componentDidMount() {
        this.ref.current.scrollIntoView({
            block: 'center'
        })
    }

    // スケールによってピアノロールの色を変える
    rollStyle(note) {
        // スケール（とりあえず、ダイアトニック）
        const scale = [1,0,1,0,1,1,0,1,0,1,0,1]
        // スケール外の音
        const tr_outScale = { background: 'whitesmoke' }
        // スケール内の音
        const tr_onScale = { background: 'white' }
        // 現在の調の音
        const tr_baseKey = { background: 'mistyrose' }
        // オフセット
        const offset = (note - this.state.baseNote + 120) % 12

        if (offset == 0) return tr_baseKey
        if (scale[offset]) return tr_onScale
        else return tr_outScale
    }

    render() {
        // ダミーの数値（Reactのkeyのため必要？）
        const notes = []
        for (let i = 127; i >= 0; i--) {
            notes.push(i)
        }
        const ticks = []
        for (let i = 1; i <= 16; i++) {
            ticks.push(i)
        }

        // ピアノロール生成
        const rows = notes.map((fuga, indexRow) => {
            const note = 127 - indexRow
            return (
                <tr key={fuga} style={this.rollStyle(note)}>
                    {/* 音階 */}
                    <th style={this.th} ref={note == this.state.baseNote ? this.ref : ''}>{Lib.noteNumberToNoteName(note)}</th>

                    {/* 選択できる部分 */}
                    {ticks.map((hoge, indexCol) => 
                        <PianoRollCell key={hoge} row={note} col={indexCol} isSingle={this.state.isSingle} isPreview={this.state.isPreview} />
                    )}
                </tr>
            )
        })

        return (
            <div>
                {/* ピアノロール表示 */}
                <div style={this.box}>
                <table className="table table-bordered table-sm"><tbody>
                    {rows}
                </tbody></table>
                </div>

                {/* 操作部 */}
                <p>
                    {/* 調性 */}
                    <label>Key: </label>
                    <input type="number" value={this.state.baseNote} min="12" max="127" onChange={(this.changeBaseKey)} />
                    ({Lib.noteNumberToNoteName(this.state.baseNote)})

                    {/* 小節 */}
                    <label>Mea: </label>
                    <input type="number" value={this.props.mea} min="1" max="127" onChange={this.changeMea} />

                    {/* 単音モードボタン */}
                    <label>Single: </label>
                    <input type="checkbox" id="single" onChange={this.changeSingle} checked={this.state.isSingle} />

                    {/* プレビューボタン */}
                    <label>Preview: </label>
                    <input type="checkbox" id="single" onChange={this.changePreview} checked={this.state.isPreview} />
                </p>                
            </div>
        )
    }
}

export default connect(state=>state)(PianoRoll)
