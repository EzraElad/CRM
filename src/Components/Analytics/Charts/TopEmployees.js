import React, { Component } from 'react';
import { BarChart, Bar, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

class TopEmployees extends Component {
	constructor(props) {
		super(props)
	}

	TopEmployee = () => {
		let ownerObj = {}
		let ownersName = [...new Set(this.props.data.map(c => c.owner))]
		for (let i = 0; i < ownersName.length; i++) {
			ownerObj[ownersName[i]] = 0
		}
		this.props.data.map(c => c.sold === true ? ownerObj[c.owner]++ : null)
		// console.log(ownerObj)
		let keysSorted = Object.keys(ownerObj).sort(function (a, b) { return ownerObj[a] - ownerObj[b] }).reverse()
		let x = keysSorted.slice(0,3)
		// console.log(x);
		let newArr = []
		let numArr = []
		for(let j =0 ; j < x.length ; j++){
			let keyUn = `${x[j]}`
			let val = ownerObj[`${x[j]}`]
			numArr.push(val)
			let obj = {
				[keyUn] : val
			}
			newArr.push(obj)
		}
		// console.log(newArr)
		let re = (x +',' + numArr).split(',')
		return re
	}

	render() {
		let info = this.TopEmployee()
		const data = [
			{ name: info[0], uv: info[3]},
			{ name: info[1], uv: info[4]},
			{ name: info[2], uv: info[5]}
		];
		//IN XA >>> tick={renderCustomAxisTick}
		const renderBarChart = (
			<BarChart layout="vertical"  width={600} height={300} data={data} margin={{ top: 20, left: 20 }}>
				<XAxis dataKey="uv" type='number' />
				<YAxis dataKey="name" type='category'/>
				<Tooltip  />
				<Bar type="monotone" dataKey="uv" barSize={30} fill="#003F5C" />
			</BarChart>
		);//IN BAR >>> label={renderCustomBarLabel}
		this.TopEmployee()
		return (
			<div>
				<h4>Top Employees</h4>
				{renderBarChart}
			</div>
		)
	}
}
// <BarChart layout="vertical" width={600} height={300} data={data}
//                margin={{top: 20, left: 20}}>
export default TopEmployees;
