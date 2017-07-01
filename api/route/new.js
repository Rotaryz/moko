function news(req,res,tatol,connection){


	//处理头像
	//执行数据库语言
	connection.query(`insert into mo_list(name,voc,wigh,place,chest,hip,wai,size,style,title,time,high,img) values("${tatol.name}","${tatol.voc}","${tatol.wigh}","${tatol.place}","${tatol.chest}","${tatol.hip}","${tatol.wai}","${tatol.size}","${tatol.style}","${tatol.title}","${tatol.time}","${tatol.high}","${tatol.img}")`,function(error,results,fields){
		if (error) {throw error};
		res.send('ok');

	});

	connection.end();
}


exports.news = news;