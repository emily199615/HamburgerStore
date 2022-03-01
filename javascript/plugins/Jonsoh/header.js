$(document).ready(function () {
  
    // 漢堡選單 (icon展開與關閉切換 + 展開選單)
    $("button.hamburger").on("click", function(){
      $(this).toggleClass("is-active");
      $("div.burger_nav").slideToggle();
    });
  
    // 漢堡選單 (摺疊選單)
    $('.burger_li').click(function () {
      $(this).toggleClass('active');
      $(this).siblings().slideToggle();
      $(this).parent().siblings().find('.burger_li').removeClass('active');
      $(this).parent().siblings().find('.burger_content').slideUp();
    });
  
    // 漢堡選單 (語言切換)
    $("ul.burger_language > li").on("click", function(e){
      e.preventDefault();
      $(this).addClass("-on").siblings().removeClass("-on");
    });
  
  });