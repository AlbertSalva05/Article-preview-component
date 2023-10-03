$(function(){

  // declare variables
  var responsive_viewport = $(window).width();


  // trigger function on shareBtn
  $(".shareBtn").click(function(){
    // toggle class on shareBtn on click
    $(this).toggleClass("share_active");
    // toggle class on shareContent
    $(".shareContent").toggleClass("show");

    // check if viewport is SP
    if (responsive_viewport < 768) {
      $(".articleContent").toggleClass("share_content_active");
    }
  });
});
