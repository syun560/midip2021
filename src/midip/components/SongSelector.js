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
    }

    render() {
        let items= this.props.songs.map(song=>(
            <tr key={song.id} onClick={()=>this.selectID(song.id)}
                className={this.state.selectedID === song.id ? "table-active" : ''}>
                <td>{song.id}: {song.name}</td>
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
                <Table>
                <tbody>
                    <tr>
                        <th>Song Name</th>
                        <th>Updated</th>
                        <th>Author</th>
                    </tr>
                    {items}
                </tbody>
                </Table>
            </Modal.Body>
            
            <Modal.Footer>
                { this.state.selectedID !== -1 &&
                    <Button variant="primary" onClick={this.openSong}>
                        Open
                    </Button>
                }
            </Modal.Footer>
            </Modal>
        </>
    }
}

export default connect(state => state)(SongSelector)
