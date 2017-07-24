function model_list(req,res,connection,params){
	var sx = params.sx
  	var qty = params.qty;
	var page = qty*(params.page - 1);

	//执行数据库语言
	connection.query(`select * from mo_list limit ${page} , ${qty}`,function(error,results,fields){
		if (error) {throw error};

		var obj = {
			list:results,
			qty:qty,
			pageNum:page
		}
		res.send(JSON.stringify(obj));
	});
	connection.end();
}
exports.model_list = model_list;