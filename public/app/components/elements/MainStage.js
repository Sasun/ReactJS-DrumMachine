/**
 * @class MainStage
 * @param args {Object}
 */

import React from 'react';
export class MainStage extends React.Component {

	//Contructor --------------------------------------------------------------------------- +
	constructor(props){
		super(props);
	}
	
	//Render ------------------------------------------------------------------------------- +
	render(){
		return <div>{this.props.view}</div>
	}

}