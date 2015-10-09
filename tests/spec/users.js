var should = require('should'),
	assert = require('assert'),
	request = require('supertest'),
	mongoose = require('mongoose'); 

var route = require('../../routes/index');

describe('Users Routing', function() {
  
	before(function() {
		this.timeout(80000); //wait for nodemon
	}); 

	var url = 'http://localhost:8080';

	//test the root endpoint ------------------------------------------------------- +
	describe('Users endpoint', function() {

		it('Should return a users object', function(done){
			request(url).get('/api/users').end(function(err,res){
				should.exist(res.body);
				done();
			});
		});

    });

});