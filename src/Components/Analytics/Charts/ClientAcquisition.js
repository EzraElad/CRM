import React, { Component } from 'react';
import { ResponsiveContainer, PieChart, Pie, Tooltip, Legend } from 'recharts';

class ClientAcquisition extends Component {

	render() {
		const data = [{ name: 'Group A', value: 400 }, { name: 'Group B', value: 300 },
					  { name: 'Group C', value: 300 }, { name: 'Group D', value: 200 },
					  { name: 'Group E', value: 278 }, { name: 'Group F', value: 189 }]
		const SimplePieChart = (
			<PieChart width={800} height={400}>
				<Pie isAnimationActive={false} data={data} cx={200} cy={200} outerRadius={80} fill="#8884d8" label />
				<Tooltip />
			</PieChart>)
		return (
			<div id="container">
				<h4>Client Acquisition</h4>
				{SimplePieChart}
			</div>
		)
	}
}

export default ClientAcquisition;

// const data = [{ name: 'Group A', value: 400 }, { name: 'Group B', value: 300 },
// { name: 'Group C', value: 300 }, { name: 'Group D', value: 200 },
// { name: 'Group E', value: 278 }, { name: 'Group F', value: 189 }]

// const SimplePieChart = (
// 	<PieChart width={800} height={400}>
// 		<Pie isAnimationActive={false} data={data01} cx={200} cy={200} outerRadius={80} fill="#8884d8" label />
// 		<Tooltip />
// 	</PieChart>
// )

