
$('#denglu').click(function(){
var uname=$('#uname').val();
var pwd=$('#pwd').val();
var cookieStr=$.cookie('user') ? $.cookie('user') : '';
var cookieObj=convertCookieStrToObj(cookieStr);
	if(cookieObj[uname]==pwd){
		alert('登陆成功')
		$('#uname').val('');
		$('#pwd').val('');
	}else{
		alert('登陆失败')
	}
})
//将cookie字符串转为对象
function convertCookieStrToObj(str){
		if(!str){
			return {};
		}
		return JSON.parse(str);
	}