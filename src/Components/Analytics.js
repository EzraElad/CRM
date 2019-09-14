import React, {Component} from 'react';
import NewClients from './Analytics/Budges/NewClients';
import BudgetsList from './Analytics/Budges/BudgetsList';
import ChartsLists from './Analytics/Charts/ChartsList';

class Analytics extends Component {

	render() {
	     return(
        <div className="ma3">
			<BudgetsList data={this.props.data} />
			<ChartsLists data={this.props.data} />
        </div>
	      );
	}
}

export default Analytics;
