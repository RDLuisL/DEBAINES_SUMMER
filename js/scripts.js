jQuery(document).ready(function($){
	var createdate = new Date();
	var getyear = createdate.getFullYear();
	var getyeardiv = document.getElementById('year');
	getyeardiv.innerHTML = getyear;
	var bannerslider = $(".bannerslider").bxSlider({
		auto: true,
		pause: 6000,
		mode: 'fade',
		controls: true,
		nextText: '<i class="fa-solid fa-chevron-right"></i>',
		prevText: '<i class="fa-solid fa-chevron-left"></i>'
	});
	$(window).scroll(function() {
		if($(this).scrollTop() >= 100){
			$('header').addClass('fixed');
			$('.topbar').addClass('hide');
			$('a.topbutton').addClass('show');
		}else{
			$('header').removeClass('fixed');
			$('.topbar').addClass('show');
			$('a.topbutton').removeClass('show');
		}
	});
	$('.topbutton').click(function(){
		$('html, body').animate({scrollTop:0},800);
	});
	$(".showmenu").click(function() {
		$("nav").fadeIn();
		$(this).hide();
		$(this).next(".hidemenu").show();
		$('body').addClass('disablescroll');
	});                               
	$(".hidemenu").click(function() {
		$("nav").fadeOut();
		$(this).hide();
		$(this).prev(".showmenu").show();
		$('body').removeClass('disablescroll');
	});
	var viewportWidth = $(window).width();
    if (viewportWidth < 1200) {
    	$("nav a").click(function() {
			$("nav").fadeOut();
			$(".hidemenu").hide();
			$(".showmenu").show();
			$('body').removeClass('disablescroll');
		});
    }
	var lastId,topMenu=$("#headnav"),topMenuHeight=topMenu.outerHeight()+135,menuItems=topMenu.find("a").not("li.phone a"),scrollItems=menuItems.map(function(){var t=$($(this).attr("href"));if(t.length)return t});menuItems.click(function(t){var e=$(this).attr("href"),n="#"===e?0:$(e).offset().top-120;$("html, body").stop().animate({scrollTop:n},1200),t.preventDefault()}),$(window).scroll(function(){var t=$(this).scrollTop()+topMenuHeight,e=scrollItems.map(function(){if($(this).offset().top<t)return this}),n=(e=e[e.length-1])&&e.length?e[0].id:"";lastId!==n&&(lastId=n,menuItems.parent().removeClass("active").end().filter("[href='#"+n+"']").parent().addClass("active"))});
});