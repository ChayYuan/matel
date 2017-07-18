$(function() {
	var mainH = $(window).outerHeight(true);
	$(".main-content").css({"height": mainH + "px"});
    var contH = $(".main-content").height()-100;
	$(".msg-content").css({"height": contH + "px"});
    var msgH = $(".msg-content").height();
    $(".imgShow").css({"max-height": msgH + "px"});
    $(".msgBox").css({"height": msgH + "px"});
	
	var n=1;
	$("a.img-smaller").click(function () {
		var box=$(this).parent().parent();
		n = n-0.1
		if(n > 0.4){
			box.find('.img-zoom').css({"transform":"scale("+n+","+n+")"});
		}else{
			n = 0.5;
		}
			
    });
	$("a.img-bigger").click(function () {
		var box=$(this).parent().parent();
		n = n+0.1
		if(n < 2){
			box.find('.img-zoom').css({"transform":"scale("+n+","+n+")"});
		}else{
			n = 1.9;
		}
			
    });

	var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
	var isOpera = userAgent.indexOf("Opera") > -1; //判断是否Opera浏览器
	var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera; //判断是否IE浏览器
	var isEdge = userAgent.indexOf("Edge") > -1; //判断是否IE的Edge浏览器
	var isFF = userAgent.indexOf("Firefox") > -1; //判断是否Firefox浏览器
	var isSafari = userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") == -1; //判断是否Safari浏览器
	var isChrome = userAgent.indexOf("Chrome") > -1 && userAgent.indexOf("Safari") > -1; //判断Chrome浏览器
	if (window.ActiveXObject || "ActiveXObject" in window){
		$("#circlr img").bind("mousewheel", function() {
			var $this = $(this);
			//alert($(this).index());
			$this.css({'display':'none'});
			if($(this).index()==0){
				$("#circlr img:last").css({'display':'block'});
			}else{
				$this.prev().css({'display':'block'});
			}
			return false;
		});
	}else if(isEdge){
		$("#circlr img").bind("mousewheel", function() {
			var $this = $(this);
			//alert($(this).index());
			$this.css({'display':'none'});
			if($(this).index()==0){
				$("#circlr img:last").css({'display':'block'});
			}else{
				$this.prev().css({'display':'block'});
			}
			return false;
		});
	}
});