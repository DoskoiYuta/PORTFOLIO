$( function(){

//画面がスクロールする
  $("#PROFILE").click( function(){
    $('html').animate({
      scrollTop: $(".profile").offset().top-(50-1)
    }, 800);
    return false;
  });

  $("#SKILL").click( function(){
    $('html').animate({
    scrollTop: $(".skill").offset().top-(50-1)
  }, 800);
  return false;
  });

  $(".profile-text>a").click( function(){
    $('html').animate({
    scrollTop: $(".skill").offset().top-(50-1)
  }, 800);
  return false;
  });

  $("#PORTFOLIO").click( function(){
    $('html').animate({
    scrollTop: $(".portfolio").offset().top-(50-1)
  }, 800);
  return false;
  });



});
