
$('.mosttop p a').each(function(){
$(this).hover(function(){
	$(this).css({'color':'red','text-decoration': 'underline'})},
function(){
	$(this).css({'color':'#666666','text-decoration': 'none'})} 
)
})

$('.myhome').mouseenter(function(){
	$('#myhome ul').css({'display':'block'}).mouseleave(function(){
		$('#myhome ul').css({'display':'none'});
	})
	
	$('#myhome ul li a').hover(function(){
		$(this).css({'color':'red','text-decoration': 'underline'})
	},function(){$(this).css({'color':'#666666','text-decoration': 'none'})});
})

$('#kehud').hover(function(){
	$('#shop').css({'display':'block'}).mouseleave(function(){
		$('#shop').css({'display':'none'});
	})
	$('#shop a').hover(function(){
		$(this).css({'text-decoration': 'underline'})
	},function(){
		$(this).css({'text-decoration': 'none'})
	})
})

$('#guanxi').hover(function(){
	$(this).css({'text-decoration': 'underline'})
	},function(){
		$(this).css({'text-decoration': 'none'})
	})
$('#twxin').hover(function(){
	$('#wxin').css({'display':'block'}).mouseleave(function(){
		$('#wxin').css({'display':'none'});
})});
//轮播
(function (){
	var timer=null;
	lunbo ();
	auto()
	function lunbo (){
	for(let i=0;i<4;i++){
		$('#lb li:eq('+i+')').hover(function(){
			clearInterval(timer)
			$('#lb li').css({'background':'#000'})
			$(this).css({'background':'skyblue'})
		$('.carousel img').css({'opacity':'0'})			
		$('.carousel img:eq('+i+')').css({'opacity':'1'})			
		},function(){
			auto()
			$(this).css({'background':'#000'})
	})}	
	}
	function auto(){
	var i=0;
	timer=setInterval(function(){
		i++
		if(i==4){i=-1}
		$('#lb li').css({'background':'#000'})
		$('#lb li:eq('+i+')').css({'background':'skyblue'})
		$('.carousel img').css({'opacity':'0'})			
		$('.carousel img:eq('+i+')').css({'opacity':'1'})									
	},1500)
	}
} )();
$('.header ol li a').each(function(){
	$(this).hover(function(){
		$(this).css({'color':'red'})
	},function(){
		$(this).css({'color':'#666'})
	})
})
$('.navtree .navtreeul div').hover(function(){
	$(this).css({'display':'block'})
	
},function(){
	$(this).css({'display':'none'})
})

$('.navtree li h3').each(function(){
	$(this).hover(function(){
		$(this).css({'color':'red','border-right':0,'z-Index':'12'})
		$(this).children('span').css({'backgroundPositionY':'-130px'})
		$(this).parent('li').next('div').css({'display':'block'})
		
},function(){
	$(this).css({'color':'#666','border-right':'1px solid #c1c1df','z-Index':'3'})
	$(this).parent('li').next('div').css({'display':'none'})
		$(this).children('span').css({'backgroundPositionY':'-91px'})
})
})
$('.navtree li h4').hover(function(){
		$(this).css({'color':'red','background':'#fff'})
		$(this).parent('li').next('div').css({'display':'block'})
		$(this).children('span').css({'backgroundPositionY':'-130px'})
		
},function(){
	$(this).parent('li').next('div').css({'display':'none'})
	$(this).css({'color':'#fff',"background":'#4c676a'})
		$(this).children('span').css({'backgroundPositionY':'-91px'})
});
(function(){
	var go=document.getElementById("goup");
	
	document.onscroll=function(){
		var topx=document.documentElement.scrollTop||document.body.scrollTop
		if(topx<500){
			go.style.display='none'
		}else{
			go.style.display='block'
		}
		go.onclick=function(){
			document.documentElement.scrollTop=0
			
		}
	}
})();
//一级菜单
$('#cd').on({"click":function(){$('#cd1').css({'display':'none'})},"mouseenter":function(){$('#cd1').css({'display':'block'})}});

