$(function(){
    $('#dowebok').fullpage({
    	//设置每一屏的颜色
    	sectionsColor:['#0da5d6', '#2AB561', '#DE8910', '#16BA9D', '#0DA5D6'],
    	
    	//滚到某一屏之后调用
    	afterLoad:function(link,index){
    		$(".section").removeClass("current");
    		//让动画延迟执行
    		setTimeout(function(){
    			$(".section").eq(index-1).addClass("current");
    		},100);
    	}
    	
    });
});