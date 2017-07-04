function mine(req, res, connection, tatol) {
	//查询数据库获取个人信息
	connection.query(`select * from memberslist where username = "${tatol.username}"`, function(error, results, fields) {
		if(error) {
			throw error
		};

		var obj = {
			mine: results
		}
		res.send(JSON.stringify(obj));
	});
	connection.end();
};

exports.mine = mine;