
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

$('.buy').click(function(e){
	var shopid=$(this).parents('li').attr("data-good-id");
	var shopname=$(this).parent('div').prevAll('.midraz').html();
	var shoprice=$(this).parent('div').prev('p').children('b').html();
	var shopprice=/(\d+)/.exec(shoprice)[1]
	var shopsrc=$(this).parent('div').prevAll('.midrat').children('img').attr('src');
	var cartStr = $.cookie("cart") ? $.cookie("cart") : "";
	var cartObj = convertCatStrToObj(cartStr);
	if(shopid in cartObj){
	cartObj[shopid].num += 1;
	}else{cartObj[shopid] = {
		id:shopid,
name : shopname,price : shopprice,
num : 1,src : shopsrc};
	}
	cartStr = JSON.stringify(cartObj);
	$.cookie("cart",cartStr,{expires : 7,path:"/"});
	//飞入
	
	var cloneImg = $(this).parent('div').prevAll('.midrat').children('img').clone().css({width:50,height:50});
					cloneImg.fly({
						start : {
							top : e.clientY,
							left : e.clientX
						},
						end :{
							top : $("#buycat").offset().top,
							left : $("#buycat").offset().left,
							width:0,
							height:0
						},
						autoPlay : true,
						onEnd : function(){
							$("#buycat").html(function(index,v){
						var pattern = /(\d+)/;
						var num = parseInt(v.match(pattern)[1]);
						return "购物车(" + (num + 1) + ")";
					});
					cloneImg.remove();
						}
					})
	
	
	
	
	
})
	$('pay').click(function(){
		location.href = "page3.html";
	})
//将cookie字符串转为对象
function convertCatStrToObj(str){
		if(!str){
			return {};
		}
		return JSON.parse(str);
	}