//二级菜单
$.getJSON("../first.json",function(data){
	var sho1=document.getElementById('show11')
	for(var i in data){		
		for(var a in data[i]){
			var dl=document.createElement('dl');
		var dt=document.createElement('dt');
		dt.innerHTML=data[i][a][0]	
		dl.appendChild(dt)
		for(var c=1,le=data[i][a].length;c<le;c++){
			var dd=document.createElement('dd')
				dd.innerHTML=data[i][a][c]
				dl.appendChild(dd)
			}
		sho1.appendChild(dl)
		}
		
	}
	
})
$(function(){
		var cookieStr = $.cookie('cart') ? $.cookie('cart') : '';
		var cookieObj = convertCookieStrToCookieObj(cookieStr);
					for(var key in cookieObj){
						var good = cookieObj[key];
						console.log(good.name)
						var str = `
							<ul class="goodInfo" data-good-id="${good.id}">
								<li><img src="${good.src}" /></li>
								<li>${good.name}</li>
								<li>${good.price}</li>
								<li class="num">
									<a href="javascript:;" class="minus">-</a>
									<input type="text" name="" id="" value="${good.num}" />
									<a href="javascript:;" class="plus">+</a>
								</li>
								<li class="total">${good.price * good.num}</li>
								<li><a href="javascript:;" class="del">删除</a></li>
							</ul>
						`;
						$('.cart').append(str);
					}
					//添加事件
					//删除
					var $del = $('.goodInfo .del');
					$del.each(function(){
						$(this).click(function(){
							var id = $(this).parents('.goodInfo').remove().attr('data-good-id');
							//删除cookie中指定key
							delete cookieObj[id];
							$.cookie('cart',JSON.stringify(cookieObj),{expires:7,path:'/'});
						})
					})
					//减
					var $minus = $('.goodInfo .minus');
					$.each($minus,function(){
						$(this).click(function(){
							//获取id
							var id = $(this).parents('.goodInfo').attr('data-good-id');
							//修改cookieObj
							if(cookieObj[id].num > 1){
								cookieObj[id].num --;
							}
							//添加cookie
							$.cookie('cart',JSON.stringify(cookieObj),{expires:7,path:'/'});
							//文本框中的数量
							$(this).next().val(cookieObj[id].num);
							$(this).parent().next().html(cookieObj[id].price * cookieObj[id].num);
						})
					})
					//加
					var $plus = $('.goodInfo .plus');
					$.each($plus,function(){
						$(this).click(function(){
							//获取id
							var id = $(this).parents('.goodInfo').attr('data-good-id');
							//修改cookieObj
							
							cookieObj[id].num ++;
							
							//添加cookie
							$.cookie('cart',JSON.stringify(cookieObj),{expires:7,path:'/'});
							//文本框中的数量
							$(this).prev().val(cookieObj[id].num);
							$(this).parent().next().html(cookieObj[id].price * cookieObj[id].num);
						})
					})
					//失焦
					var $input = $('.goodInfo .num input');
					$input.each(function(){
						$(this).blur(function(){
							//获取id
							var id = $(this).parents('.goodInfo').attr('data-good-id');
							//修改cookieObj
							var num = $(this).val();
							if(/^\d+$/.test(num) &&  num > 1){
								cookieObj[id].num = $(this).val();
							}else{
								cookieObj[id].num = 100;
							}
							//添加cookie
							$.cookie('cart',JSON.stringify(cookieObj),{expires:7,path:'/'});
							$(this).val(cookieObj[id].num);
							$(this).parent().next().html(cookieObj[id].price * cookieObj[id].num);
						})
					})
				
			})
function convertCookieStrToCookieObj(str){
				if(!str){
					return {};
				}
				return JSON.parse(str);
			}



