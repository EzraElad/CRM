import React, {Component} from 'react';
import EmailsSent from './EmailsSent';
import NewClients from './NewClients';
import OutstandingClients from './OutstandingClients';
import HottestCountry from './HottestCountry';

class BudgetsList extends Component {

	render() {
	     return(
		  <div className='budgetList'>
			  <NewClients data={this.props.data} />
			  <EmailsSent data={this.props.data}/>
			  <OutstandingClients data={this.props.data} />
			  <HottestCountry data={this.props.data} />
		  </div>
	      );
	}
}

export default BudgetsList;