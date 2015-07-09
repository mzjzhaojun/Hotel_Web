$(function()
{
	// 大图滚动
	var oHeader=$('#headers');
	var oWidth=oHeader.width();
	var oSlide=$('.headerslide');
	var oSlideson=$('.slideson');
	var oDisc=$('.disc');
	oSlideson.width(oWidth);
	var count=0;
	touch.on(oHeader,'swipeleft',function()
	{
		count++;
		if($(this).attr('alt') != '')
			$('.banner span.tex',$(this).parent().parent()).html($(this).attr('alt'));
		if(count>$('.headerslide img').length - 1)
		{
			count=0;
		}
		oSlide.animate({'left':-count*oWidth+'px'}, 500);
		oDisc.removeClass('disc_show');
		oDisc.eq(count).addClass('disc_show');
	});
	touch.on(oHeader,'swiperight',function()
	{
		count--;
		if(count<0)
		{
			count=$('.headerslide img').length - 1;
		}
		oSlide.animate({'left':-count*oWidth+'px'}, 500);
		oDisc.removeClass('disc_show');
		oDisc.eq(count).addClass('disc_show');
	})
	// end
	// 房型紧缺弹层
	// var oFew=$('.few');
	// var oFewroom=$('#roomfew');
	// oFew.on('click',function()
	// {
        // $('body').css('overflow','hidden');
		// oFewroom.show('200');
	// })
	// 房价明细弹层
	// var oJun=$('.junjia');
	// var oPrice=$('#pricedetail');
	// oJun.on('click',function()
	// {
        // $('body').css('overflow','hidden');
		// jun($(this).attr('aurl'));
		// oPrice.show('200');
	// })
	// 房型明细弹层
	var oRoompc=$('.roompc');
	var oRoomKind=$('#roomkind');
	oRoompc.on('click',function()
	{
        $('body').css('overflow','hidden');
        oRoomKind.show('200');
        roomDetail($(this).attr('room_id'));
		$('#loadmore').attr('begin',5);
	})
	// 二维码弹层
	var oErwei=$('#erwei');
	var oQrcode=$('#qrcode');
	oErwei.on('click',function()
	{
         $('body').css('overflow','hidden');
		oQrcode.show('200');
	})
	// 过度状态
	/*var oSub=$('.submit');
	var oGuodu=$('#guodu');
	oSub.on('click',function()
	{	
		if($('#prevend').val()==1){
			$('#booktips').html('请不要重复提交订单。');
			return false;
		}
		s='{';
		for(var n in usevou){
			s+='"'+n+'":'+usevou[n]+',';
			
		}
		s=s.substring(0,s.length-1);
		s+='}';
		$('#booktips').html('');
		if($("#custname").val() == ''){
			$('#booktips').html('请输入您的姓名');
			return false;
		}
		if (!$('#mobilephone').val().match(/^1\d{10,13}$/g)){
			$('#mobilephone').val('');
			$('#booktips').html('请输入正确的手机号');
			return false;
		}  
		oGuodu.show('200');
		$.post("/index.php/wap/hotel/saveorder",{
			room_id:$('#roomid').val(),
			nums:$('#nums').val(),
			rp_cd:$('#rp_cd').val(),
			startdate:$('#startdate').val(),
			enddate:$('#enddate').val(),
			tel:$('#tel').val(),
			name:$('#name').val(),
			paytype:$('#paytype').val(),
			usevou:s
			},function(data){
				if(data.success==1){
					$('#prevend').val(1);
					window.location.href="/index.php/wap/hotel/orderdetail?oid="+data.oid;
					}
				else if(data.success==2){
					$('#prevend').val(1);
					window.location.href="/index.php/wxpay/order?order_id="+data.orderid;
				}
				else{
					$('#osubtip').html(data.msg);
					
				}
			},'json');
	})*/
	// 抵用券
	var oQuan=$('#chquan');
	var oUsequan=$('#usequan');
	oQuan.on('click',function()
	{
		$('body').css('overflow','hidden');
		oUsequan.show('200');
		get_vouchers();
		
	})

	// 预定房间数
	var yudingshu=$('#yudingshu');
	var orderdays=$('#orderdays');
	var olis=$('#yudinglists').children('li');
	var room_sum=$('#room_sum');
	orderdays.on('click',function()
	{
		 $('body').css('overflow','hidden');
		yudingshu.show('200');
	})
	olis.on('click',function()
	{
		olis.css({
			'background': 'white',
			'color': 'gray'
		});
		$(this).css({
			'background': 'orange',
			'color': 'white'
		});
		room_sum.html($(this).html());
		//房间数赋值
		
		$('#nums').val(parseInt($(this).children('span').html()));
		startdate=$('#startdate').val();
		enddate=$('#enddate').val();
		//dayRooms(startdate,enddate,0);
		
		 $('body').css('overflow','scroll');
		yudingshu.hide('200');
	})

	// 弹层关闭
	var oRemove=$('.big_head');
	var oWraptan=$('.tanwrap');
	oRemove.on('click',function()
	{
         $('body').css('overflow','scroll');
		oWraptan.eq($(this).index('.big_head')).hide('200');
	})
	

	// 跳转到预定
	// var order=$('.order');
	// order.on('click',function()
	// {
		// window.location='orderwrite.html';
	// })

	// var oMyorder=$('.myorder');
	// oMyorder.on('click',function()
	// {
		// window.location='myorder.html';
	// })
	// 返回
	var oBack=$('#back');
	oBack.on('click',function()
	{
		window.location.href = "../main.html";
		//javascript:history.back(-1);
	})
	// 返回
	var oBack2=$('#back2');
	oBack2.on('click',function()
	{
		javascript:history.back(-1);
	})
	// 使用券
	// var oCheck=$('.check');
	// var oCh1=$('.ch1');
	// oCh1.on('click',function()
	// {
		// oCheck.attr('src','images/kong.jpg');
		// alert($(this).index('.ch1'));
		// oCheck.eq($(this).index('.ch1')).attr('src', 'images/gou.jpg');
	// })

	// var oCheck2=$('.check2');
	// var oContent=$('.content');
	// var oCh2=$('.ch2');
	// oCh2.on('click',function()
	// {
		// oCheck2.attr('src','images/kong.jpg');
		// oCheck2.eq($(this).index('.ch2')).attr('src', 'images/gou.jpg');
		// if($(this).index('.ch2')==1)
		// {
			// oContent.css('opacity','1');
		// }
		// else
		// {
			// oContent.css('opacity','0');
		// }
	// })
	
	// var oUseable=$('.useable');;
	// var oMask=$('.mask');
	// oUseable.on('click',function()
	// {
		// if(oMask.eq($(this).index()).css('display')=='none')
		// {
			// oMask.eq($(this).index()).show('100');
		// }
		// else
		// {
			// oMask.eq($(this).index()).hide('100');
		// }
	// })

	// var oMapin=$('#mapin');
	// oMapin.on('click',function()
	// {
		// window.location='map2.html';
	// })


	// 日历
	var cWrap=$('.cwrap');
	cWrap.click(function()
	{
		 $('body').css('overflow','hidden');
		$(this).hide('200');
	})
    $('.choosecal').click(function(event)
	{
		event.stopPropagation(); 
	})

})