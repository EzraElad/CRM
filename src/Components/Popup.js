import React, { Component } from 'react';

class Popup extends Component {
    constructor(props){
        super(props)
        this.state = {
            first : this.props.first,
            last : this.props.last,
            country : this.props.country
        }
    }

    updateClient = () =>{
        let fullName = this.state.first + ' ' + this.state.last
        let obj = {
            id :  this.props.id,
            name : fullName ,
            country : this.state.country
        }
        console.log(this.props.id)
        // debugger;
        this.props.updateClient(obj)
    }

    closeForm = () =>{
        this.props.openForm()
    }
    updateValue = async (e) => {
        let name = e.target.name
        await this.setState({ [name]: e.target.value })
        console.log(this.state[name])
    }
    render() {
        // console.log()
        return (
            <div className="dib br3 pa3 bw2 shadow-5" id="myForm">
                <form action="/action_page.php" class="form-container">
                    <div className='ma3'>
                        <b className='x' onClick={this.closeForm}>x</b>
                        <label for="email"><b>Name</b></label>
                        <input type="text" value={this.state.first} onChange={this.updateValue} name="first"  required></input>
                    </div>
                    <div className='ma3'>
                        <label for="psw"><b>Surname</b></label>
                        <input type="text" value={this.state.last} onChange={this.updateValue} name="last" required></input>
                    </div>
                    <div className='ma3'>
                        <label for="psw"><b>Country</b></label>
                        <input type="text" value={this.state.country} onChange={this.updateValue} name="country" required></input>
                    </div>
                    <div className='ma3'>
                        <button type="submit" class="btn grow bg-black white pa2 b--none" onClick={this.updateClient}>Update</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Popup;
