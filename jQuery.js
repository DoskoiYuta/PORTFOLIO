$( function(){

//画面がスクロールする
  $(document).on("click","#PROFILE", function(){
    $('html').animate({
      scrollTop: $(".profile").offset().top-(50-1)
    }, 800);
    return false;
  });

  $(document).on("click","#SKILL", function(){
    $('html').animate({
    scrollTop: $(".skill").offset().top-(50-1)
  }, 800);
  return false;
  });

  $(document).on("click",".profile-text>a", function(){
    $('html').animate({
    scrollTop: $(".skill").offset().top-(50-1)
  }, 800);
  return false;
  });

  $(document).on("click","#PORTFOLIO", function(){
    $('html').animate({
    scrollTop: $(".portfolio").offset().top-(50-1)
  }, 800);
  return false;
  });



});
