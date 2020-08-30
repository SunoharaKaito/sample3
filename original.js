$(function () {
  var $window = $(window);
  $header = $("main");
  headerOffsetTop = $header.offset().top;
  $window.on("scroll", function () {
    if ($window.scrollTop() > headerOffsetTop) {
      $("nav").addClass("nav-display");
    } else {
      $("nav").removeClass("nav-display");
      $(".nav-wrapper").removeClass("open");
      $("span").removeClass("show");
    }
    if ($window.scrollTop() > 5589 && $window.scrollTop() < 5800) {
      $(".nav-wrapper").addClass("open");
      $(".nav-toggle").find("span").addClass("show");
      $(".nav-toggle").find("span").addClass("nav-toggle-span");
      $(".nav-toggle").addClass("open");
    } else {
      $(".nav-toggle").find("span").removeClass("show");
      $(".nav-wrapper").removeClass("open");
      $(".nav-toggle").find("span").removeClass("nav-toggle-span");
      $(".nav-toggle").removeClass("open");
    }
  });
  $(".nav-toggle-a").on("click", function () {
    var speed = 1400;
    $("html, body").animate({ scrollTop: 5593 }, speed, "swing");
    return false;
    //$(".nav-wrapper").addClass("open");
    //$(".nav-toggle").find("span").addClass("show");
    //$(".nav-toggle").find("span").addClass("nav-toggle-span");
    //$(".nav-toggle").addClass("open");
  });
  $(".nav-wrapper").on("click", function () {
    $(window).scrollTop(5593)
  });
  $("#journal").on("click", function () {
    var speed = 1400;
    $("html, body").animate({ scrollTop: 6750 }, speed, "swing");
  });
  $("#navspan").on("click", function () {
    $(".nav-wrapper").toggleClass("open");
    $(".nav-toggle").find("span").toggleClass("show");
    $(".nav-toggle").find("span").toggleClass("nav-toggle-span");
    $(".nav-toggle").toggleClass("open");
  });
  //$("#navspan").on("click",function(){
  //$(".nav-toggle").find("span").removeClass("show");
  //$(".nav-wrapper").removeClass("open");
  //$(".nav-toggle").find("span").removeClass("nav-toggle-span");
  //$(".nav-toggle").removeClass("open");
  //});
  $(".nav-wrapper")
    .find("li")
    .on("click", function () {
      $(".nav-wrapper").find("a").removeClass("color-news");
      $(this).find("a").addClass("color-news");
      var $th = $(this).index();
      $(".tab").removeClass("active");
      $(".tab").eq($th).addClass("active");
    });
  $(".memoris-box")
    .find("img")
    .on("click", function () {
      $(".modal").addClass("open");
      $(".modal .modal-window").find("img").attr("src", $(this).attr("src"));
    });
  $(".main-img4").on("click", function () {
    $(".span-no").text("01");
  });
  $(".main-img5").on("click", function () {
    $(".span-no").text("02");
  });
  $(".main-img6").on("click", function () {
    $(".span-no").text("03");
  });
  $(".span-close")
    .find("span")
    .on("click", function () {
      $(".modal").removeClass("open");
    });
  $('a[href^="#"]').click(function () {
    var speed = 1400;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top;
    $("html, body").animate({ scrollTop: position }, speed, "swing");
    return false;
  });
});
