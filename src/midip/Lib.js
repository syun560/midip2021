class Lib {
    static noteNumberToNoteName(num) {
        const notes_name = ['C','C#','D','D#','E','F', 'F#', 'G', 'G#', 'A', 'A#', 'B']
        const base = Math.floor(num / 12) - 1
        const offset = num % 12
        return notes_name[offset] + base.toString()
    }
}


export default Lib