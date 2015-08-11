/*
 *discription: 基本判断
 *
 */
 
 /**
 * 通用AJAX提交
 * @param  {string} url    表单提交地址
 * @param  {string} formObj    待提交的表单对象或ID
 */
function commonAjaxSubmit(url,data){
 
    if(!url||url==''){
        var url=document.URL;
    }
      $.post(url,data,function(item){
           $(document).layer(item['info']);//提示
		   if(item['url']!=0&&item['url']!='')
		   {alert("c");
			   window.location.href=item['url'];
		   }
    },"json");
    return false;
}

//登录
function loginAjaxSubmit(url,data){
	
	RemoteUtil.send(url, "GET", data, callSubmitBack);
	
}

var user_name ="";
var accout = "";
function callSubmitBack(data){
	
	if(data.succeed){
		if(data.result.statusCode == "200"){
			if(data.result.successMsg!=null && data.result.successMsg!="null"){
				if(login=="room"){
					onReservation("reservation/scheduled.html?title="+title+"&price="+price+"&indatetime="+indatetime+"&outdatetime="+outdatetime+"&count="+count+"&indays="+indays+"&sellprice="+sellprice+"&rowid="+rowid);
				}else if(login=="sellcoupon"){
					
					onReservation("reservation/sellcoupon_schedule.html?name="+name+"&surplus="+surplus+"&price="+price+"&sellprice="+sellprice+"&detall="+detall+"&instructions="+instructions+"&img="+img+"&rowid="+rowid);
				}
				else{
					//$(document).layer("登录成功！");//提示
					$(".login").hide();
					$(".jmember").show();
					//$(".cover_open").html('&#xe60d;');
					//navigation("center/myorder.html");
					accout = data.result.successMsg.accout;
					user_name = data.result.successMsg.name;
					$(".login_ty1").html(accout);
					$("#user_name").html(user_name);
					//var url = "/Hotel/rest/customer/getlogincustomer";
					//RemoteUtil.send(url, "GET", data, getlogincustomerBack);
				}
			}else{
				$(document).layer("登录失败！");
			}
		}
	}
	
}
function getlogincustomerBack(data){
	
	
	
}

/*发送验证码*/
	var wait=180;   //等待60秒再次发送
	function time(o) {
        if (wait == 0) {
        	o.removeAttr('id','login_send');
        	o.removeAttr("disabled",false);
        	o.parent().html("<input type='button' value='获取验证码' id='login_send' />");
			o.val("获取验证码");
            wait = 180;
        } 
		else {
			o.attr("disabled");
			o.removeAttr("id");
            wait--;
            o.val("重新发送(" + wait + ")");
            setTimeout(function() {
                time(o)
            }, 1000)
        }
    }
