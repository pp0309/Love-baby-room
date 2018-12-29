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
$('.navtree li h3').each(function(){
	$(this).hover(function(){
		$(this).css({'color':'red'})
		$(this).children('span').css({'backgroundPositionY':'-130px'})
		$(this).parent('li').next('div').css({'display':'block'})
},function(){
	$(this).css({'color':'#666'})
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
})

