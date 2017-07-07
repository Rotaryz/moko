$(function() {
	
	// 跳转
	$('.weui-tabbar').on('click','.index',function(){
		location.href='../index.html'
	}).on('click','.quan',function(){
		location.href='../html/quan.html'
	})
	
	// 获取username
	var username = location.search.slice(10);
	// 判断用户是否登录
	if(username != ''){
		$('.btngo').hide();
		// 把图片路径存入数据库并下载到当前的文件夹中
		function gethead() {
			$.ajax({
				url: 'http://localhost:55555/head',
				type: 'POST',
				cache: false, //不必须
				data: new FormData($('#headimg')[0]),
				processData: false,
				contentType: false,

				success: function(data) {
					img = '../upload/' + data.imgurl;
					$('.user-pic img').attr('src', img);
					newimg(img);
				}
			})
		}
		function newimg(img){
			$.ajax({
				type: 'POST',
				url:'http://localhost:55555/newsimg',
				data:{
					img:img,
					username:username
				},
				success:function(str){
					console.log(str);
					// if(str === 'ok'){
		
					// location.href='./users.html?username='+username;
						
					// }else{
					// 	alert('输入的数据有误，请修改后在提交')
					// }
				}
			})
		}
		//利用障眼法绑定事件更改头像,点击图片触发file
		$('.user-pic').on('click', function() {
			getimg()
		})
		function getimg(){
			$("#headimg input").trigger("click");
			$('#headimg').on('change',function(){
				gethead();
			})
		}
		getmine()
		//请求查询数据库获取当前页面的信息
		function getmine() {
			$.ajax({
				url: 'http://localhost:55555/mine',
				type: 'get',
				data:{
					username:username
				},
				dataType:'json',
				success: function(data) {
					var mine= data.mine[0];
					var msg,comment,mineMsg,systemMsg,collect;
					// 用户名
					$('.user-name').html(mine.name);
					// 头像
					$('.user-pic img').attr('src',mine.img)
					// 短信
					if(mine.msg.indexOf(',') === -1){
						msg = [];
						 msg.push(mine.msg);
					}else{
						msg = mine.msg.split(',');
					}
					$('.msg').find('i').html(msg.length);
					// 我的评论
					if(mine.minemsg.indexOf(',') === -1){
						mineMsg = [];
						 mineMsg.push(mine.minemsg);
					}else{
						mineMsg = mine.minemsg.split(',');
					}
					$('.mine').find('i').html(mineMsg.length);
					// @我
					if(mine.comment.indexOf(',') === -1){
						comment = [];
						 comment.push(mine.comment);
					}else{
						comment = mine.comment.split(',');
					}
					$('.comment').find('i').html(comment.length);
					// 系统信息
					if(mine.systemmsg.indexOf(',') === -1){
						systemMsg = [];
						 systemMsg.push(mine.systemMsg);
					}else{
						systemMsg = mine.systemMsg.split(',');
					}
					$('.system').find('i').html(systemMsg.length);
					// 收藏
					if(mine.collect.indexOf(',') === -1){
						collect = [];
						 collect.push(mine.collect);
					}else{
						collect = mine.collect.split(',');
					}
					$('.collect').find('i').html(collect.length);
					// 礼物
					$('.gift').find('i').html(mine.gift);
					$('.quan').on('click',function(){
						location.href = '../html/community.html?username='+mine.username;
					})
				}

			})
		}
	}

		

})