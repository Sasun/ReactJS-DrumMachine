/**
 * @class Visual
 * @param args {Object}
 */

import React from 'react';

export class Visual extends React.Component {

	//Contructor --------------------------------------------------------------------------- +
	constructor(props){
		super(props);
		this.canvas = {};
		this.mousedown = false;
	}

	componentDidMount = () => {
    	this.buildCanvas();
    	document.body.addEventListener('mousedown',this.collect);
		document.body.addEventListener('mouseup',this.release);
		document.body.addEventListener('touchstart',this.collect);
		document.body.addEventListener('touchend',this.release);
   	}

   	collect = (e) => {
   		e.preventDefault();
   		this.mousedown = true;
   	}

   	release = (e) => {
   		this.mousedown = false;
   	}
	
	//Build Scribble ------------------------------------------------------------------------ +
    buildCanvas = () => {

    	this.canvas = new Scribble({
    		container: '.mainContainer',
    		background: Scribble.rgba('#24282f',1),
    		width: window.innerWidth,
    		height: window.innerHeight
    	});

    	let i = 100;

    	while(i--){

    		//var colors = ['#FFF275','#FF8C42','#FF3C38','#A23E48','#6C8EAD'];
    		var colors = ['#8AEA92','#80ADA0','#5F5566','#33202A','#000000'];

	   		let particle = Scribble.particle({
		    		id: 'particle',
		    		x: window.innerWidth /2,
		    		y: window.innerHeight /2,
		    		vx: Math.between(-5,5),
		    		vy: Math.between(-5,5),
		    		size: Math.between(1,3),
		    		friction:0.95,
		    		springPower:0.001,
		    		wander: true,
		    		wanderAmount:.05,
		    		color: Scribble.rgbaClose('#29a9db',Math.random())
		    	});

	   			particle.kill = this.kill;

		    	this.canvas.addItem = particle;

		    	let line = Scribble.line({
		    		id: 'line',
		    		x:particle.x,
		    		y:particle.y,
		    		endx: particle.x,
		    		endy: particle.y,
		    		color: '#0e67fa',
		    		width: .08,
		    		blendmode: 'lighter',
		    		screenWrap: false
		    	});

		    	//this.canvas.addItem = line;

    	}

    	//render ---
    	this.canvas.render = (items) => {

    		var x = 0;
    		for(let item of items){

    			//render particles ---
    			if(item.id==='particle'){

    				//spring
    				//item.springPosition({x:item.sx,y:item.sy},0);

    				//hit detection
    				if(item.hit({x:this.canvas.mouse.x, y:this.canvas.mouse.y},500)){
	    				
	    				if(this.mousedown){
	    				
	    					var min_dist = 500,
								dx = this.canvas.mouse.x - item.x,
								dy = this.canvas.mouse.y - item.y,
								dist = Math.sqrt(dx*dx+dy*dy);

							var tx = item.x + dx / dist * min_dist,
								ty = item.y + dy / dist * min_dist,
								ax = (tx-this.canvas.mouse.x) * 0.08 * 0.1,
								ay = (ty-this.canvas.mouse.y) * 0.08 * 0.1;

								item.vx += ax;
								item.vy += ay;

	    				}
	    			};
    			}

    			//render lines ---
    			if(item.id==='line' && x>0 && x< items.length-1){
    				item.x = items[x+1].x;
    				item.y = items[x+1].y;
    				item.endx = items[x-1].x;
    				item.endy = items[x-1].y;
    			}

    			x++;
    		}
    	}

    }
	
	//Render ------------------------------------------------------------------------------- +
	render(){
		return <div><section className="mainContainer" id="mainStage"></section></div>
	}

}