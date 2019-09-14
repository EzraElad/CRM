import React, { Component } from 'react';
import Client from './Client';
import ClientHeader from './ClientHeader';
import Popup from './Popup';
import Scroll from './Scroll';
import Search from './Search';

class ClientsList extends Component {
	constructor() {
		super()
		this.state = {
			page: 0
		}
	}
	pageUp = () => {
		this.setState({ page: this.state.page + 1 })
	}
	pageDown = () => {
		if (!this.state.page) { return }
		this.setState({ page: this.state.page - 1 })
	}

	render() {
		let client = this.props.data.slice((this.state.page * 15), (this.state.page * 15 + 15)).map(d => <Client updateClient={this.props.updateClient} data={d} openForm={this.props.openForm} />)
		return (
			<div>
				<Search selectChange={this.props.selectChange} searchChange={this.props.searchChange}/>
				<br />
				<ClientHeader />
				<div >
					{/* {this.props.open === true ? <Popup  openForm={this.props.openForm} /> : null} */}
				</div>
				<div>
					{client}
				</div>
				<div className="arrows tc">
					{/* <i id="leftArrow arrow" className="material-icons" onClick={this.pageDown}>arrow_left</i> */}
					<i className="fas arrows fa-angle-left" onClick={this.pageDown}></i>
					<i className="fas arrows fa-angle-right" onClick={this.pageUp}></i>
					{/* <i id="rightArrow arrow" className="material-icons" onClick={this.pageUp}>arrow_right</i> */}
				</div>
				{/* </div> */}
				{/* <Scroll> */}
				{/* <div className="client tc">
						{client}
					</div> */}
				{/* </Scroll> */}
			</div >
		);
	}
}

export default ClientsList;
