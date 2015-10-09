/**
 * @class Button
 * @param args {Object}
 */

import React from 'react';
import classNames from 'classnames';

console.log(classNames);

export class Button extends React.Component {

	//Contructor --------------------------------------------------------------------------- +
	constructor(props){
		super(props);
		this.state = {
			selected: false,
			flash: false
		}
	}

	activate = (e) => {
		
		this.setState({
			selected: !this.state.selected
		});

		if(!this.state.selected){
			this.props.selected(this);
		}else{
			this.props.unselect(this.props.id);
		}
	}
	
	//Render ------------------------------------------------------------------------------- +
	render(){
		var classes = classNames({
			active: this.state.selected,
			flash: this.state.flash,
			end: this.props.end
		});

		return <li className={classes} onClick={this.activate} ></li>
	}

}