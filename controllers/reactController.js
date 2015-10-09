
module.exports = function(app){

	'use strict';
	
	//Dependencies  -------------------------------------------------------------------- +
	require("babel/register");

	var React 	= require('react'),
		models 	= require('../models/'),
		html;

	//Controller  ---------------------------------------------------------------------- +
	return function reactController(req,res,next){

		var request 	= req.params[0].split('/')[1],
			controller 	= request != '' ? request.toLowerCase() : 'Home',
			viewName 	= controller[0].toUpperCase() + controller.slice(1),
			view;

		view = require('../public/app/components/views/AppController');
		html = React.createFactory(view.AppController);
		app.get('responseObj').react = React.renderToString(html({}));
		res.render('index', app.get('responseObj'));

		// //try to load requested React component ---
		// var loadModule = new Promise(function(resolve, reject){
		// 	try {
		// 		//view = require('../public/app/components/views/'+viewName+'Controller');
		// 		view = require('../public/app/components/views/AppController');
		// 		resolve(view);
		// 	}catch(err){
		// 		reject(err);
		// 	}
		// });

		// //on error ---
		// loadModule.catch(function(err){
		// 	console.log(err);
		// 	view = require('../public/app/components/views/NotFound');
		// 	viewName = 'NotFound';
		// 	render(view);
		// });

		// //then ---
		// loadModule.then(function(){
		// 	render(view);	
		// })

		// //render ---
		// function render(view){
		// 	console.log(view);
		// 	//html = React.createFactory(view[viewName.toString()+'Controller']);
		// 	html = React.createFactory(view.AppController);
		// 	app.get('responseObj').react = React.renderToString(html());
		// 	res.render('index', app.get('responseObj'));
		// }

	};

}
