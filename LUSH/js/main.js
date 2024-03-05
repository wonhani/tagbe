$(document).ready(function(){
  var num = 0;
  $(".bullet > li").click(function(){
    num = $(".bullet > li").index(this);
    $(".bullet > li").removeClass("on");
    $(".bullet > li").eq(num).addClass("on");
    $(".slider").css("left",-num*100+"%");
  });
  $(".slide_bnt > li").click(function(){
    num = $(".slide_bnt > li").index(this);
    $(".slide_bnt > li").removeClass("on");
    $(".slide_bnt > li").eq(num).addClass("on");
    $(".new_slider").css("left",-num*100+"%");
  });
  var timer = setInterval(function(){
    $(".bullet > li").removeClass("on");
    num = num+1;
    if(num>4){
      num=0;
    }
    $(".bullet > li").eq(num).addClass("on");
    $(".slider").css("left",-num*100+"%");
  },10000);
  $(".submenu > li.search").click(function(){
    $(".search_cover").css("display","block");
  });
  $(".close").click(function(){
    $(".search_cover").css("display","none");
  });
});
