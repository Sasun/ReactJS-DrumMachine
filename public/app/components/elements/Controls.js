/**
 * @class Controls
 * @param args {Object}
 */

import React from 'react';

export class Controls extends React.Component {

	//Contructor --------------------------------------------------------------------------- +
	constructor(props){
		super(props);
		this.state = {
			active30:true,
			active60:false,
			active120:false,
			active240:false
		}
	}

	updateBPM = (e) => {

		//reset states
		this.setState({
			active30:false,
			active60:false,
			active120:false,
			active240:false
		});

		if(e.target.id==500) this.setState({active30: true});
		if(e.target.id==250) this.setState({active60: true});
		if(e.target.id==125) this.setState({active120: true});
		if(e.target.id==62) this.setState({active240: true});

		this.props.callback(e.target.id)
	}

	
	//Render ------------------------------------------------------------------------------- +
	render(){
		return <div><ul className="controls">
			<li className={this.state.active30 ? "active" : ""} onClick={this.updateBPM} id="500">30 BPM</li>
			<li className={this.state.active60 ? "active" : ""} onClick={this.updateBPM} id="250">60 BPM</li>
			<li className={this.state.active120 ? "active" : ""} onClick={this.updateBPM} id="125">120 BPM</li>
			<li className={this.state.active240 ? "active" : ""} onClick={this.updateBPM} id="62">240 BPM</li>
		</ul></div>
	}

}