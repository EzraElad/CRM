import React, { Component } from 'react';

class ClientHeader extends Component {
//cHeader bg-yellow dib br3 pa3 bw2 shadow-5 
	render() {
		return (
				<div className='client-head-container'>
					<div className='name' >Name</div>
					<div >Surname</div>
					<div >Country</div>
					<div >First Contact</div>
					<div >Email</div>
					<div >Sold</div>
					<div >Owner</div>
				</div>
		);
	}
}

export default ClientHeader;