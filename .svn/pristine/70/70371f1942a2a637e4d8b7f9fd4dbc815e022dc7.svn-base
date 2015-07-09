(function($){
	$.fn.coffee = function(obj){
		for(var eName in obj)
			for(var selector in obj[eName])
				$(this).on(eName, selector, obj[eName][selector]);
		}
	
})(jQuery);
(function($){
	$.fn.coffee = function(obj){
		for(var eName in obj)
			for(var selector in obj[eName])
				$(this).on(eName, selector, obj[eName][selector]);
		}
	
})(Zepto);
$(function(){
	$(".slideBox .hd li").eq(0).text('A');
	$(".slideBox .hd li").eq(1).text('B');
	$(".slideBox .hd li").eq(2).text('C');
	/*$(".member_ul li").on('touchend', function() {
		$(this).addClass('member_on').siblings('li').removeClass('member_on');
	});
	$(".footer li").on('touchend', function() {
		$(this).addClass('footer_on').siblings('li').removeClass('footer_on');
	});*/
	$(".member_ul li").click(function() {
		$(this).addClass('member_on').siblings('li').removeClass('member_on');
	});
	$(".footer li").click(function() {
		$(this).addClass('footer_on').siblings('li').removeClass('footer_on');
	});
	$(".slidenav .slidenav_b").eq(0).children('.slidenav_c').show();
	/*$(".slidenav_t").on('touchend', function(event) {
		$(this).parent().addClass('slidenav_on');
		$(this).siblings('.slidenav_c').show();
		$(this).parent().siblings('.slidenav_b').removeClass('slidenav_on').children('.slidenav_c').hide();
	});*/
	$(".slidenav_t").click(function(event) {
		$(this).parent().addClass('slidenav_on');
		$(this).siblings('.slidenav_c').show();
		$(this).parent().siblings('.slidenav_b').removeClass('slidenav_on').children('.slidenav_c').hide();
	});
	var num = $("#price").val();
	$(".add").on('touchend', function(){
		num = parseInt(num) + 1;
		$("#price").val(num);
	})
	$(".reduce").on('touchend', function(){
		if(num>1){
			num = parseInt(num) - 1;
			$("#price").val(num);
		}
	});
	var num = $("#price").val();
	$(".addnum").on('touchend', function(){
		if(num<20){
		num = parseInt(num) + 10;
		}
		$("#price").val(num);
	})
	$(".reducenum").on('touchend', function(){
		if(num>10){
			num = parseInt(num) - 10;
			$("#price").val(num);
		}
	});
	/*$("#price").keyup(function(event){
		if(!(event.keyCode>=48 && event.keyCode<=57)){
			$("#price").val(1);
		}
	})*/
	// 登录注册弹出层
	/*$(".cover_open,.login_dl").on('touchend', function(event) {
		$(".login").show();
		$(".register").hide();
	})
	$(".login_reg").on('touchend', function(){
		$(".register").show();
		$(".login").hide();
	})*/

	$(".cover_open,.login_dl").click(function(event) {
		if(user_name==""){
			$(".login").show();
			
		}
		else{
			$(".jmember").show();
			
		}
		$(".register").hide();
	})
	$(".login_reg").click(function(){
		$(".register").show();
		$(".login").hide();
	})
	// 关闭弹出层
	/*$(".cover_close").on('touchend', function(event) {
		$(this).parent().parent().hide();
	});
	$(".login_send").on('touchend', function(event) {
		$(this).addClass('login_sent').removeClass('login_send');
	});*/
	$(".cover_close").click(function(event) {
		//$(this).parent().parent().hide();
		$(".login").hide();
		$(".register").hide();
		$(".jmember").hide();
	});
	$(".login_send").click(function(event) {
		$(this).addClass('login_sent').removeClass('login_send');
	});
	$(".header").delegate('.cover_mem,.f_mb', 'touchend', function(event) {
		$(".jmember").show();
		member_h();
	});
	$(".footer").delegate('.footer_hy', 'click', function(event) {
		$(".jmember").show();
		member_h();
	});
	$(".footer").delegate('.footer_dl', 'click', function(event) {
		RemoteUtil.send("/Hotel/rest/customer/getlogincustomer", "GET", "", getlogincustomerBack);
		/*if(user_name==""){
			$(".login").show();
			
		}
		else{
			$(".jmember").show();
			
		}
		member_h();*/
	});
	
	function getlogincustomerBack(data){
    	
    	if (data.succeed) {
			if (data.result.statusCode == "200") {
				if(data.result.successMsg!=null && data.result.successMsg!="null"){
					$(".jmember").show();
				}else{
					$(".login").show();
					
				}
			}else{
				$(".login").show();
				
			}
			member_h();
		}
    	
    }
	
	function member_h(){
		var wH = $(window).height();
		var tH = $(".logo").height();
		$(".login_c").height(wH - tH);
	}
	member_h();
	$(window).resize(function(event) {
		member_h();
	});
	$(".tadg").on('click', function(event) {
		$(".login").show();
		member_h();
	});
	/*$(window).on('swipeUp', function(event) {
		$(".footer").anim({height: 0}, 500, 'ease-out');
		$(".content").anim({'padding-bottom': 0}, 500, 'ease-out');
	});
	$(window).on('swipeDown', function(event) {
		$(".footer").anim({height: '3.2em'}, 500, 'ease-out');
		$(".content").anim({'padding-bottom': '3.2em'}, 500, 'ease-out');
	});*/

	
	
	$('.clear-input-box').coffee({
        focus: {
            /*清除文本框内容*/
            'input': function(){
                $(this).siblings(".clear-input").show();
            }
        },
        blur: {
            /*获取焦点显示清除按钮*/
            'input': function(){
                $(this).siblings(".clear-input").hide();
            }
        },
        tap: {
            /*失去焦点隐藏按钮*/
            '.clear-input': function(){
                $(this).siblings('input').val('');
            }
        }
    });
})


