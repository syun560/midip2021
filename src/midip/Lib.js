class Lib {
    static noteON(output, note, gate, vel) {
        output.send([0x90, note.num, 100])
        output.send([0x80, 60, 100], window.performance.now() + 100);      // 1秒後にノートオフ
    }
}


export default Lib