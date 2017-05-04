var express = require('express');
var app = express();
var sequelize = require('sequelize');
var mysql = require('mysql');
var bodyParser = require('body-parser');
var connection = require('express-myconnection');
app.use(bodyParser.json());
app.use(bodyParser.json({
	type : 'application/vnd.api+json'
}));
app.use(bodyParser.urlencoded({
	extended : true
}));
var controller = require('./server/book_status.js');


var http = require('http');

app.post('/book_name',controller.book_name);
app.get('/book_list',controller.book_list);
app.put('/book_update',controller.book_update);
app.delete('/book_delete',controller.book_delete);


app.listen(3000, function(req, res) {
	console.log("Now U Can Access me on http://localhost:3000/ url");
});