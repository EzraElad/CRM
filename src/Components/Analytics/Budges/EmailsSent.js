import React, {Component} from 'react';

class EmailsSent extends Component {

	render() {
		// console.log(this.props.data.length)
		let emails = this.props.data.filter( d => d.emailType )
		let num = emails.length
	     return(
		  <div>
			  <div className='icon-container grow email'>
			  <i className='fas fas-budge fa-envelope'></i>
			  </div>
			  <h2>{num}</h2>
			  <p>Emails Sent</p>
		  </div>
	      )
	}
}

export default EmailsSent;