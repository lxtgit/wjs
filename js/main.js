$(function(){
	function getWidth() {
		var scrrenWidth = $(window).width();
	var isSmall = scrrenWidth<768;
	$('#main_ad>.carousel-inner>.item').each(function(i,element){
		var imgSrc = isSmall?$(element).data('sm'):$(element).data('lg');
		$(element).css('backgroundImage','url("'+imgSrc+'")');
		if(isSmall) {
		$(element).html('<img src="'+imgSrc+'">');
	}else {
        $(element).empty();
      }
	});
	}
	$(window).on('resize',getWidth).trigger('resize');

	 // 初始化tooltips插件
  	$('[data-toggle="tooltip"]').tooltip();

  	// 控制ul的长度
  	var ulWidth = 30;
  	$('.nav-tabs').children().each(function(index,element){
  		ulWidth += $(element).width();
  	});
  	if(ulWidth>$(window).width()) {
  		$('.nav-tabs').css('width',ulWidth).parent().css('overflow-x','scroll');
  	// $('.nav-tabs').width(ulWidth);

  	}
  	$('#news .nav-pills a').on('click',function(){
  		var newsTitle = $(this).data('title');
  		$('.news-title').text(newsTitle);
  	});

  	//轮播图在移动端通过手指可以滑动
  	// 第一步： 先判断手指的移动方向 第二步：触发事件 或调用bootstrap的函数
  	var starX;
  	var endX;
  	var offset = 50;
  	$('.carousel').on('touchstart',function(e){
  		starX = e.originalEvent.touches[0].clientX;
  		console.log(e.originalEvent.touches[0].clientX);
  	});
  	$('.carousel').on('touchmove',function(e){
  		//  重复赋值
  		endX = e.originalEvent.touches[0].clientX;
  		console.log(endX);
  	});
  	$('.carousel').on('touchend',function (e){
  		//手指弹起时记录最终的位置
  		if(Math.abs(starX-endX)> offset) {
  			$(this).carousel(starX<endX? 'prev' : 'next');	
  	}
  	});
	
});