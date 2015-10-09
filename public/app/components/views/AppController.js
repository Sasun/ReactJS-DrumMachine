/**
 * @class AppController
 * @param args {Object}
 */

import React from 'react';
import {Router} from 'react-router';
import {MainStage} from '../elements/MainStage';

export class AppController extends React.Component {

	//Contructor --------------------------------------------------------------------------- +
	constructor(props){
		super(props);

		if ('addEventListener' in document) {
		    document.addEventListener('DOMContentLoaded', function() {
		        FastClick.attach(document.body);
		    }, false);
		}
		
	}
	
	//Render ------------------------------------------------------------------------------- +
	render(){
		return <div>
			<MainStage view={this.props.children} />
    	</div>
	}

}