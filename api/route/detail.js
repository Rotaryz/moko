function detail(req,res,connection,params){
	var id = params.id;
	//执行数据库语言
	connection.query(`select * from mo_list where id=${id}`,function(error,results,fields){
		if (error) {throw error};

		var obj = {
			detail:results
		}
		res.send(JSON.stringify(obj));
	});
	connection.end();
};
exports.detail = detail;