import React, { Component } from 'react';
import { Modal, ModalBody, ModalFooter, Button } from 'reactstrap';

class ModalEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameItem: this.props.dataItem ? this.props.dataItem.name : "",
      descriptionItem: this.props.dataItem ? this.props.dataItem.description : ""
    }
  }

  updateItem = async () => {
    let url ="http://localhost:62284/api/Brand/update-brand"
    let id = this.props.dataItem.id
    let name = this.state.nameItem
    let description = this.state.descriptionItem
    console.log(id, name, description)

    let data = {
      id: id,
      name: name,
      description: description
    }
    console.log("🚀===> data", data)

    let res = await fetch( url , {
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
    console.log(this.state.nameItem)
    console.log(this.state.descriptionItem)
    return (
      <Modal
        centered
        isOpen={this.props.isOpen}
        toggle={this.props.toggle}
      >
        <ModalBody>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input 
              type="text"
              className="form-control"
              name="name"
              id="name"
              value={this.props.dataItem.name} 
              onChange={(e) => this.setState({nameItem: e.target.value})}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <input 
              type="text" 
              className="form-control" 
              name="description" 
              id="description" 
              value={this.props.dataItem.description} 
              onChange={(e) => this.setState({descriptionItem: e.target.value})}
            />
          </div>
        </ModalBody>
        <ModalFooter>
          <div style={{display: "flex", justifyContent: "space-between"}}>
            <Button style={{marginRight: "16px"}} color="primary" onClick={() => this.updateItem()}>Save</Button>
            <Button color="secondary" onClick={this.props.toggle}>Cancel</Button>
          </div>
        </ModalFooter>
      </Modal>
    );
  }
}

export default ModalEdit;