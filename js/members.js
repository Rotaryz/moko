var express = require('express');
var bodyParser = require('body-parser')
var app = express();
var mysql = require("mysql");
var connection;

function createConnection(){
	connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: '',
		database: 'moko111'
	});
}
app.get('/reg', function(req,res){
	res.append("Access-Control-Allow-Origin", "*");
	createConnection();
	connection.query('SELECT * FROM memberslist where username="'+req.query.username+'"', function(error, results, fields) {
		if(results.length == 1){
			res.send('1');
		}else if(results.length == 0){
			res.send('0');
			connection.query('INSERT INTO memberslist(username,phone,password) values("'+req.query.username+'","'+req.query.phone+'","'+req.query.password+'")',(error, results, fields)=>{});
		}
		connection.end();
	});
});

app.get('/login', function(req,res){
	res.append("Access-Control-Allow-Origin", "*");
	createConnection();
	connection.query('SELECT * FROM memberslist where username="'+req.query.username+'" and password="'+req.query.password+'"', function(error, results, fields) {
	if(results.length == 1){
		res.send('1');
	}else if(results.length == 0){
		res.send('0');
	}
	connection.end();
	});
});

var server = app.listen(55555);
