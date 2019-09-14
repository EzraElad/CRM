import React, { Component } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';

class SalesSince extends Component {

	salesSinceFunc = () => {
		let data = this.props.data
		let today = new Date();
		let mm = String(today.getMonth() + 1).padStart(2, '0'); // 08
		let yyyy = '' + today.getFullYear() // 2019
		let date = yyyy + '-' + mm // 2019-08
		let d = new Date()
		let months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
		let n = months[d.getMonth()]; // August
		let num = '0' + 8 // Stringify

		let sArr = [date]
		let month = parseInt(mm)
		let year = today.getFullYear()
		for(let i = 0 ; i < 12 ; i++){
			month--
			if(month === 0 ){
				month = 12
				year--
			}
			month = String(month).padStart(2, '0')
			sArr.push(year+'-'+month)
		}

		let newObj = {
			[sArr[0]] : 0 ,
			[sArr[1]] : 0 ,
			[sArr[2]] : 0 ,
			[sArr[3]] : 0 ,
			[sArr[4]] : 0 ,
			[sArr[5]] : 0 ,
			[sArr[6]] : 0 ,
			[sArr[7]] : 0 ,
			[sArr[8]] : 0 ,
			[sArr[9]] : 0 ,
			[sArr[10]] : 0 ,
			[sArr[11]] : 0 ,
			[sArr[12]] : 0 ,
		}
		for(let i =0 ; i < 12 ; i++){
			data.map(c => c.sold === true && c.firstContact.slice(0,7) === sArr[i] ? newObj[`${sArr[i]}`]++ : null )
		}
		// console.log(newObj)
		let keys = Object.keys(newObj)
		let val = Object.values(newObj)
		let anotherArr = []
		for(let i = 0 ; i < keys.length ; i++) {
			anotherArr.push( keys[i] + ' ' + val[i] )
		}
		anotherArr = anotherArr.reverse()
		console.log(anotherArr)
		return anotherArr
	}
	strCutter = (c) =>{
		return c.split(' ')
	}

	render() {
		let info = this.salesSinceFunc()
		const SimpleLineChart = (
			<LineChart width={800} height={300} data={info.map(c => { return { name : this.strCutter(c)[0] , sales : this.strCutter(c)[1] }})}
						 margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
				<XAxis dataKey="name" />	
				<YAxis />
				<CartesianGrid strokeDasharray="3 3" />
				<Tooltip />
				<Legend />
				<Line type="monotone" dataKey="sales" stroke="#FF6E54" activeDot={{ r: 8 }} />
			</LineChart>)
		let year = new Date().getFullYear() - 1 // 2018
		let d = new Date()
		let months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
		let n = months[d.getMonth()]
		return (
			<div>
				<h4>Sale Since {n +' '+ year} </h4>
				{SimpleLineChart}
			</div>
		)
	}
}

export default SalesSince;

