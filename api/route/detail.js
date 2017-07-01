function detail(req,res,connection,tatol){
	var page = 14*(tatol.page-1)
	//执行数据库语言
	connection.query(`select * from mo_list limit ${page},14`,function(error,results,fields){
		if (error) {throw error};

		var obj = {
			detail:results
		}
		res.send(JSON.stringify(obj));
	});
	connection.end();
};
exports.detail = detail;