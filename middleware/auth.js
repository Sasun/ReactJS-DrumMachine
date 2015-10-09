'use strict';

function auth(req,res,next){
    console.log('middlewear called');
    next();
};

module.exports = auth;

