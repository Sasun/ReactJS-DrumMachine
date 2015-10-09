'use strict';

function routes(app){

    //Dependancies ----------------------------------------------------------------------- +
    var express = require('express'),
        router = express.Router();

    //Controllers ------------------------------------------------------------------------ +
    var reactController  = require('../controllers/reactController')(app),
    	usersController  = require('../controllers/api/usersController')(app);

    //API -------------------------------------------------------------------------------- +
	router.get('/api/users',usersController);

    //APP -------------------------------------------------------------------------------- +
    router.get('*',reactController);

    return router;
}

module.exports = routes;