!(function($){
	$.fn.layer = function(txt){
		if($('#layer').length < 1){
			$('<div id="layer"><span>' + txt + '</span></div>').appendTo('body');
			var law = $("#layer span").width()/2;
			var lah = $("#layer span").height()/2;
			$("#layer span").css({'margin-left':-law,'margin-top':-lah});
			var set = setInterval(function(){
				clearInterval(set);
				$("#layer").remove();
			},3000)
		}
		$('#layer').on('click',function(){
			$(this).remove();
		})
	}
  
})(jQuery);

/*// 注册验证
function check(){
	var result=false;
	var user = $("#reg-user");
	var psw = $("#reg-psw");
	var repsw = $("#reg-repsw");
	var phone = $("#phone");
	if(user.val()=="" || user.val()==null){
		user.focus(); 
		alert("用户名不能为空！");
	}else if(user.val().length < 6 || user.val().length > 12){
		user.focus(); 
		alert("长度应为6-12之间");
	}else if(checksafestr(user.val(),true)){
		user.focus(); 
		alert("用户名包含非法字符!");
	}else if(psw.val()=="" || psw.val()==null){
		psw.focus(); 
		alert("请输入密码!");
	}
	else if(psw.val().length < 6 || psw.val().length > 12){
		psw.focus(); 
		alert("长度应为6-12之间");
	}else if(repsw.val() != psw.val()){
		repsw.focus(); 
		alert("两次密码不一致!");
	}else if(phone.val()== "" || phone.val()== null){
		phone.focus(); 
		alert("请输入手机号码!");
	}else
		result=true;
	
	return result;
}
//设置非法字符，防SQL、JS注入攻击
function checksafestr(str,isspace){             
	var result=false;
	var arr=new Array(";",",","!","<",">","@","#","?");
	if(isspace && str.indexOf(" ")!=-1)
		result=true;
	for(var i=0;i<arr.length;i++){
		if(str.indexOf(arr[i])!=-1){
			result=true;
			break;
		}
	}
	return result;
}*/