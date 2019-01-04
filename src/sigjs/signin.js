
(function(){
	var use=false;
	$('#uname').blur(function(){
 		var uname=$('#uname').val();
 		var cookieStr = $.cookie('user') ? $.cookie('user') : '';
 		var cookieObj = convertCookieStrToObj(cookieStr);
 		var re = /^[\u4e00-\u9fa5\w]{3,12}$/;
 		if(!re.test(uname)){
			$('#tishi').html('用户名不符合规则')
			use=false;
			return;
		}else{
	 		if(uname in cookieObj){
				$('#tishi').html('用户名存在');
				use=false;
				return;
			}else{
				$('#tishi').html('合格');
				use=true;
			}
		}
 	})
 	$('#zhuce').click(function(){
 	var uname=$('#uname').val();
 	var passw=$('#pass').val();
 	var cookieStr = $.cookie('user') ? $.cookie('user') : '';
 		var cookieObj = convertCookieStrToObj(cookieStr);
 		if(use){
 		cookieObj[uname] = passw;	
		cookieStr = JSON.stringify(cookieObj);
		$.cookie('user',cookieStr,{expires:7});
		alert('注册成功！');
		$('#uname').val('')
		$('#pass').val('');
		$('#tishi').html('中文、字母、数字、下划线,3到12位');
		}else{
		alert('注册失败');}
 })
 })()
 
 
 
//将cookie字符串转为对象
function convertCookieStrToObj(str){
		if(!str){
			return {};
		}
		return JSON.parse(str);
	}