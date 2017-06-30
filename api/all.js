var express = require('express');
var app = express();
var mysql = require('mysql');
// 数据库
var connection;
function createConnection(){
	connection = mysql.createConnection({
		host:'localhost',
		user:'root',
		password:'',
		database:'moko'
	});
	return connection;
}
// 模特
app.get('/model',function(req,res){
	res.append('Access-Control-Allow-Origin','*');
	// 查询数据库
	createConnection();
	connection.connect();
	require('./route/index.js').model(req,res,connection)
});
// 人才
app.get('/rencai',function(req,res){
	res.append('Access-Control-Allow-Origin','*');
	// 查询数据库
	createConnection();
	connection.connect();
	require('./route/index.js').rencai(req,res,connection)
})
// 列表
app.get('/list',function(req,res){
	res.append('Access-Control-Allow-Origin','*');
	var params = req.query;
	// 查询数据库
	createConnection();
	connection.connect();
	require('./route/list.js').model_list(req,res,connection,params);
})
var server = app.listen(55555,function(host,port){
 	var host = server.address().address;
 	var port = server.address().port;
 	console.log("应用实例，访问地址为 http://%s:%s", host, port)
})