import React, { Component } from 'react';
import TopEmployees from "./TopEmployees";
import SalesByCountry from "./SalesByCountry";
import SalesSince from './SalesSince';
import ClientAcquisition from './ClientAcquisition';

class ChartsLists extends Component {

	render() {
		return (
			<div>
				<div className='ChartsLists'>
					<TopEmployees data={this.props.data} />
					<SalesByCountry data={this.props.data} />
				</div>
				<div className='pie'>
					<SalesSince data={this.props.data} />
					<ClientAcquisition />
				</div>
			</div>
		);
	}
}

export default ChartsLists;