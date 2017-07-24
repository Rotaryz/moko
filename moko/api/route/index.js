function model(req,res,connection){
	//执行数据库语言
	connection.query(`select * from home`,function(error,results,fields){
		if (error) {throw error};

		var obj = {
			model:results
		}
		res.send(JSON.stringify(obj));
	});
	connection.end();
};
function rencai(req,res,connection){
	//执行数据库语言
	connection.query(`select * from rencai`,function(error,results,fields){
		if (error) {throw error};

		var obj = {
			rencai:results
		}
		// console.log(obj)
		res.send(JSON.stringify(obj));
	});
	connection.end();
};

exports.model = model;
exports.rencai = rencai;