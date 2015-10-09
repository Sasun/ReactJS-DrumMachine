/**
 * @class Home
 * @param args {Object}
 */

import React from 'react';
import HomeActions from '../../actions/HomeActions';
import {Visual} from '../elements/Visual';
import {BeatPad} from './BeatPad';


export class Home extends React.Component {

	//Contructor --------------------------------------------------------------------------- +
	constructor(props){
		super(props);
		this.state = {
			
		};
	}

	_remove = () => {
		HomeActions.killUsers();
	}

	onChange = (state) => {
    	this.setState(state);
    }
	
	//Render ------------------------------------------------------------------------------- +
	render(){
		return <div>
			
			<div className="wrapper">
				<BeatPad />
			</div>
		</div>
	}

}