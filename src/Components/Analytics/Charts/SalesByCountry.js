import React, {Component} from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';


class SalesByCountry extends Component {
	constructor(props) {
		super(props)
	}

	salesPerCountry = () => {
		let countryObj = {}
		let countries = [...new Set(this.props.data.map(c => c.country))]
		for (let i = 0; i < countries.length; i++) {
			countryObj[countries[i]] = 0
		}
		this.props.data.map(c => c.sold === true ? countryObj[c.country]++ : null)
		let keys = Object.keys(countryObj)
		let val = Object.values(countryObj)
		let contryArr = []
		for(let i = 0 ; i < keys.length ; i++) {
			contryArr.push( keys[i] + ' ' + val[i] )
		}
		// console.log(contryArr)
		return contryArr
	}

	strCutter = (c) =>{
		return c.split(' ')
	}
	render() {
		let info = this.salesPerCountry()
		// console.log(info)
		const renderBarChart = (
		<BarChart width={600} height={300} data={info.map(c => { return { name : this.strCutter(c)[0] , sales : this.strCutter(c)[1] }})}>
		  <XAxis dataKey="name" stroke="#955196" />
		  <YAxis />
		  <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
		  <Legend width={100} wrapperStyle={{ top: 250, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
		  <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
		  <Bar type="monotone" dataKey="sales" fill="#955196" barSize={30} />
		</BarChart> )
	     return(
			<div>
				<h4>Sales By Country</h4>
				{renderBarChart}
	      	</div>
		  );
	}
}

export default SalesByCountry;





// Sales By Country
// Display the sales by country using a bar chart (another grouping, no need to sort)