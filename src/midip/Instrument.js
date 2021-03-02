import React, { Component } from 'react'
import { connect } from 'react-redux'
import ChordPlayer from './ChordPlayer';

class Instrument extends Component {

    // Inputを受け取ったときのイベント
    inputEvent(e) {
        let target = e.target;
        let message = '';
        let numArray = [];
        // 2桁の16進数にして表示する
        // リアルタイムメッセージ（f8 or feは無視、なんとかして消したい）
        e.data.forEach(val=> {
            // if (val == 0xf8 || val == 0xfe) return
            // numArray.push(('00' + val.toString(16)).substr(-2)); // 謎
            numArray.push(val.toString(16))
        });
        if (numArray[0] == 'f8' || numArray[0] == 'fe') return 
        message = numArray.join(' ');
        
        // 選択中のDeviceに結果を送信する
        this.state.outPorts[0].device.send(e.data);

        // 2桁の16進数を表示
        console.log(message);
    }

    // アウトプットセレクトタグが変化した場合
    doChange(e) {
        this.setState({ selectedOutPortID : e.target.value })
    }

    // テストで音を鳴らす
    doClick() {
        // 出力先の MIDI ポートを取得
        const output = this.outputs.get(this.state.selectedOutPortID);

        // MIDI メッセージを送信
        output.send([0x90, 60, 100]);                                       // ノートオン
        output.send([0x80, 60, 100], window.performance.now() + 500);      // 1秒後にノートオフ
        // MIDI メッセージを送信
        output.send([0x90, 64, 100]);                                       // ノートオン
        output.send([0x80, 64, 100], window.performance.now() + 500);      // 1秒後にノートオフ
        // MIDI メッセージを送信
        output.send([0x90, 67, 100]);                                       // ノートオン
        output.send([0x80, 67, 100], window.performance.now() + 500);      // 1秒後にノートオフ

        // outputを登録する
        this.props.dispatch({type: 'REGISTER_OUTPUT', output: output})
    }

    constructor(props){
        super(props)

        // ステートの設定
        this.state = {
            message: 'please wait...',
            inPorts: [],
            outPorts: [],
            selectedOutPortID: '',
            selectedInPortID: '',
        }
        
        navigator.requestMIDIAccess({sysex: true}).then(
            // 通信成功時
            (midiAccess) => {                
                // InPortの取得、設定
                let inputIterator = midiAccess.inputs.values();
                let inPorts = []
                for (let input = inputIterator.next(); !input.done; input = inputIterator.next()) {
                    let value = input.value;
                    inPorts.push({
                        name: value.name,
                        ID: value.id
                    })
                    // イベント登録
                    value.addEventListener('midimessage', this.inputEvent, false);
                }
                if (inPorts.length) this.setState({ selectedInPortID: inPorts[0].ID })
                this.setState({ inPorts: inPorts })

                // OutPortの取得、設定
                let outPorts = []
                this.outputs = midiAccess.outputs
                for (let output of this.outputs.values()) {
                    outPorts.push({
                        device: output,
                        name: output.name,
                        ID: output.id
                    })
                }
                if (outPorts.length) {
                    this.setState({ 
                        selectedOutPortID: outPorts[0].ID
                    })

                    // outputを登録する
                    this.props.dispatch({type: 'REGISTER_OUTPUT', output: this.outputs.get(outPorts[0].ID)})
                }
                this.setState({ 
                    outPorts: outPorts
                })
                
                console.log("MIDI READY!!!");
                this.setState({message: "MIDI READY"})

                // チャンネルを初期化する（Programのセットを行う）
                this.props.dispatch({
                    type: 'PROGRAM_SET_ALL'
                })
            },
            // 通信失敗時
            (msg) => {
                console.log("MIDI FAILED - " + msg);
            }
        )

        this.doClick = this.doClick.bind(this)
        this.doChange = this.doChange.bind(this)
        this.inputEvent = this.inputEvent.bind(this)
    }

    render() {
        // セレクトタグの内容を作る
        let n = 0
        let in_items = this.state.inPorts.map(value =>
            <option key={n++} value={value.ID}>{value.name} ({value.ID})</option> 
            )
        let out_items = this.state.outPorts.map(value =>
            <option key={n++} value={value.ID}>{value.name} ({value.ID})</option> 
            )

        return (
        <div className='row'>
            <div className='col-md-3'>
                <table><tbody>
                    <tr><td>Input: </td><td><select>{ in_items }</select></td></tr>
                    <tr><td>Output: </td><td><select onChange={this.doChange} defaultValue="-1">{ out_items }</select></td></tr>
                </tbody></table>
            </div>
            <div className='col-md-3'>
                <ChordPlayer />
            </div>
        </div>
        )
    }
}

export default connect(state=>state)(Instrument)
