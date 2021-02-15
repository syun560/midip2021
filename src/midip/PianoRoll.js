import React, { Component } from 'react'
import PianoRollElement from './PianoRollElement'
import { connect } from 'react-redux'
import Lib from './Lib'

class PianoRoll extends Component {    
    th = {
        width: '100px'
    }
    // スケール外の音
    tr_outScale = { background: 'whitesmoke' }
    // スケール内の音
    tr_onScale = { background: 'white' }
    // 現在の調の音
    tr_baseKey = { background: 'lavenderblush' }
    
    changeBaseKey(e) { this.setState({baseNote: e.target.value}) }
    changeMea(e) { 
        this.props.dispatch({type: 'MOVE_MEA', mea: e.target.value}) 
    }

    constructor(props){
        super(props)

        // ステートの設定
        this.state = {
            width : 16,
            height : 13,
            baseNote: 72,
        }
        
        this.changeBaseKey = this.changeBaseKey.bind(this)
        this.changeMea = this.changeMea.bind(this)
    }

    render() {
        // ダミーの数値（Reactのkeyのため必要？）
        const notes = [72, 71, 70, 69, 68, 67, 66, 65, 64, 63, 62, 61, 60]
        const ticks = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]

        const n = this.state.baseNote
        
        // スケール（とりあえず、ダイアトニック）
        const scale = [1,0,1,0,1,1,0,1,0,1,0,1]

        // ピアノロール生成
        const rows = notes.map((fuga, indexRow) => {
            const note = n - indexRow
            const offset = note % 12
            return (
                <tr key={fuga} style={scale[offset] ? this.tr_onScale : this.tr_outScale}>
                    {/* 音階 */}
                    <th style={this.th}>{Lib.noteNumberToNoteName(note)}</th>

                    {/* 選択できる部分 */}
                    {ticks.map((hoge, indexCol) => 
                        <PianoRollElement key={hoge} row={note} col={indexCol} />
                    )}
                </tr>
            )
        })

        return (
            <div>
                {/* ピアノロール表示 */}
                <table className="table table-bordered table-sm"><tbody>
                    {rows}
                </tbody></table>

                {/* 調性や小節の操作部 */}
                <p>
                    <label>Key: </label>
                    <input type="number" value={this.state.baseNote} min="12" max="127" onChange={this.changeBaseKey} />
                    ({Lib.noteNumberToNoteName(this.state.baseNote)})

                    <label>Mea: </label>
                    <input type="number" value={this.props.mea} min="1" max="127" onChange={this.changeMea} />
                </p>
            </div>
        )
    }
}

//export default connect(state=>state)(PianoRoll)
export default connect(state=>state)(PianoRoll)
