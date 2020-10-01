$(function(){
  var swiper = new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    // effect: "cube",
    // speed: 2000,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
  });
});

$(function(){
  new Circlebar({
    element: ".circle-html",
    maxValue: 40,
    type: "progress",
  }),
  new Circlebar({
    element: ".circle-css",
    maxValue: 30,
    type: "progress"
  }),
  new Circlebar({
    element: ".circle-js",
    maxValue: 50,
    type: "progress"
  }),
  new Circlebar({
    element: ".circle-ruby",
    maxValue: 40,
    type: "progress"
  }),
  new Circlebar({
    element: ".circle-java",
    maxValue: 50,
    type: "progress"
  });
});

// Scrollify
$(function() {
    $.scrollify({
      section: '.section',
      standardScrollElements: ".scroll",
      easing: 'swing',
      scrollSpeed: 1000,
      scrollbars: true, 
      setWrapperSize: true
    });
});


//モーダルウィンドウの表示・非表示
$(function(){
  $('.comment').on('click',function(){
      $('.modal').fadeIn();
      return false;
  });
  $('.modal-bg').on('click',function(){
      $('.modal').fadeOut();
      return false;
  });
});

//モーダルウィンドウの実装
$('.modal-muscle').modaal({});
$('.modal-reading-book').modaal({});
$('.modal-watching-movie').modaal({});
$('.modal-book-minimalist').modaal({});
$('.modal-book-philosophy').modaal({});
$('.modal-book-business').modaal({});
$('.modal-movie-super').modaal({});
$('.modal-movie-strongest').modaal({});
$('.modal-movie-sheep').modaal({});
