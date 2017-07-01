var express = require('express');
var app = express();
var mysql = require('mysql');
var multer = require('multer');
var body = require('body-parser');
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
var fileFormat;
var storage = multer.diskStorage({
	//设置上传后文件路径，uploads文件夹会自动创建。
	destination: function(req, file, cb) {
		cb(null, '/moko/moko/upload')
	},
	//给上传文件重命名，获取添加后缀名
	filename: function(req, file, cb) {
		fileFormat = (file.originalname)
		cb(null,fileFormat);
	}
});
var upload = multer({
	storage: storage
});
app.use(body.urlencoded({
	extended: false
}))
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
});
// 详情
app.get('/detail',function(req,res){
	res.append('Access-Control-Allow-Origin','*');
	// 查询数据库
	var params = req.query
	createConnection();
	connection.connect();
	require('./route/detail.js').detail(req,res,connection,params)
});
// 新用户信息
app.post('/new',function(req,res){
	res.append('Access-Control-Allow-Origin','*');
	createConnection();
	connection.connect();
	var tatol = req.body;
	require('./route/new.js').news(req,res,tatol,connection);
});
//头像
app.post('/head', upload.any(), function(req, res, next) {	
	res.append('Access-Control-Allow-Origin','*');
	res.send({
		fileFormat
	});
});


var server = app.listen(55555,function(host,port){
 	var host = server.address().address;
 	var port = server.address().port;
 	console.log("应用实例，访问地址为 http://%s:%s", host, port)
})