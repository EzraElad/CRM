import React, {Component} from 'react';

class OutstandingClients extends Component {

	render() {
	    let notSold = this.props.data.filter( d => d.sold === false )
		let num = notSold.length
	     return(
		  <div>
			  <div className='icon-container grow people'>
			  <i className='fas fas-budge fa-users'></i>
			  </div>
			  <h2>{num}</h2>
			  <p>Outstanding Clients</p>
		  </div>
		  )
	}
}

export default OutstandingClients;