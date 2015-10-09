
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



	};

}
