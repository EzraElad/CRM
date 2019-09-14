import React, { Component } from 'react';
import Update from './Update';

class Actions extends Component {
  constructor(){
    super()
    this.state = {
      firstName : '',
      lastName : '',
      country : '',
      owner:''
    }
  }
  addClient = (e) => {
    let inputVal = e.target.value
    const name = e.target.name;   
    this.setState({
    [name]: inputVal
    })
  }
  
  sendChanges = () =>{
    let first = this.state.firstName[0].toUpperCase() + this.state.firstName.slice(1)
    let last = this.state.lastName[0].toUpperCase() + this.state.lastName.slice(1)
    let name= first + ' ' + last
    let obj = {
      name: name,
      country : this.state.country,
      owner: this.state.owner
    }
    this.props.addClient(obj)
  }

  render() {
    return (
      <div>
        <div className='action-update' >
          <Update updateFun={this.props.updateFun} DeclareSale={this.props.DeclareSale} data={this.props.data} />
        </div>
        <div className='add-client'>
          <h3>Add Client</h3>
          <div>
            <b>First name</b> <input type='text' name="firstName"  value={this.state.firstName} onChange={this.addClient}/>
          </div><br />
          <div>
            <b>Surname</b> <input type='text' name="lastName" value={this.state.lastName} onChange={this.addClient}/>
          </div><br />
          <div>
            <b>Country</b> <input type='text' name="country" value={this.state.country} onChange={this.addClient} />
          </div><br />
          <div>
            <b>Owner</b> <input type='text' name="owner" value={this.state.owner} onChange={this.addClient} />
          </div><br />
          <button className='addbtn f6 grow no-underline br-pill ph3 pv2 mb2 dib black  ' onClick={this.sendChanges}>Add New Client</button>
        </div>
      </div>
    );
  }
}

export default Actions;
