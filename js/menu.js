$(document).ready(function(){var a=$("a#touch-menu"),b=$("ul.menu");$(a).on("click",function(a){a.preventDefault(),b.slideToggle()});var c;$(".sub-menu-li").addClass("toggled"),$(".sub-menu-li").on("click",function(a){var b=$(".sub-menu > li").height(),d=$(".sub-menu").children().length;c=b*(d+1),$(".sub-menu-li").hasClass("toggled")?$(".sub-menu-li").animate({height:"+"+c+"px"}).removeClass("toggled"):$(".sub-menu-li").animate({height:"40px"}).addClass("toggled")}),$(".sub-sub-menu-li").on("click",function(a){a.stopPropagation();var b=$(".sub-sub-menu > li").height(),d=$(".sub-sub-menu").children().length,e=b*(d-1)+c,f=0;$(".sub-menu-li").hasClass("toggled")?($(".sub-menu-li").animate({height:"+"+c+"px"}).removeClass("toggled"),f>0&&$(".sub-menu-li").animate({height:"+"+e+"px"}).addClass("toggled"),f++):$(".sub-menu-li").animate({height:"+"+e+"px"}).addClass("toggled")})});