/**
 * @class NotFound
 * @param args {Object}
 */

import React from 'react';
export class NotFound extends React.Component {

	//Contructor --------------------------------------------------------------------------- +
	constructor(props){
		super(props);
		this.state = {
			
		};
	}
	
	//Render ------------------------------------------------------------------------------- +
	render(){
		return <h1>Page not found!</h1>
	}

}