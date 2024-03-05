$(document).ready(function(){

  //로딩
  $(".cover").delay(2000).fadeOut();
  $(".loaderpage").delay(2000).fadeOut();


  // 탭슬라이드
  $(".designzip > dl > dt").click(function(){
      $(".designzip > dl > dt").removeClass("on");
      $(this).addClass("on");
  });

  function popSlider(num){
    $(".popslide").css("left",-30*num+"%");
    $(".popslide > li").removeClass("on");
    $(".popslide > li").eq(num).addClass("on");
    $(".innerPS > li").removeClass("on");
    $(".innerPS > li").eq(innerNum).addClass("on");
  }

  var innerNum = 0;
  var num = 0;
  $(".innernext").click(function(){
    innerNum++;
    if(innerNum > 7){
      innerNum = 7;
    }
    popSlider(innerNum);
    return false;
  });
  $(".innerprev").click(function(){
    innerNum--;
    if(innerNum < 0){
      innerNum = 0;
    }
    popSlider(innerNum);
    return false;
  });
  var num = 0;
  var bannum = 0;
  $(".btn_next1").click(function(){
    num++;
    if(num > 7){
      num = 7;
    }
    $(".popslide").css("left",-30*num+"%");
    $(".popslide > li").removeClass("on");
    $(".popslide > li").eq(num).addClass("on");
    // $(".innerPS > li").removeClass("on");
    // $(".innerPS > li").eq(num).addClass("on");
    return false;
  });
  $(".btn_prev1").click(function(){
    num--;
    if(num < 0){
      num = 0;
    }
    $(".popslide").css("left",-30*num+"%");
    $(".popslide > li").removeClass("on");
    $(".popslide > li").eq(num).addClass("on");
    return false;
  });
  $(".btn_next2").click(function(){
    bannum++;
    if(bannum > 7){
      bannum = 0;
    }
    $(".banslider").css("left", -100*bannum+"%");
    $(".banslider > li").addClass("on");
    return false;
  });
  $(".btn_prev2").click(function(){
    bannum--;
    if(bannum < 0){
      bannum = 7;
    }
    $(".banslider").css("left", -100*bannum+"%");
    $(".banslider > li").addClass("on");
    return false;
  });

  // 이미지 클릭스 상세내용 나오기
  function transSlideTxt(num){
    var aTxt = $(".slider_list > li").eq(num).find(".aTitle").text();
    var aHref = $(".slider_list > li").eq(num).find("a").attr("href");
    var h3Txt = $(".slider_list > li").eq(num).find("h3").text();
    var pTxt = $(".slider_list > li").eq(num).find("p").text();
    var blink = $(".slider_list > li").eq(num).find(".beforeLink").attr("href");
    var relink = $(".slider_list > li").eq(num).find(".afterLink").attr("href");

    $("a.titleLink").text(aTxt);
    $("a.titleLink").attr("href",aHref);
    $(".sliderTxt .title h3").text(h3Txt);
    $(".sliderTxt .title p").text(pTxt);
    $(".basic").attr("href",blink);
    $(".relink").attr("href",relink);
  }
  // 웹슬라이드
  var num=0;
  $(".web_next").click(function(){
    num++;
    if(num > 1){
      num = 1;
    }
    $(".slider_list").css("transform","rotate(15deg)skewX(-5deg)translateY("+(-50*num)+"%)")
    $(".slider_list > li").removeClass("on");
    $(".slider_list > li").eq(num).addClass("on");

    // 텍스트바뀌는 부분
    transSlideTxt(num);
    return false;
  });


  // 이전버튼

  $(".web_prev").click(function(){
    num--;
    if(num < 0){
      num = 0;
    }
    $(".slider_list").css("transform","rotate(15deg)skewX(-5deg)translateY("+(-50*num)+"%)")
    $(".slider_list > li").removeClass("on");
    $(".slider_list > li").eq(num).addClass("on");

    // 텍스트바뀌는 부분
    transSlideTxt(num);
    return false;
  });

  // 마우스효과
  $(document).mousemove(function(e) {
    var mousX = e.pageX;
    var mousY = e.pageY;

    $(".slider_list li").eq(0).css("left",-mousX/25);
    $(".slider_list li").eq(1).css("left",+mousX/25);
  });


// 스크롤효과
  var currentTop;
  $(window).scroll(function(){
    currentTop = $(window).scrollTop();
    console.log(currentTop);
    if(currentTop > 700){
      $("header").addClass("show");
      $(".gnb > li:first-of-type").addClass("on");
      $(".intro").addClass("on");
    }else{
      $("header").removeClass("show");
      $(".gnb > li:first-of-type").removeClass("on");
      $(".intro").removeClass("on");
    }
    if(currentTop > 1750){
      $(".inner_ablilty").addClass("on");
      $(".skill_list > dd").addClass("on");
    }else{
      $(".inner_ablilty").removeClass("on");
      $(".skill_list > dd").removeClass("on");
    }
    if(currentTop > 2500){
      $("header").addClass("color");
      $(".about_tagbe").addClass("on");
      $(".scroll").css("display","none");
    }else{
      $("header").removeClass("color");
      $(".about_tagbe").removeClass("on");
      $(".scroll").css("display","block");
    }
    if(currentTop > 3500){
      $(".designzip").addClass("on");
      $(".gnb > li:first-of-type").removeClass("on");
      $(".gnb > li:nth-of-type(2)").addClass("on");
    }else{
      $(".designzip").removeClass("on");
      $(".gnb > li:nth-of-type(2)").removeClass("on");
    }
    if(currentTop > 4468){
      $(".webd").addClass("on");
      $(".gnb > li:first-of-type").removeClass("on");
      $(".gnb > li:nth-of-type(2)").removeClass("on");
      $(".gnb > li:nth-of-type(3)").addClass("on");
    }else{
      $(".webd").removeClass("on");
      $(".gnb > li:nth-of-type(3)").removeClass("on");
    }
    if(currentTop > 5420){
      $(".bookef").addClass("on");
    }else{
      $(".bookef").removeClass("on");
    }
    if(currentTop > 5424){
      $("header").addClass("color2");
      $(".gnb > li:first-of-type").removeClass("on");
      $(".gnb > li:nth-of-type(2)").removeClass("on");
      $(".gnb > li:nth-of-type(3)").removeClass("on");
      $(".gnb > li:nth-of-type(4)").addClass("on");
      $(".appd").addClass("on");
    }else{
      $("header").removeClass("color2");
      $(".gnb > li:nth-of-type(4)").removeClass("on");
      $(".appd").removeClass("on");
    }
    // 페이지 효과
    if (currentTop > 7652) {
      $(".bookef2").addClass("on");
    }else{
      $(".bookef2").removeClass("on");
    }

    // 웹 서브페이지
    if(currentTop > 0){
      $(".inner_content > h2").addClass("on");
      $(".inner_content > h3").addClass("on");
    }else{
      $(".inner_content > h2").removeClass("on");
      $(".inner_content > h3").removeClass("on");
    }
    if(currentTop > 900){
      $("header.mustshow > h1").addClass("color");
    }else{
      $("header.mustshow > h1").removeClass("color");
    }
    // 웹 서브페이지 스크롤
    if(currentTop > 2900){
      $(".scroll2").css("opacity","0");
    }else{
      $(".scroll2").css("opacity","1");
    }
    // 웹 서브페이지 하단
    if(currentTop > 2388){
      $(".textbox1").addClass("on");
      $(".textbox4").addClass("on");
    }
    if(currentTop > 2852){
      $(".textbox2").addClass("on");
      $(".textbox3").addClass("on");
      $(".textbox5").addClass("on");
      $(".textbox6").addClass("on");
    }
    // 앱 서브페이지
    var subappdpos = $(".subappd").offset().top;
    console.log("서브앱페이지 위치 : "+subappdpos);

    if(currentTop > subappdpos-200){
      $(".subappd").addClass("on");
    }else{
      $(".subappd").removeClass("on");
    }


    //contact 페이지
    var contact = $(".contact").offset().top;
    if(currentTop > contact-200){
      $("header").removeClass("color2");
      $("header").addClass("color");
      $(".gnb > li:first-of-type").removeClass("on");
      $(".gnb > li:nth-of-type(2)").removeClass("on");
      $(".gnb > li:nth-of-type(3)").removeClass("on");
      $(".gnb > li:nth-of-type(4)").removeClass("on");
      $(".gnb > li:nth-of-type(5)").addClass("on");
      $(".contact").addClass("on");
    }else{
      $(".gnb > li:nth-of-type(5)").removeClass("on");
      $(".contact").removeClass("on");
    }
    // 서브페이지

  });

  $(".about_tagbe").mousemove(function(e){
    var mouseX = e.pageX;
    var mouseY = e.pageY;
    $(".left_circ").css({left:333-mouseX/50});
    $(".right_circ").css({right:220-mouseX/50});
  });

  //팝업창 열기 ( 앱 )
  function popup(){
    var url = "./memory_card/index.html";
    var name = "popup";
    var option = "width=414,height=736,resizale=no,scrollbars=no,left=50px,top=50px";
    window.open(url,name,option);
  }
  $(".appmore").click(function(){
    popup();
  });

  // function twitterSns(){
  //   var twurl = "https://twitter.com/normal_tagBE";
  //   var twname = "popup";
  //   var twoption = "width=414,height=736,left=50px,top=50px";
  //   window.open(twurl,twname,twoption);
  // }
  // $(".twiterLink").click(function(){
  //   twitterSns();
  // });

//////////////////////////////////////////////////////////////////////////////

  $(".popslide > li").click(function(){
    $(".popslide > li").removeClass("on");
    $(this).addClass("on");
    $(".popupSection").addClass("on");
    $(".popslide > li").clone().appendTo(".innerPS");
  });

  $(".btnClosePS").click(function(){
    $(".popupSection").removeClass("on");
    $(".innerPS *").remove();
  });


});
