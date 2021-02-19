window.onload = function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 15,
    nav: true,
    dots: false,
    navText: [
      '<i class="fas fa-angle-left"></i>',
      '<i class="fas fa-angle-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      576: {
        items: 2,
      },
      768: {
        items: 3,
      },
      992: {
        items: 4,
      },
      1200: {
        items: 5,
      },
    },
  })
}
