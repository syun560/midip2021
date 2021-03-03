import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Modal, Table } from 'react-bootstrap';

class SongSelector extends Component {
    closeModal() {
        this.setState({isModalOpen: false})
    }
    openModal() {
        this.setState({isModalOpen: true})
    }
    selectID(id) {
        this.setState({selectedID: id})
    }
    openSong() {
        this.props.dispatch({
            type: 'OPEN_SONG',
            id: this.state.selectedID
        })
        this.closeModal()
    }
    delSong() {
        this.props.dispatch({
            type: 'DEL_SONG',
            id: this.state.selectedID
        })
    }

    constructor(props) {
        super(props)

        // ステートの設定
        this.state = {
            isModalOpen: false,
            selectedID: -1
        }

        this.closeModal = this.closeModal.bind(this)
        this.openModal = this.openModal.bind(this)
        this.selectID = this.selectID.bind(this)
        this.openSong = this.openSong.bind(this)
        this.delSong = this.delSong.bind(this)
    }

    render() {
        let items= this.props.songs.map(song=>(
            <tr key={song.id} onClick={()=>this.selectID(song.id)}
                className={this.state.selectedID === song.id ? "table-active" : ''}>
                <td>{song.name}</td>
                <td>{song.updated}</td>
                <td>{song.author}</td>
            </tr>
        ))

        return <>
        <Button variant="primary" onClick={this.openModal}>
            Open
        </Button>

        <Modal show={this.state.isModalOpen} onHide={this.closeModal}>
            <Modal.Header closeButton>
                <Modal.Title>Song List</Modal.Title>
            </Modal.Header>
            
            <Modal.Body>
                <table className="table table-hover table-sm">
                <thead className="thead-light">
                    <tr>
                        <th>Title</th>
                        <th>Updated</th>
                        <th>Author</th>
                    </tr>
                </thead>
                <tbody>
                    {items}
                </tbody>
                </table>
            </Modal.Body>
            
            <Modal.Footer>
                { this.state.selectedID !== -1 && <>
                    <Button variant="danger" onClick={this.delSong}>
                        Del
                    </Button>
                    <Button variant="primary" onClick={this.openSong}>
                        Open
                    </Button>
                </>}
            </Modal.Footer>
            </Modal>
        </>
    }
}

export default connect(state => state)(SongSelector)
