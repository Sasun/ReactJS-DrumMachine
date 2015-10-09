/**
 * @class BeatPad
 * @param args {Object}
 */

import React from 'react';
import {Button} from '../elements/Button';
import {Indicator} from '../elements/Indicator';
import {Controls} from '../elements/Controls';

export class BeatPad extends React.Component {

	//Contructor --------------------------------------------------------------------------- +
	constructor(props){
		super(props);
		this.state = {
			current:0,
			activeSquares: []
		}

		this.bpm = 500;
		
		//start timmer
		this.timer = setInterval(this.updateIndicator,this.bpm);

		//load audio
		this.kick = new Howl({ urls: ['/audio/kick.wav']});
		this.hihat = new Howl({ urls: ['/audio/hihat.wav']});
		this.snare = new Howl({ urls: ['/audio/snare.wav']});
		this.perc = new Howl({ urls: ['/audio/perc.wav']});
	}

	updateBPM = (bpm) => {
		this.bpm = bpm;
		clearInterval(this.timer);
		this.timer = setInterval(this.updateIndicator,this.bpm);
	}

	updateIndicator = () => {
		
		var val = this.state.current<3 ? this.state.current+1 : 0;

		this.setState({
			current: val
		});

		//flash active square ---
		for(let square of this.state.activeSquares){
			
			//reset flash ---
			square.setState({
				flash:false
			});

			//add flash ---
			if(val===square.props.col){
				
				if(square.props.row === 1) this.kick.play();
				if(square.props.row === 2) this.hihat.play();
				if(square.props.row === 3) this.snare.play();
				if(square.props.row === 4) this.perc.play();

				square.setState({
					flash:true
				});
			}

		}

	}

	componentDidMount = () => {

   	}

   	//activate square ------------------------------------------------------------------------ +
   	activate = (e) => {
   		this.state.activeSquares.push(e);
   	}

   	//deactivate square --------------------------------------------------------------------- +
   	deActivate = (id) => {
   		for(let i in this.state.activeSquares){
   			if(this.state.activeSquares[i].props.id===id) this.state.activeSquares.splice(i,1);
   		}
   	}
	
	//Render ------------------------------------------------------------------------------- +
	render(){

		let i = 16,
			output = [],
			end = false;

		//generate the touch pads ---------------------------------------------------------- +
		var x 	= 3,
			row = 0;

		while(i--){

			if(i<4) row=4;
			if(i>3 && i<8) row=3;
			if(i>7 && i<12) row=2;
			if(i>11 && i<16) row=1;

			if(i==12 || i==8 || i==4 || i==0) end=true;
			output.push(<Button end={end} selected={this.activate} unselect={this.deActivate} id={i} col={x} row={row} />);
			end=false;
			x--;
			if(x<0) x=3;
		}

		let button = output.map(function(e){
			return e;
		});

		//generate the indicators ---------------------------------------------------------- +
		i = 4,
		output=[];

		while(i--){
			output.push(<Indicator ref={'indicator'+i} active={this.state.current} id={i} />);
		}

		let indicator = output.map(function(e){
			return e;
		});

		return <div>
			<Controls callback={this.updateBPM} />
			<ul className="indicator">
				{indicator}
			</ul>

			<div className="clear"></div>

			<ul className="beatpad">
				{button}
			</ul>
		</div>
	}

}