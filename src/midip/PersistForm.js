import React, { Component } from 'react'
import { connect } from 'react-redux'
import { pstore } from '../App'

class PersistForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isPersist: true
        }
        this.doChange = this.doChange.bind(this)
    }

    doChange(e) {
        let f = e.target.checked
        this.setState({
            isPersist: f
        })
        if (f) {
            pstore.persist()
            pstore.flush()
        } else {
            pstore.pause()
        }
    }

    delCache() {
        pstore.purge()
        alert('cache cleared')
    }

    render () {
        return <>
            <label>
                <input type="checkbox" id="check" onChange={this.doChange} checked={this.state.isPersist} />
                Persist
            </label>
            <button onClick={this.delCache}>delCache</button>
        </>
    }
}

export default connect(state=>state)(PersistForm)