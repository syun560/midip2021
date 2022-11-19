import React, { Component } from 'react'
import {useState} from 'react'
import PianoRollCell from './PianoRollCell'
import { connect } from 'react-redux'
import Lib from '../Lib'

const PianoRoll = (props) => {
    // div全体（スクロールできる）
    const box = {
        height: '500px',
        overflow: 'auto',
        cursor: 'pointer',
        userSelect: 'none'
    }
    const th = {
        width: '100px'
    }
    const [state, setState] = useState({
        width: 16,
        height: 13,
        baseNote: 72,
        isSingle: true, // 単音モード
        isPreview: true, // プレビューするかどうか
    })
    
    const changeBaseKey = (e) => { setState({...state, baseNote: e.target.value}) }
    const changeMea = (e) => { 
        props.dispatch({type: 'MOVE_MEA', mea: e.target.value}) 
    }
    const changeSingle = (e) => {setState({...state, isSingle: e.target.checked})}
    const changePreview = (e) => {setState({...state, isPreview: e.target.checked})}


    // 読み込み時にピアノロールの中央までスクロールを行う
    // componentDidMount() {
    //     this.ref.current.scrollIntoView({
    //         block: 'center'
    //     })
    // }

    // スケールによってピアノロールの色を変える
    const rollStyle = (note) => {
        // スケール（とりあえず、ダイアトニック）
        const scale = [1,0,1,0,1,1,0,1,0,1,0,1]
        // スケール外の音
        const tr_outScale = { background: 'whitesmoke' }
        // スケール内の音
        const tr_onScale = { background: 'white' }
        // 現在の調の音
        const tr_baseKey = { background: 'mistyrose' }
        // オフセット
        const offset = (note - state.baseNote + 120) % 12

        if (offset == 0) return tr_baseKey
        if (scale[offset]) return tr_onScale
        else return tr_outScale
    }

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
    const roll = notes.map((fuga, indexRow) => {
        const note = 127 - indexRow
        return (
            <tr key={fuga} style={rollStyle(note)}>
                {/* 音階 */}
                {/* <th style={th} ref={note == state.baseNote ? this.ref : ''}>{Lib.noteNumberToNoteName(note)}</th> */}
                <th style={th}>{Lib.noteNumberToNoteName(note)}</th>


                {/* 選択できる部分 */}
                {ticks.map((hoge, indexCol) => 
                    <PianoRollCell key={hoge} row={note} col={indexCol} isSingle={state.isSingle} isPreview={state.isPreview} />
                )}
            </tr>
        )
    })

    return (
        <div>
            {/* ピアノロール表示 */}
            <div style={box}>
            <table className="table table-bordered table-sm"><tbody>
                {roll}
            </tbody></table>
            </div>

            {/* 操作部 */}
            <p>
                {/* 調性 */}
                <label>Key: </label>
                <input type="number" value={state.baseNote} min="12" max="127" onChange={(changeBaseKey)} />
                ({Lib.noteNumberToNoteName(state.baseNote)})

                {/* 小節 */}
                <label>Mea: </label>
                <input type="number" value={props.mea} min="1" max="127" onChange={changeMea} />

                {/* 単音モードボタン */}
                <label>Single: </label>
                <input type="checkbox" id="single" onChange={changeSingle} checked={state.isSingle} />

                {/* プレビューボタン */}
                <label>Preview: </label>
                <input type="checkbox" id="single" onChange={changePreview} checked={state.isPreview} />
            </p>                
        </div>
    )
    
}

export default connect(state=>state)(PianoRoll)
