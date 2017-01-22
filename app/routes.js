var bodyParser = require("body-parser"); // Require Body parser module
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var express = require('express');
var path = require('path');
var app   = require('express')(); // Require Express module
var http = require('http').Server(app); // Http server
var bodyParser = require("body-parser"); // Require Body parser module

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
 
app.all('*', function(req, res,next) {


    /**
     * Response settings
     * @type {Object}
     */
    var responseSettings = {
        "AccessControlAllowOrigin": req.headers.origin,
        "AccessControlAllowHeaders": "Content-Type,X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5,  Date, X-Api-Version, X-File-Name",
        "AccessControlAllowMethods": "POST, GET, PUT, DELETE, OPTIONS",
        "AccessControlAllowCredentials": true
    };

    /**
     * Headers
     */
	res.header('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Credentials	", responseSettings.AccessControlAllowCredentials);
    res.header("Access-Control-Allow-Origin",  responseSettings.AccessControlAllowOrigin);
    res.header("Access-Control-Allow-Headers", (req.headers['access-control-request-headers']) ? req.headers['access-control-request-headers'] : "x-requested-with");
    res.header("Access-Control-Allow-Methods", (req.headers['access-control-request-method']) ? req.headers['access-control-request-method'] : responseSettings.AccessControlAllowMethods);

    if ('OPTIONS' == req.method) {
        res.send(200);	
    }
    else {
        next();
    }
});

var dataController = "test";
var dataController2 = "test";
var nrOfSwipes = "test";
var userRank = "test";

module.exports = function(app) {

	app.post('/getQueryJson', function(request, response) {
		if(response.statusCode == 200) { 

		  console.log("In routes.js TESTING......")
		  console.log("This is your request: ", request.body);

		  dataController = request.body;
		  console.log("dataController1: ", dataController);
		  response.send(request.body);
		}else{
		  response.send(" Error code: " + response.statusCode);
		}
	});

	app.post('/sendToController', function(request, response) {
		console.log("dataController2: ", dataController);
		response.send(dataController);
	});
	
	app.post('/getQueryJson2', function(request, response) {
		if(response.statusCode == 200) { 

		  console.log("In routes.js TESTING......")
		  console.log("This is your request: ", request.body);

		  dataController2 = request.body;
		  console.log(">dataController1: ", dataController2);
		  response.send(request.body);
		}else{
		  response.send(" Error code: " + response.statusCode);
		}
	});

	app.post('/sendToController2', function(request, response) {
		console.log(">dataController2: ", dataController2);
		response.send(dataController2);
	});
	
	app.post('/getNrOfSwipes', function(request, response) {
		if(response.statusCode == 200) { 

		  console.log("In routes.js TESTING......")
		  console.log("This is your request: ", request.body);

		  nrOfSwipes = request.body;
		  console.log("nrOfSwipes: ", nrOfSwipes);
		  response.send(request.body);
		}else{
		  response.send(" Error code: " + response.statusCode);
		}
	});

	app.post('/sendNrOfSwipes', function(request, response) {
		console.log("nrOfSwipes: ", nrOfSwipes);
		response.send(nrOfSwipes);
	});
	
	app.post('/getUserRank', function(request, response) {
		if(response.statusCode == 200) { 

		  console.log("In routes.js TESTING......")
		  console.log("This is your request: ", request.body);

		  userRank = request.body;
		  console.log("userRank: ", userRank);
		  response.send(request.body);
		}else{
		  response.send(" Error code: " + response.statusCode);
		}
	});

	app.post('/sendUserRank', function(request, response) {
		console.log("userRank: ", userRank);
		response.send(userRank);
	});
};
