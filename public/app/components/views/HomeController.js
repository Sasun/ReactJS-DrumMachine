/**
 * @class HomeController
 * @param args {Object}
 */

import React from 'react';
import {Home} from './Home';

import HomeStore from '../../store/HomeStore';
import HomeActions from '../../actions/HomeActions';

export class HomeController extends React.Component {

	//Contructor --------------------------------------------------------------------------- +
	constructor(props){
		super(props);
		this.state = HomeStore.getState();
		console.log(this);
	}

	componentDidMount = () => {
    	HomeStore.listen(this.onChange);
    	HomeActions.getUsers();
   	}
	
	componentWillUnmount = () => {
		HomeStore.unlisten(this.onChange);
	}
	
	onChange = (state) => {
		console.log('State changed!');
    	this.setState(state);
    }
	
	//Render ------------------------------------------------------------------------------- +
	render(){
		return <Home users={this.state.users} />
	}

}