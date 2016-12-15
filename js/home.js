$(document).ready(function() {
		var win = $(window); //得到窗口对象
		var sc = $(document); //得到document文档对象。
		win.scroll(function() {
			if(sc.scrollTop() >= 540) {
				$(".header").css("background", "rgba(0,0,0,1)")
			} else {
				$(".header").css("background", "transparent")
			}
		})

	})
	//banner?
$(document).ready(function() {
	var n = 0;
	var next = 0;
	var flag2 = true;
	if(!flag2) {
		return;
	};
	flag2 = false;
	var t = setInterval(move, 4000);
	function move() {
		next = n + 1;
		if(next >= $(".cir").length) {
			next = 0;
		};
		$(".cir").eq(n).removeClass("dong1").removeClass("dong").addClass("dong1").animate({
			zLndex: 11
		}, 10, function() {
			flag2 = true
		})
		$(".cir").eq(next).removeClass("dong1").removeClass("dong").addClass("dong").animate({
			zLndex: 1
		}, function() {
			flag2 = true
		})
		n = next
	}
	$(".banner-left").click(function() {
		if(!flag2) {
			return;
		};
		flag2 = false;
		next = n - 1;
		if(next < 0) {
			next = $(".cir").length - 1;
		}
		$(".cir").eq(n).removeClass("dong").addClass("dong1").animate({
			zLndex: 11
		}, 10, function() {
			flag2 = true
		})
		$(".cir").eq(next).removeClass("dong1").addClass("dong").animate({
			zLndex: 12
		}, 10, function() {
			flag2 = true
		})
		n = next
	})
	$(".banner-right").click(function() {
			move(t);
		})
		// floor楼层跳转
	$(".menu .menu-eve").click(function() {
		$(".menu .menu-eve").css("borderBottomColor", "transparent")
		$(this).css("borderBottomColor", "#79BE0B")
		var index = $(".menu .menu-eve").index($(this))
			//通过拼接字符串获取元素，再取得相对于文档的高度
		var _top = $(".floor").eq(index).offset().top;
		//scrollTop滚动到对应高度
		$("body,html").animate({
			scrollTop: _top
		}, 500);
	});
	//var nav=$(".florce"); //得到导航对象
	var win = $(window); //得到窗口对象
	var sc = $(document); //得到document文档对象。
	win.scroll(function() {
		//获取滚动元素对应的索引!!!重难点
		var index = Math.floor((sc.scrollTop() - 400) / 705);
		if(index == 0) {
			$(".feat-left").addClass("feat-active")
			$(".feat-right").addClass("feat-active2")
			$(".header").addClass("header-act")
		} else if(index == 1) {
			$(".con-hd-tp").addClass('con-tp-act')
			$(".con-hd-bt").addClass('con-bt-act')
			$(".detail-eve").addClass('detail-eve-act')
			$(".xiaoyingyong").addClass('xiaoyingyong1')
			$(".goTop").css("display","block")
		} else if(index == 3) {
			$(".simple-head").addClass("sim-hd")
			$(".skill-mid p").addClass("ppp")
		} else if(index == 4) {
			$(".simple").addClass("simple-act")
			$(".mai").addClass("mai-act")
			$(".mai1").addClass("mai-act1")
			$(".mai2").addClass("mai-act2")
			$(".mai3").addClass("mai-act3")
		}
		$(".menu .menu-eve").css("borderBottomColor", "transparent")
		if(index<3){
			$(".menu .menu-eve").eq(index).css("borderBottomColor", "#79BE0B")
		}else{
			$(".menu .menu-eve").eq(index-1).css("borderBottomColor", "#79BE0B")
		}
		
	})
})