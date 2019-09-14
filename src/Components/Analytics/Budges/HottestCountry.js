import React, { Component } from 'react';

class HottestCountry extends Component {

	countryLoop = () => {
		let countries = [...new Set(this.props.data.map(c => c.country))]
		// console.log(countries)
		let sum = 0
		let country
		for (let c of countries) {
			let s = 0
			this.props.data.map(d => d.country === c && d.sold === true ? s++ : null)
			if (s > sum) {
				sum = s
				country = c
			}
		}
		return country
	}

	render() {
		let country = this.countryLoop()
		return (
			<div>
				<div className='icon-container grow globe'>
					<i className='fas fas-budge fa-globe-americas'></i>
				</div>
				<h2>{country}</h2>
				<p>Hottest Country</p>
			</div>
		);
	}
}

export default HottestCountry;