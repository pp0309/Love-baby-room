
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

//放大
$('#mark').on({'mouseenter':function(){
	$('#float').css({'display':'block'})
	$('#bigp').css({'display':'block'})
},'mousemove':function(eve){
	var offset=$(this).offset();
	var offsetwidth=$('#float').width();
	var offsetheight=$('#float').height();
	var left=eve.pageX-offset.left-offsetwidth/2;
	var top=eve.pageY-offset.top-offsetheight/2;
	var leftx=$('#mark').width()-offsetwidth;
	var topy=$('#mark').height()-offsetheight;
		if(left<=0){left=0}else if(left>leftx){left=leftx}
		if(top<=0){top=0}else if(top>topy){top=topy}
	$('#float').css({'left':left,'top':top})
	var x=left/leftx;
	var y=top/topy;
	var leftX=$('#bigp').width()-$('#bigimg').width();
	var topY=$('#bigp').width()-$('#bigimg').width();
	$('#bigimg').css({'left':(x*leftX),'top':(y*topY)})
},'mouseleave':function(){
	$('#float').css({'display':'none'})
	$('#bigp').css({'display':'none'})
}})

