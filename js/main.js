// slider

$(document).ready(function () {
    $(".slider").slick({
      speed: 1000,
      easing: "easy",
    });
  });






  $(document).ready(function () {
    $(".second__slider").slick({
      speed: 1000,
      easing: "easy",
      slidesToShow: 3,
      centerMode: true,
      centerPadding: '3px',
    });
  });


// ID SCROLL

  function slowScroll(id) {
    var offset = 0;
    $("html, body").animate(
      {
        scrollTop: $(id).offset().top - offset,
      },
      300
    );
    return false;
  }