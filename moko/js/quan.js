$(function(){
	//请求数据库
	$.ajax({
		type:'get',
		url:'http://localhost:55555/quanse',
		dataType:'json',
		success:function(data){
			
			var html = data.quan.map(function(item){
				return item.html
			}).join('');
			$('#content').html(html);
		}
	})
	$('.weui-tabbar').on('click','.mine',function(){
		location.href = '../html/users.html'
	}).on('click','.index',function(){
		location.href = '../index.html'
	})
})
