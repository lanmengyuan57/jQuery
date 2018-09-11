$(function(){
	// 页面上下滚动代码
	var isFinished = true;
	var i=0;
	var k=0;
	$('ul.clot li').eq(0).css('background','#ccc');
	//给首页右侧按钮绑定点击事件
	$('div.wrap ul.clot li').click(function(){
		isFinished=false;
   		i = -($(this).index())
   		 var obj = {
			top:i*631+'px'
		}
		$('.wrap').animate(obj,800,function(){
			isFinished=true;
		});
		$('ul.clot li').eq(-i).css('background','#ccc').siblings().css('background','transparent');
		//点击按钮执行对应的动画
		animation(0,-1,-2,-3,i);
	})
	//鼠标滚动事件函数
	var scrollFunc = function (e) {
	    e = e || window.event;  
	    if(isFinished){
	        if (e.wheelDelta) {  //判断浏览器IE，谷歌滑轮事件
	            if (e.wheelDelta < 0) { //当滑轮向下滚动时
	            	isFinished=false;
	                // console.log("滑轮向下滚动");
	                if(i<-2){
	                	i=1;
	                }
	                //向下滑动执行效果
					animation(1,0,-1,-2,i);
	                i--;
	                var obj = {
						top:i*631+'px'
					}
					$('ul.clot li').eq(-i).css('background','#ccc').siblings().css('background','transparent');
					$('.wrap').animate(obj,800,function(){
						isFinished=true;
					});
					// console.log(i)
	            }
	            if (e.wheelDelta > 0) { //当滑轮向上滚动时
	            	isFinished = false;
	                // console.log("滑轮向上滚动");
	               	if(i<0){
						i++;	
					}else if(i==0){
						i=0;	
					}
					//向上滑动执行动画效果
					animation(0,-1,-2,null,i);
					// console.log(i);
	                var obj1 = {
						top:i*631+'px'
					}
					$('ul.clot li').eq(-i).css('background','#ccc').siblings().css('background','transparent');
					$('.wrap').animate(obj1,800,function(){
						isFinished = true;
					});
	            }
	        } else if(isFinished){
	         	if (e.detail) {  //Firefox滑轮事件
		            if (e.detail> 0) { //当滑轮向上滚动时
		                // alert("滑轮向上滚动"); 
		                isFinished=false;               
		                if(i<-2){
	                		i=1;
	                	} 
						animation(1,0,-1,-2,i);
	                	i--;
	                	var obj = {
							top:i*631+'px'
						}
						$('ul.clot li').eq(-i).css('background','#ccc').siblings().css('background','transparent');
						$('.wrap').animate(obj,800,function(){
							isFinished=true;
						});
						// console.log(i)
		            }
		            if (e.detail< 0) { //当滑轮向下滚动时
		                // alert("滑轮向下滚动");
		               isFinished = false;
	                // console.log("滑轮向上滚动");
			            if(i<0){
							i++;	
						}else if(i==0){
							i=0;	
						}
						animation(0,-1,-2,null,i);
		                var obj1 = {
							top:i*631+'px'
						}
						// console.log(i)
						$('ul.clot li').eq(-i).css('background','#ccc').siblings().css('background','transparent');
						$('.wrap').animate(obj1,800,function(){
							isFinished = true;
						});
	           		}	
	        	}
	        }
	    }
    }
    //给页面绑定滑轮滚动事件
    if (document.addEventListener) {//firefox
        document.addEventListener('DOMMouseScroll', scrollFunc, false);
    }
    //滚动滑轮触发scrollFunc方法  //ie 谷歌
    window.onmousewheel = document.onmousewheel = scrollFunc; 

    // 需要网页加载完成出现的动画
    window.onload = function(){
    	// 第一页的文字上下移动特效
		title('div.header h2',180,1)
		//标题特效
		title('.wrap div.title',null,1,650)
		//关于  文字图片移动特效
		title('div.main h2',null,1,200)
		title('div.main img.left',null,1,50)
		title('div.main ul.mainTop',null,1,480)
		//联系我们 
		title('div.main div.left',null,1,50)
		title('div.main div.right',null,1,1123)
		//用户留言
		$('div.wrap div.main div.mainRight form input').eq(0).focus()
	}
    //首页导航栏
    nav('div.wrap div.header ul li',5)
    //首页 第二页的导航栏
    nav('div.mainTopM ul.nav li')
 	//产品导航栏
    nav('div.wrap div.headerP ul li',4)
    //产品轮播显示
    $('ul.mainT li').click(function(){
    	k = $(this).index();
    	var obj = {
					left:-1200*k+'px'
				}
				$('div.mainM div').animate(obj,800);
				$(this).css('background','#272636').children().css('color','#fff').parent().siblings().css('background','transparent').children().css('color','#5a5a5a')
    })
    //产品左箭头移动
    $('div.wrap div.mainLfet a').click(function(){
		if(k>0){
			k--;	
		}else if(k==0){
			k=0;
		}  	
		var obj = {
			left:-1200*k+'px'
		}
		$('ul.mainT li').eq(k).css('background','#272636').children().css('color','#fff').parent().siblings().css('background','transparent').children().css('color','#5a5a5a')
		$('div.mainM div').animate(obj,800);
    })
    //产品右箭头移动
    $('div.wrap div.mainRight a').click(function(){
 				if(k<3){
					k++;	
				}else if(k==3){
					k=3;
				}  
				var obj = {
					left:-1200*k+'px'
				}
				$('ul.mainT li').eq(k).css('background','#272636').children().css('color','#fff').parent().siblings().css('background','transparent').children().css('color','#5a5a5a')
				$('div.mainM div').animate(obj,800);
				// console.log(num);
    })
    //新闻导航栏
    nav('div.wrap div.headerN ul li',3)
    //关于导航栏
    nav('div.wrap div.headerA ul li',2)
    //关于的滚动条显示事件
    $(window).scroll(function(){
    	var j=$(window).scrollTop()
    	// console.log(j);
    	if(j>=300){
    		title('div.main h3',null,1,50)
			title('div.main ul.mainBottom',null,1,50)
			title('div.main img.right',null,1,null,60)
    	}
    })
    //联系我们导航栏
    nav('div.wrap div.headerC ul li',1)
    //用户留言导航栏
    nav('div.wrap div.headerL ul li',0)
    //用户提交留言
	    var flag = false;
	    var flagone =false;
	    var flagtwo =false;
	 	$('div.wrap div.main div.mainRight form input').blur(function(){
				// 判断是否符合规范
				if($(this).val() == ''){
					$(this).next().html('<span>*内容不能为空</span>').css({'color':'#E0551C','font':'12px'})
					flag = false;
				}else{
					// 判断用户名是否符合规范
					var pattern = /^\w{11,}$/;
					if(pattern.test($(this).val())){
					$(this).next().html('<span>√</span>').css('color','#f00')
						// 判断用户名是否已存在   连接数据库
						flagtwo=true;
					}else{
					$(this).next().html('<span>×内容不符合规范</span>').css('color','#f00')
						flagtwo = false;
					}
				}
			}) 
	 	$('div.wrap div.main div.mainRight form textarea').blur(function(){
					if($(this).val() == ''){
						$(this).next().html('<span>*内容不能为空</span>').css({'color':'#E0551C','font':'12px'})
						flag = false;
					}else{
						$(this).next().html('<span>√</span>').css('color','#f00')
						flagone = true;
					}
					if(flagtwo==true&&flagone==true){
						flag=true;
						$('div.wrap div.main div.mainRight form input.leave').click(function(){
						alert('提交成功')
						})
					}
			})
		$('div.wrap div.main div.mainRight form').submit(function(){
			return flag;
		})
})  
