import React, { Component } from 'react';
import moment from 'moment'
import Popup from './Popup';

class Client extends Component {
    constructor(){
        super()
        this.state = {
            open : false,
            close: true
        }
    }

    // openForm = () => {
    //     this.props.openForm()
    // }
    openForm = () => {
        this.setState({ open : !this.state.open })
    }
   

    render() {
        let data = this.props.data
        let names = data.name.split(' ')
        return (
            <div>
                <div>
                    <div className='client-row' onClick={this.openForm} >
                        <div >{names[0] + ' '}</div>
                        <div >{names[1] + ' '}</div>
                        <div >{data.country + ' '}</div>
                        <div >{moment(data.firstContact).format("L")}</div>
                        <div >{data.emailType}</div>
                        <div >{data.sold === true ? <i class="fas fa-check"></i> : '-'}</div>
                        <div >{data.owner}</div>
                    </div>
                </div>
                        <div className="form-popup br3" >
                            {this.state.open && this.state.close ? <Popup updateClient={this.props.updateClient} openForm={this.openForm} id={data._id} first={names[0]} last={names[1]} country={data.country} /> : null}
                        </div>
                </div>
        )
    }
}

export default Client;
