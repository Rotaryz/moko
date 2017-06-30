function model_list(req,res,connection){
	//执行数据库语言
	connection.query(`select img from mo_list`,function(error,results,fields){
		if (error) {throw error};

		var obj = {
			list:results
		}
		res.send(JSON.stringify(obj));
	});
	connection.end();
}
exports.model_list = model_list;