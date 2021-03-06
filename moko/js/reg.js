switch(location.search) {
	case '?reg':
		let htmlreg = `
			<header>
			<h1>
				<img src="../img/moko-logo.png"/>
			</h1>
			</header>
			<form>
				<div>
					<input type="text" placeholder="请输入用户名" name="username" id="username" class="name">
				</div>
				<div>
					<input type="number" placeholder="请输入手机号" name="phone" id="phone" class="pho">
				</div>
				<div>
					<input type="password" placeholder="请输入密码" name="password" id="password"  class="pwd">
				</div>
				<div>
					<input type="password" placeholder="请再次输入密码" name="password2" id="password2" class="pwd">
				</div>
				<div>
					<input type="button" value="注册" id="reg">
				</div>
				<div>
					<input type="button" value="登录" id="_login">
				</div>
			</form>
		`;
		$('body').html(htmlreg);
		$('body').css('left','-210px');
		$('body').animate({left:'0'},500);
		break;
	case '':
		let htmllogin = `
			<header>
			<h1>
				<img src="../img/moko-logo.png"/>
			</h1>
			</header>
			<form>
				<div>
					<input type="text" placeholder="请输入用户名或手机号" name="username" id="username" class="name">
				</div>
				<div>
					<input type="password" placeholder="请输入密码" name="password" id="password" class="pwd">
				</div>
				<div>
					<div>
					<input type="button" value="登录" id="login">
				</div>
				<div>
					<input type="button" value="注册" id="register">
				</div>
				</div>
			</form>
		`;
		$('body').html(htmllogin);
		$('body').css('right','-210px');
		$('body').animate({right:'0'},500);
		break;
}

$('#register').on('click', () => {
	location.href = '../html/reg.html?reg';
});

$('#_login').on('click', () => {
	location.href = '../html/reg.html';
});

$('#reg').on('click', () => {
	let username = $('#username');
	let phone = $('#phone');
	let password = $('#password');
	let password2 = $('#password2');

	if(!/^\w{6,20}$/.test(username.val())) {
		alert('用户名不合法');
		username.val('');
		return false;
	}
	if(!/^1[3-57-9]\d{9}$/.test(phone.val())) {
		alert('手机号不合法');
		phone.val('');
		return false;
	}
	if(!/^\S{1,19}$/.test(password.val())) {
		alert('密码不合法');
		password.val('');
		return false;
	}
	if(password2.val() !== password.val()) {
		alert('两次输入密码不一致');
		return false;
	}

	$.ajax({
		type: "get",
		url: "http://localhost:55555/reg",
		async: true,
		dataType: "json",
		data: {
			username: username.val(),
			phone: phone.val(),
			password: password.val(),
		},
		success: data => {
			if(data == '0') {
				location.href = '../html/server.html?username='+username.val();
			}
			if(data == '1') {
				alert('用户名已被注册')
			}
		}
	});
});
// 登录
$('#login').on('click', () => {
	let username = $('#username');
	let password = $('#password');
	$.ajax({
		type: "get",
		url: "http://localhost:55555/login",
		async: true,
		dataType: "json",
		data: {
			username: username.val(),
			password: password.val(),
		},
		success:data=>{
				console.log(data);
			if(data == '0') {
				alert('用户名或密码错误');
			}
			if(data == '1') {
				location.href = '../html/users.html?username='+username.val();
			}
		}
	});
});