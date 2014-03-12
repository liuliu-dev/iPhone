$(function(){
	clock();
	compass();
	safari();
	settings();
	passbook();
	slide();
	
})
function clock(){
	for(var i=1;i<=12;i++){
		$("#clock ul li:nth-child("+i+")").css({"-webkit-transform":"rotate("+(i-1)*30+"deg)","-o-transform":"rotate("+(i-1)*30+"deg)","transform":"rotate("+(i-1)*30+"deg)",
		"-ms-transform":"rotate("+(i-1)*30+"deg)","-moz-transform":"rotate("+(i-1)*30+"deg)"});
		$("#clock ul li:nth-child("+i+") span").css({"-webkit-transform":"scale(0.6) rotate("+(1-i)*30+"deg)","-moz-transform":"scale(0.6) rotate("+(1-i)*30+"deg)",
		"-o-transform":"scale(0.6) rotate("+(1-i)*30+"deg)","-ms-transform":"scale(0.6) rotate("+(1-i)*30+"deg)","transform":"scale(0.6) rotate("+(1-i)*30+"deg)"});
	}
	var d=new Date();
	var weekdays=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
	var month=["January","February","March","April","May","June","July","August","September","October","November",
	"December"];
	var date=d.getDate(),day=weekdays[d.getDay()],mon=month[d.getMonth()];
	$("#weekday").html(day);
	$("#date").html(date);
	h=d.getHours(),m=d.getMinutes();
	timehtml=h+":"+m+(h>12?"AM":"PM");
	datehtml=day+","+mon+" "+date;
	$("#headline-time").html(timehtml);
	$("#phone-time").html(h+":"+m);
	$("#phone-date").html(datehtml);
	setInterval("update()",1000);
}
function update(){
	var d=new Date();
	var h=d.getHours(),m=d.getMinutes(),s=d.getSeconds();
	var sRadius=s*6,mRadius=m*6,hRadius=30*h+30/60*m;
	timehtml=h+":"+m+(h>12?"AM":"PM");
	$("#headline-time").html(timehtml);
	$("#phone-time").html(h+":"+m);
	$("#hour").css({"-webkit-transform":"rotate("+hRadius+"deg)","-moz-transform":"rotate("+hRadius+"deg)",
	"-ms-transform":"rotate("+hRadius+"deg)","-o-transform":"rotate("+hRadius+"deg)","transform":"rotate("+hRadius+"deg)"});
	$("#minute").css({"-webkit-transform":"rotate("+mRadius+"deg)","-moz-transform":"rotate("+mRadius+"deg)",
	"-ms-transform":"rotate("+mRadius+"deg)","-o-transform":"rotate("+mRadius+"deg)","transform":"rotate("+mRadius+"deg)"});
	$("#second").css({"-webkit-transform":"rotate("+sRadius+"deg)","-moz-transform":"rotate("+sRadius+"deg)",
	"-ms-transform":"rotate("+sRadius+"deg)","-o-transform":"rotate("+sRadius+"deg)","transform":"rotate("+sRadius+"deg)"});
}
function compass(){
	for(var i=0;i<24;i++){
		$("#compass ul").append("<li></li>");
		$("#compass ul li:nth-child("+(i+1)+")").css({"-webkit-transform":"rotate("+i*7.5+"deg)","-moz-transform":"rotate("+i*7.5+"deg)",
		"-ms-transform":"rotate("+i*7.5+"deg)","-o-transform":"rotate("+i*7.5+"deg)","transform":"rotate("+i*7.5+"deg)",});
	}
	for(var i=3;i<48;i++){
		$("#compass ul li:nth-child("+(i+(i-3)*4)+")").css("background","linear-gradient(#EFEFEF,#EFEFEF 3px,transparent 4px,transparent 46px,#EFEFEF 47px,#EFEFEF 100%)");
	}
}
function safari(){
	for(var i=0;i<36;i++){
		$("#safari ul").append("<li></li><li></li>");
		var a=(i*2)+1,b=i*2;
		$("#safari ul li:nth-child("+a+")").css({"-webkit-transform":"rotate("+a*10+"deg)","-moz-transform":"rotate("+a*10+"deg)",
		"-ms-transform":"rotate("+a*10+"deg)","-o-transform":"rotate("+a*10+"deg)","transform":"rotate("+a*10+"deg)"});
		$("#safari ul li:nth-child("+b+")").css({"-webkit-transform":"rotate("+b*10+"deg)","-moz-transform":"rotate("+b*10+"deg)",
			"-o-transform":"rotate("+b*10+"deg)","-ms-transform":"rotate("+b*10+"deg)","transform":"rotate("+b*10+"deg)","background": "linear-gradient(#FFF,#FFF 2px,transparent 3px,transparent 58px,#FFF 59px,#FFF 100%)"});
	}
}
function settings () {
	for (var i = 0; i <= 24; i++) {
		var a=i*7.5;
		$("#settings .round ul").append("<li></li>");
		$("#settings .round li:nth-child("+(i+1)+")").css({"-webkit-transform":"rotate("+a+"deg)","-moz-transform":"rotate("+a+"deg)",
		"transform":"rotate("+a+"deg)","-ms-transform":"rotate("+a+"deg)","-o-transform":"rotate("+a+"deg)"});
	}
}
function passbook(){
	for (var i = 1; i <= 22; i++) {
		left=-1+(i-1)*3;
		$("#passbook li:nth-child("+i+")").css("left",left+"px");
	}
}

function slide(){
	$("#slider-handler").draggable({
    axis: 'x',
    containment: 'parent',
    drag: function(event, ui) {
        $("#slider h2").css('opacity', 1 - (ui.position.left / 300));
        if (ui.position.left >= 200) {
            unlock();}
        },
    stop: function(event, ui) {
        if (ui.position.left < 400) {
            var $this = $(this);
            $this.animate({
                left: 60
            }).siblings('#slider h2').animate({
                'opacity': 1
            })
        }
    }
	});
}
function unlock(){
	$("#phone-footer").fadeOut("normal",function(){
		$("#phone-header").slideUp("fast",function(){
			$("#icons-container").fadeIn();
			$("#dock").fadeIn();
		});
	});
}
