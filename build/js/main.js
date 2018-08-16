(function() {
  const context = [
    {
      id: 0,
      url: '../img/photo-gallery/DSC01072.jpg'
    },
    {
      id: 1,
      url: '../img/photo-gallery/DSC01074.jpg'
    },
    {
      id: 2,
      url: '../img/photo-gallery/DSC01444.jpg'
    },
    {
      id: 3,
      url: '../img/photo-gallery/DSC07043.jpg'
    },
    {
      id: 4,
      url: '../img/photo-gallery/DSC07827.jpg'
    },
    {
      id: 5,
      url: '../img/photo-gallery/DSCN0253.jpg'
    },
    {
      id: 6,
      url: '../img/photo-gallery/DSCN1433.jpg'
    },
    {
      id: 7,
      url: '../img/photo-gallery/DSCN1549.jpg'
    },
    {
      id: 8,
      url: '../img/photo-gallery/DSCN2189.jpg'
    },
    {
      id: 9,
      url: '../img/photo-gallery/DSCN2437.jpg'
    },
    {
      id: 10,
      url: '../img/photo-gallery/DSCN2509.jpg'
    },
    {
      id: 11,
      url: '../img/photo-gallery/DSCN2601.jpg'
    },
    {
      id: 13,
      url: '../img/photo-gallery/IMAG2536.jpg'
    },
    {
      id: 14,
      url: '../img/photo-gallery/sP1010169.jpg'
    },
    {
      id: 15,
      url: '../img/photo-gallery/002.jpg'
    },
    {
      id: 16,
      url: '../img/photo-gallery/09.2015 044.jpg'
    },
    {
      id: 17,
      url: '../img/photo-gallery/09.2015 057.jpg'
    },
    {
      id: 18,
      url: '../img/photo-gallery/09.2015 076.jpg'
    },
    {
      id: 19,
      url: '../img/photo-gallery/09.2015 117.jpg'
    },
    {
      id: 20,
      url: '../img/photo-gallery/DSC00367.jpg'
    },
    {
      id: 21,
      url: '../img/photo-gallery/DSC00435.jpg'
    },
    {
      id: 22,
      url: '../img/photo-gallery/DSC03536.jpg'
    },
    {
      id: 22,
      url: '../img/photo-gallery/DSC03550.jpg'
    },
    {
      id: 22,
      url: '../img/photo-gallery/DSC05629.jpg'
    },
    {
      id: 22,
      url: '../img/photo-gallery/moi foto 034.jpg'
    },
    {
      id: 22,
      url: '../img/photo-gallery/moi foto 049.jpg'
    }
  ];

  const sourceFor = document.getElementById("gallery-slider-for-template").innerHTML;
  const templateFor = Handlebars.compile(sourceFor);

  const sourceNav = document.getElementById("gallery-slider-nav-template").innerHTML;
  const templateNav = Handlebars.compile(sourceNav);

  const sliderFor = document.getElementById("sliderFor");
  const sliderNav = document.getElementById("sliderNav");

  context.forEach((photo) => {
    const htmlFor = templateFor(photo);
    const htmlNav = templateNav(photo);
    $(sliderFor).append(htmlFor);
    $(sliderNav).append(htmlNav);
  });

  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    asNavFor: '.slider-nav'
  });

  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    asNavFor: '.slider-for',
    focusOnSelect: true,
    dots: false,
    infinite: true,
    speed: 300,
    variableWidth: true,
    centerMode: true,
  });
})();