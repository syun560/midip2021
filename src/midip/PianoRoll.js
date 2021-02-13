import React, { Component } from 'react'
import PianoRollElement from './PianoRollElement'
//import { connect } from 'react-redux'

class PianoRoll extends Component {    
    th = {
        width: '100px'
    }
    
    // アウトプットセレクトタグが変化した場合
    doClick(e) {
    }

    // ノートネーム（数字）をテキスト変換する関数
    noteNumberToNoteName(num) {

    }

    constructor(props){
        super(props)

        // ステートの設定
        this.state = {
            width : 16,
            height : 13,
            baseNote: 72,
        }
        
        this.doClick = this.doClick.bind(this)
    }

    render() {
        const notes = ['C5','B4','A#4','A4','G#4','G4', 'F#4', 'F4', 'E4', 'D#4', 'D4', 'C#4', 'C4']

        const notes_name = ['C','B','A#','A','G#','G', 'F#', 'F', 'E', 'D#', 'D', 'C#']

        // ノートネームを作成
        const ticks = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]

        let n = this.state.baseNote
        
        const rows = notes.map((note, indexRow) => (
            <tr key={note}>
                <th style={this.th}>{note}</th>
                {ticks.map((hoge, indexCol) => 
                    <PianoRollElement key={hoge} row={n - indexRow} col={indexCol} />
                )}
            </tr>
        ))

        return (
            <table className="table table-bordered table-sm"><tbody>
                {rows}
            </tbody></table>
        )
    }
}

//export default connect(state=>state)(PianoRoll)
export default PianoRoll
