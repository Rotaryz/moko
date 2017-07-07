let app = angular.module('ngApp', []);
app.controller("headerCtrl", function($scope, $rootScope, zx, $filter, $http) {
	$scope.img = '../img/community-return.png';
	//接收图片
	$rootScope.imghead = '';
	$scope.msg = '';
	$rootScope.myname = '';
	$rootScope.$on('msg', function(event, data) {
		$scope.msg = data;
	});
	zx.ajax('mine', {
		username: zx.username
	}, 'get', function(data) {
		//			console.log(data.mine[0].name)
		$rootScope.myname = data.mine[0].name;
		$rootScope.imghead = data.mine[0].img;
	});
	$scope.tatol = function() {
		//得到处理后的html
		$scope.html = $filter('zxhtml')($scope.msg)

		//写入数据库
		zx.ajax('quan', {
			html: $scope.html
		}, 'post', function(data) {});
	}

	//接收文本数据
});
app.controller("textareaCtrl", function($scope) {
	$scope.length = 0;
	$scope.content = '';
	//传递字符串长度

	$scope.show = () => {
		$scope.length = $scope.content.length;
	}
	$scope.tatol = () => {
		$scope.$emit('msg', $scope.content)
	}

	//获取内容，生成html结构

});
//app.controller("imgCtrl", function($scope) {
//	$scope.imghead = '';
//	function getimg() {
//		$.ajax({
//			url: 'http://localhost:55555/head',
//			type: 'POST',
//			cache: false, //不必须
//			data: new FormData($('#uploadForm')[0]),
//			processData: false,
//			contentType: false,
//			success: function(data) {
//				$scope.imghead = '/moko/moko/upload/' + data.imgurl;
//				//传递数据
//				$scope.$emit('imghead', $scope.imghead)
//			}
//		})
//	}
//})

app.service('zx', function($http) {
	this.username = decodeURI(location.search.slice(10));
	//post请求传递数据
	this.ajax = function(route, obj, type, cb) {
		$.ajax({
			type: type,
			url: 'http://localhost:55555/' + route,
			dataType: 'json',
			data: obj,
			success: function(data) {
				//				console.log(data);
				cb(data)
			}
		})
	}
});
app.filter('zxhtml', function(zx, $filter, $rootScope) {
	return function(str) {
		var time = new Date()
		time = $filter('date')(Date.parse(time), 'yyyy/MM/dd hh:mm:ss');
		return `<div class="weui-media-box weui-media-box_text"><img src="${$rootScope.imghead}" class="q_head" /><h4 class="weui-media-box__title">${$rootScope.myname}</h4><p class="weui-media-box__desc">${str}</p><ul class="weui-media-box__info"><li class="weui-media-box__info__meta">${time}</li><li class="weui-media-box__info__meta">赞(0)</li><li class="weui-media-box__info__meta weui-media-box__info__meta_extra">评论</li></ul>
			</div>`
	}
})