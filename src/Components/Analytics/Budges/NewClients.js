import React, { Component } from 'react';


class NewClients extends Component {

	theComperator = (str) => {
		let today = new Date();
		let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
		let yyyy = '' + today.getFullYear();
		let yearSlicer = (str) => {
			if (str === undefined) {
				return;
			} else {
				// console.log(str.slice(0, 4))
				return str.slice(0, 4)
			}
		}
		let monthSlicer = (str) => {
			if (str === undefined) {
				return;
			} else {
				// console.log(str.slice(5, 7))
				return str.slice(5, 7)
			}
		}
		let month = monthSlicer(str)
		let year = yearSlicer(str)
		
		if(month == mm && year == yyyy ){
			return true
		}
	}


	findNewClients = () => {
		let newClientsSum = 0
		let data = this.props.data
		data.map(c => this.theComperator(c.firstContact) === true ? newClientsSum++ : null)
		return newClientsSum
	}
	//slice(0,4) Brings the Year VVV    //  slice(5,7) Brings the month! VVV
	render() {
		let today = new Date();
		let newClients = this.findNewClients()
		const monthNames = ["January", "February", "March", "April", "May", "June",
			"July", "August", "September", "October", "November", "December"]
		let month = monthNames[today.getMonth()] // August
		return (
			<div className='budget-container'>
				<div className='icon-container grow chart'>
					<i className='fas fas-budge fa-chart-line' ></i>
				</div>
				<h2 className='budget-header'>{newClients}</h2>
				<p className='budget-p'>New {month} Clients</p>
			</div>
		)
	}
}

export default NewClients;