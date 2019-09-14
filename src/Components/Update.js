import React, { Component } from 'react';

class Update extends Component {

    constructor(){
        super()
        this.state = {
            name : 'Perkin Cunningham' ,
            owner : 'Emily Durham',
            emailType : 'A',
        }
    }

    stateChanger = async (e) => {
        let name = e.target.name
        // console.log(name)
        await this.setState({ [name] : e.target.value})
        // console.log(this.state)
    }

    updateFun = (e) => {
        // console.log(e.target.name + '  ' + this.state.name)
        this.props.updateFun(this.state[e.target.name] , this.state.name , e.target.name )
    }

    DeclareSale = (e) => {
        this.props.DeclareSale(e.target.value)
    }

    render() {
        const emails = ['A', 'B', 'C', 'D']
        let data = this.props.data
        let ownersName = [...new Set(data.map(c => c.owner))]
        return (
            <div>
                <h3>UPDATE</h3>
                <div>
                    <span><b>Client : </b>
                        <select name='name' onChange={this.stateChanger}>
                            {this.props.data.map(c => <option value={c.name}>{c.name}</option>)}
                        </select>
                    </span>
                </div><br />
                <div>
                    <span><b>Transfer ownership to : </b>
                        <select name='owner' onChange={this.stateChanger}>
                            {ownersName.map(o => <option >{o}</option>)}
                        </select>
                        <button onClick={this.updateFun} name='owner' className='addbtn f6 grow no-underline br-pill ml2 ph3 pv2 mb2 dib black'>Transfer</button>
                    </span>
                </div><br />
                <div>
                    <span><b>Send email: </b>
                        <select name='emailType' onChange={this.stateChanger}>
                            {emails.map(e => <option >{e}</option>)}
                        </select>
                        <button onClick={this.updateFun} name='emailType' className='addbtn f6 grow no-underline br-pill ml2 ph3 pv2 mb2 dib black'>Send</button>
                    </span>
                </div><br />
                <div>
                    <span><b>Declare sale </b><button value={this.state.name} onClick={this.DeclareSale} className='addbtn f6 grow no-underline br-pill ph3 pv2 mb2 dib black'> Sold !</button></span>
                </div><br /><hr className='bg-gray' />
            </div>
        )
    }
}

export default Update;