import React, { Component } from 'react';
import { Modal, ModalBody, ModalFooter, Button } from 'reactstrap';

class ModalAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nameItem: null,
            descriptionItem: null
        }
    }

    addItem = async () => {
        let url ="http://localhost:62284/api/Brand/add-brand"
        let name = this.state.nameItem
        let description = this.state.descriptionItem
        let data = {
            name: name,
            description: description
        }
        let res = await fetch(url, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data) 
        })
        let result = await res.json()
        console.log(result)
        if (result) {
        alert("Success")
        // window.location.reload()
        this.props.toggle()
        this.props.setIsLoading()
        this.props.isUpdate()
        } else {
        alert("API Ngu!!!")
        }
    }
    render() {
        return(
            <Modal
                centered
                isOpen={this.props.isOpen}
                toggle={this.props.toggle}
            >
                <ModalBody>
                <div className="form-group">
                    <label htmlFor="email">Email address:</label>
                    <input 
                    type="text"
                    className="form-control"
                    name="name"
                    id="email"
                    value={this.state.nameItem} 
                    onChange={(e) => this.setState({nameItem: e.target.value})}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="pwd">Password:</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    name="description" 
                    id="pwd" 
                    value={this.state.descriptionItem} 
                    onChange={(e) => this.setState({descriptionItem: e.target.value})}
                    />
                </div>
                </ModalBody>
                <ModalFooter>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <Button style={{marginRight: "16px"}} color="primary" onClick={() => this.addItem()}>Save</Button>
                    <Button color="secondary" onClick={this.props.toggle}>Cancel</Button>
                </div>
                </ModalFooter>
            </Modal>
        );
    }
}

export default ModalAdd;