
	// 导航栏hover效果封装函数 a代表hover的父元素 b代表移出显示的下标
    function nav(a,b){
		$(a).hover(
			function(){
				$(this).children().css('background','#272636').css('color','#fff').parent().siblings().children().css('background','transparent').css('color','#000')
			},
			function(){
				$(a).children().parent().eq(b).children().css({'background':'#272636','color':'#fff'}).parent().siblings().children().css({'background':'transparent','color':'#000'})
			}
		)
	}
	//图片标题特效封装函数a带表标题的元素 b代表top移动的距离 c代表透明度 d代表left f代表right
	function title(a,b,c,d,f){
		var title={
			top:b+'px',
			opacity:c,
			left:d+'px',
			right:f+'px'
		}
		$(a).animate(title,1500)
	}
	//首页动画效果封装函数 a b c d分别传入执行条件i的值
	function animation(a,b,c,d,f){
		//标题特效 第一页
	        if(f==a){
	        	title('div.header h2',180,1)
	        }else{
	        	title('div.header h2',641,0)
	        }
	    //标题特效 第二页
	        if(f==b){
	        	title('div.mainTopM div.titleH',120,1)
	        	title('div.mainTopM img.title',180,1)
	        }else{
	        	title('div.mainTopM div.titleH',350,0)
	        	title('div.mainTopM img.title',0,0)
	    	}
	    //动画 第三页
	    	if(f==c){
	        	title('div.mainMiddle div.titleH',20,1)
	        	title('div.mainMiddle img.title',80,1)
	        	title('div.mainMiddle ul.mainTitle',170,1)
	        	title('div.mainMiddle h2',null,1,65)
	        	title('div.mainMiddle img.imgTwo',null,1,0)
	        	title('div.mainMiddle div.left',null,1,383)
	        	title('div.mainMiddle div.center',null,1,657)
	        	title('div.mainMiddle div.right',null,1,930)
	        	title('div.mainMiddle div.leftText',null,1, null,30)
	        	title('div.mainMiddle div.centerText',null,1,null,300)
	        	title('div.mainMiddle div.rightText',null,1,null,573)
	        	$('div.mainMiddle ul.bottom li img').css('transform','scale(5)')               	
	        }else{
	        	title('div.mainMiddle div.titleH',200,0)
	        	title('div.mainMiddle img.title',-30,0)
	        	title('div.mainMiddle ul.mainTitle',0,0)
	        	title('div.mainMiddle h2',null,1,-56)
	        	title('div.mainMiddle img.imgTwo',null,1,-20)
	        	title('div.mainMiddle div.left',null,1,200)
	        	title('div.mainMiddle div.center',null,1,200)
	        	title('div.mainMiddle div.right',null,1,200)
	        	title('div.mainMiddle div.leftText',null,0,null ,0)
	        	title('div.mainMiddle div.centerText',null,0, null,0)
	        	title('div.mainMiddle div.rightText',null,0, null,0)
	        	$('div.mainMiddle ul.bottom li img').css('transform','scale(1)')
	    	}
	    //第四页标题
	    	if(f==d){
	    		title('div.mainBottom div.titleH',120,1)
	    		title('div.mainBottom img',180,1)
	    		title('div.mainBottom h3',null,1,null,350)
	    		title('div.mainBottom div.text',null,1,null,190)
	    	}else{
	    		title('div.mainBottom div.titleH',641,0)
	    		title('div.mainBottom img',0,0)
	    		title('div.mainBottom h3',null,0,null,0)
	    		title('div.mainBottom div.text',null,1,null,0)
	    	}
	}
