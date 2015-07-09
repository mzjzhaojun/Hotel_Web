(function($) {
$.fn.cusCalendar = function(options) {
    //插件参数的可控制性，外界可以修改默认参数
    var defualts = {
	    beginTime        : new Date(),
	    endTime          : new Date().getDate() + 1,
	    maxDays          : 90,
	    maxDiffDays      : 15,
	    selectedCallBack : function(){},
	    beginTimeElement : 'beginTime',
	    endTimeElement   : 'endTime',
	    bTimeValElement  : 'btime',
	    eTimeValElement  : 'etime'
	    };
	var currentOpera = 'beginTime';
    var opts = $.extend({}, defualts, options);
    var bTimeValElement = $('#' + opts.bTimeValElement);
    var eTimeValElement = $('#' + opts.eTimeValElement);
    opts.beginTime = new Date(bTimeValElement.val());
    opts.endTime = new Date(eTimeValElement.val());
    var beginTime;
    var resTime = new Date();
    if(currentOpera == opts.beginTimeElement){
        beginTime = opts.beginTime;
    }
    else{
    	beginTime = opts.endTime;
    }
    resTime.setTime(beginTime.getTime());
	beginTime.setDate(1);
    init = function(){
    	$('#cwrap').remove();
	    var s                = "<div id=\"cwrap\" class=\"cwrap\" style=\"display: block;\"><div class=\"choosecal\"><div class=\"calender\"><div class=\"selectmouth\"><p style=\"text-align:right\" id=\"p_lastmonth\">&lt;</p><p id=\"p_selected_date\">" + beginTime.getFullYear() + '年' + (beginTime.getMonth() + 1) + '月' + "</p><p id=\"p_nextmonth\">&gt;</p></div><table class=\"data_table\" cellspacing=\"0px\"><thead><tr><td>日</td><td>一</td><td>二</td><td>三</td><td>四</td><td>五</td><td>六</td></tr></thead><tfoot><tr><td colspan=\"3\" rel=\"prevMonth\" style=\"padding-top:5%;\">&nbsp;&lt;&nbsp;上个月</td><td>&nbsp;</td><td colspan=\"3\" rel=\"nextMonth\" style=\"text-align:right;padding-top:5%;\">下个月&nbsp;&gt;&nbsp;</td></tr></tfoot><tbody>";
		var currentTime_week = new Date(beginTime.getFullYear() , (beginTime.getMonth() ) , 1).getDay();
		var daysCount        = new Date(beginTime.getFullYear() , (beginTime.getMonth() +1) , 0).getDate();
		s += "<tr>";
		for (var i = 0; i < currentTime_week; i++) {
			s += "<td class=\"orderdate\">&nbsp;</td>";
		};
		var currentTime     = new Date();
		var maxCanSelectDay = new Date(currentTime.getFullYear(),currentTime.getMonth(),currentTime.getDate() + opts.maxDays);
		var curr_date       = currentTime.getDate();
		for (var i = 1; i <= daysCount; i++) {
			beginTime.setDate(i);
			if(currentTime_week == 7) currentTime_week = 1;
			else currentTime_week += 1;
			s += "<td class=\"";
			if(parseInt((currentTime - beginTime) / 86400000) > 0 || maxCanSelectDay < beginTime) s += "orderdate";
			else  s += "usedate";
			s += "\">" + i + "</td>";
			if(currentTime_week % 7 == 0)s += "</tr><tr>";
		};
		s += "</tr></table></div></div></div>";
		$('body').append(s);
		$('td.usedate').click(function(){
			beginTime.setDate(this.innerHTML);
			if(currentOpera == opts.beginTimeElement)
		        bTimeValElement.val(beginTime.getFullYear() + '/' + (beginTime.getMonth() + 1) + '/' + beginTime.getDate());
		    else
		    	eTimeValElement.val(beginTime.getFullYear() + '/' + (beginTime.getMonth() + 1) + '/' + beginTime.getDate());
		    var bTime = new Date(bTimeValElement.val());
		    var eTime = new Date(eTimeValElement.val());
		    if(parseInt((eTime - bTime) / 86400000) <= 0){
		    	eTime.setTime(bTime.getTime());
		    	eTime.setDate(eTime.getDate() + 1);
		    	eTimeValElement.val(eTime.getFullYear() + '/' + (eTime.getMonth() + 1) + '/' + eTime.getDate());
		    }
		    opts.selectedCallBack({inDate:bTime,outDate:eTime,dateSpan:parseInt((eTime - bTime) / 86400000),afterDays:parseInt((bTime - currentTime) / 86400000) + 1});
			$('#cwrap').hide();
			$('#cwrap').remove();
		});
		$('#p_lastmonth').click(function(){
			beginTime.setDate(1);
			beginTime.setMonth(beginTime.getMonth() - 1);
			init();
		});
		$('#p_nextmonth').click(function(){
			beginTime.setDate(1);
			beginTime.setMonth(beginTime.getMonth() + 1);
			init();
		});
		$('td[rel=prevMonth]').click(function(){
			beginTime.setDate(1);
			beginTime.setMonth(beginTime.getMonth() - 1);
			init();
		});
		$('td[rel=nextMonth]').click(function(){
			beginTime.setDate(1);
			beginTime.setMonth(beginTime.getMonth() + 1);
			init();
		});
    }
    $('#' + opts.beginTimeElement).click(function(){
    	currentOpera = this.id;
    	beginTime = new Date(bTimeValElement.val());
    	init();
	});
    $('#' + opts.endTimeElement).click(function(){
    	currentOpera = this.id;
    	beginTime = new Date(eTimeValElement.val());
    	init();
	});
};
})(jQuery);