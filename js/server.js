$(function(){
	var btnsend = $('.sub');
	var img;
	// 添加数据库
	$('#form').on('change',function(){
		doUpload();
	});
	btnsend.on('click',function(){
			//增加新数据
		var name = $('.name').val();
		var voc = $('.voc').val();
		var place = $('.place').val();
		var wigh = $('.wigh').val();
		var high = $('.high').val();
		var chest = $('.chest').val();
		var hip = $('.hip').val();
		var wai = $('.wai').val();
		var size = $('.size').val();
		var style = $('.style').val();
		var title = $('.title').val();
		var time = $('.time').val();
		
		$.ajax({
			type: 'POST',
			url:'http://localhost:55555/new',
			data:{
				name:name,
				voc:voc,
				high:high,
				wigh:wigh,
				place:place,
				chest:chest,
				hip:hip,
				wai:wai,
				size:size,
				style:style,
				title:title,
				time:time,
				img:img
			},
			success:function(str){
				if(str === 'ok'){
					alert('成功插入信息')
				// location.href='';
					
				}
			}
		})
	});

	// 把图片路径存入数据库并下载到当前的文件夹中
	function doUpload() {
		$.ajax({
			url: 'http://localhost:55555/head',
			type: 'POST',
			cache: false, //不必须
			data: new FormData($('#form')[0]),
			processData: false,
			contentType: false,
			success: function(data) {
				console.log(data);
				img = '/moko/moko/upload/'+data.fileFormat;
				$('.head01').attr('src','../upload/'+data.fileFormat);
			}
		})
	}

})