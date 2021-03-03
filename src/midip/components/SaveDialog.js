import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Modal } from 'react-bootstrap';

class SaveDialog extends Component {
    closeModal() {
        this.setState({isModalOpen: false})
    }
    openModal() {
        this.setState({isModalOpen: true})
    }
    onChange(e) {
        this.setState({name: e.target.value})
    }
    save(e) {
        e.preventDefault()
        this.props.dispatch({
            type: 'SAVE_SONG',
            name: this.state.name
        })
        this.closeModal()
    }


    constructor(props) {
        super(props)

        // ステートの設定
        this.state = {
            isModalOpen: false,
            name: ''
        }

        this.closeModal = this.closeModal.bind(this)
        this.openModal = this.openModal.bind(this)
        this.onChange = this.onChange.bind(this)
        this.save = this.save.bind(this)
    }

    render() {
        return <>
        <Button variant="primary" onClick={this.openModal}>
            Save
        </Button>

        <Modal show={this.state.isModalOpen} onHide={this.closeModal}>
            <Modal.Header closeButton>
                <Modal.Title>Save As...</Modal.Title>
            </Modal.Header>
            
            <Modal.Body>
                <form onSubmit={this.save}>
                    <input
                        className='form-control'
                        type="text" 
                        value={this.state.name} 
                        onChange={this.onChange}
                        placeholder='Title'
                        />
                    <input type="submit" value='Save' />
                </form>
            </Modal.Body>
            </Modal>
        </>
    }
}

export default connect(state => state)(SaveDialog)
