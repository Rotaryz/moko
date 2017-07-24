function quan(req, res, tatol, connection) {
	//查询数据库获取个人信息
	connection.query(`INSERT INTO cms (html) VALUES ('${tatol.html}')`, function(error, results, fields) {
		if(error) {
			throw error
		};
		res.send("ok");
	});
	connection.end();
};
function quanse(req, res,connection) {
	//查询数据库获取个人信息
	connection.query(`select * from cms`, function(error, results, fields) {
		if(error) {
			throw error
		};
		var obj = {
			quan:results
		}
		// console.log(obj)
		res.send(JSON.stringify(obj));
	});
	connection.end();
};

exports.quanse= quanse;

exports.quan= quan;

