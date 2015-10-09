
module.exports = function(app){

	'use strict';
	
	//Dependencies  -------------------------------------------------------------------- +
	var models 	= require('../../models/');

	//Controller  ---------------------------------------------------------------------- +
	return function usersController(req,res,next){

		var data = [{
			name: 'Luke Freeman',
			username: 'lukefreeman',
			email: 'luke@lukefreeman.net'
		},
		{
			name: 'Luke Freeman',
			username: 'lukefreeman',
			email: 'luke@lukefreeman.net'
		}];

		res.status(200).send({users:data});

	};

}
