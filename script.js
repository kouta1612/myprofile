$(document).ready(function () {
  $('#top, #logo').click(function () {
    $("html,body").animate({ scrollTop: 0 });
  });
  $('#favorite').click(function () {
    $("html,body").animate({ scrollTop: $('#targetf').offset().top });
  });
  $('#skill').click(function () {
    $("html,body").animate({ scrollTop: $('#targets').offset().top });
  })
  $('#follow').click(function () {
    $("html,body").animate({ scrollTop: $('#targetw').offset().top });
  })
})
