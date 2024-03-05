$(document).ready(function(){

  var num = 0;
  $(".btn_next").click(function(){
    num++;
    if(num > 4){
      num = 0;
    }
    $(".slider").css("left",-num*100+"%");
    $(".bullet > li").removeClass("on");
    $(".bullet > li").eq(num).addClass("on");
    // $(".current_process").css("width",(num+1)*20+"%");
  });
  $(".btn_prev").click(function(){
    num--;
    if(num<0){
      num=4;
    }
    $(".slider").css("left",-num*100+"%");
    $(".bullet > li").removeClass("on");
    $(".bullet > li").eq(num).addClass("on");
  });
  $(".bullet > li").click(function(){
    num= $(".bullet > li").index(this);
    $(".bullet > li").removeClass("on");
    $(".bullet > li").eq(num).addClass("on");
    $(".slider").css("left",-num*100+"%");
  });
  $(".event_btn > li").click(function(){
    num = $(".event_btn >li").index(this);
    $(".event_btn >li").removeClass("on");
    $(".event_btn >li").eq(num).addClass("on");
    $(".event_slider").css("left",-num*100+"%");
  });
  var timer = setInterval(function(){
    $(".bullet > li").removeClass("on");
    num = num+1;
    if(num>4){
      num=0;
    }
    $(".bullet > li").eq(num).addClass("on");
    $(".slider").css("left",-num*100+"%");
  },5000);

  $(window).scroll(function(){
    var con3_pos = $(".con3").offset().top;
    var current_scroll = $(window).scrollTop();
    console.log(current_scroll);
    if(current_scroll > 1700){
      $(".inner_con3 > h2").css("transform","translateX(0px)").css("opacity","1");
      $(".inner_con3 > p").css("transform","translateX(0px)").css("opacity","1");
    }

  });

 $(".slide_bg").mouseover(function(){
    $(".slide_insta").addClass("off");
 });
 $(".slide_bg").mouseleave(function(){
    $(".slide_insta").removeClass("off");
 });

});
