/**
 * @class Indicator
 * @param args {Object}
 */

import React from 'react';


export class Indicator extends React.Component {

	//Contructor --------------------------------------------------------------------------- +
	constructor(props){
		super(props);
	}
	
	//Render ------------------------------------------------------------------------------- +
	render(){
		return <li className={ this.props.active === this.props.id ? "active" : ""} ></li>
	}

}