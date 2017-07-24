function newsimg(req,res,tatol,connection){


	//处理头像
	//执行数据库语言
	connection.query(`update memberslist set img="${tatol.img}" where username="${tatol.username}"`,function(error,results,fields){
		if (error) {throw error};
		res.send('ok');

	});

	connection.end();
}


exports.newsimg = newsimg;