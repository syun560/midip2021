import React, { Component } from 'react'
import { connect } from 'react-redux'
import ChordPlayerCell from './ChordPlayerCell'

class ChordPlayer extends Component {

    // 五度圏
    circleOfFifthKey   = ['','','','','7b', '6b',  '5b',  '4b', '3b', 'bb', 'b',  '♮',   '#', '##', '3#',  '4#',  '5#', '6#',  '7#','','','','']
    circleOfFifthMajor = ['G','D',  'A',   'E',   'B',  'F#',  'C#',  'G#', 'D#', 'A#', 'F',   'C',  'G',  'D',  'A',   'E',   'B', 'F#', 'C#', 'G#', 'D#', 'A#', 'F']
    circleOfFifthMinor = ['Em','Bm', 'F#m', 'C#m','G#m','D#m', 'A#m', 'Fm', 'Cm', 'Gm', 'Dm', 'Am', 'Em', 'Bm', 'F#m', 'C#m', 'G#m','D#m', 'A#m','Fm', 'Cm', 'Gm', 'Dm']

    // 調を変える
    doClick(e) {
        const key = e.target.getAttribute('data-key')
        this.setState({nowKey: key})
    }

    constructor(props){
        super(props)

        // ステートの設定
        this.state = {
            nowKey: 11,
        }

        this.doClick = this.doClick.bind(this)
        this.createStyle = this.createStyle.bind(this)
    }

    // スタイルによって色を変える
    createStyle(key) {
        let style = null
        if(this.state.nowKey == key){
            style = {
                cursor: 'pointer',
                background: 'pink'
            }
        }else {
            style = {
                cursor: 'pointer'
            }
        }
        return style
    }

    render() {
        // td作成
        const item0 = this.circleOfFifthKey  .map((name, index)=><th key={index} style={this.createStyle(index)} onClick={this.doClick} data-key={index}>{name}</th>)
        const item1 = this.circleOfFifthMajor.map((name, index)=><ChordPlayerCell key={index} index={index} nowKey={this.state.nowKey} chord={name + (this.state.isSeventh ? '7' : '')} />)
        const item2 = this.circleOfFifthMinor.map((name, index)=><ChordPlayerCell key={index} index={index} nowKey={this.state.nowKey} chord={name + (this.state.isSeventh ? '7' : '')} />)

        return (
            <table className='table table-bordered'><tbody>
                <tr>
                    {item0}
                </tr>
                <tr>
                    {item1}
                </tr>
                <tr>
                    {item2}
                </tr>
            </tbody></table>
        )
    }
}

export default connect(state=>state)(ChordPlayer)
