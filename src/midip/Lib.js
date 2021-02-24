class Lib {
    // ノートナンバー（64）をノート（C5）に変換する
    static noteNumberToNoteName(num) {
        const notes_name = ['C','C#','D','D#','E','F', 'F#', 'G', 'G#', 'A', 'A#', 'B']
        const base = Math.floor(num / 12) - 1
        const offset = num % 12
        return notes_name[offset] + base.toString()
    }

    static chordNameToNoteEvents(name) {
        const chordPattern = {
            major: [0, 4, 7],
            minor: [0, 3, 7],
            major7: [0, 4, 7, 11]
        }

        // 解析する（splitなどを利用する）
        let baseName = ''
        let chordName = ''

        if (name[1] == '#') {
            baseName = name.substr(0, 2)
            chordName = name.substr(2)
        }
        else {
            baseName = name.substr(0, 1)
            chordName = name.substr(1)
        }

        // ノート取得
        const notes_name = ['C','C#','D','D#','E','F', 'F#', 'G', 'G#', 'A', 'A#', 'B']
        let baseNote = 60
        baseNote += notes_name.indexOf(baseName)

        // コード取得
        let chord = []
        switch(chordName) {
            case '':
                chord = chordPattern.major
                break
            case 'm':
                chord = chordPattern.minor
                break
            default:
                break
        }

        let noteEvents = []
        chord.map((offset)=>{
            noteEvents.push({
                note: baseNote + offset,
                vel: 100,
                gateMs: 500
            })
        })

        return noteEvents
    }
}


export default Lib