$('.apple').on('click', function () {
  $('.fruit').attr('src', './img/apple.jpg');
});
$('.bananas').on('click', function () {
  $('.fruit').attr('src', './img/bananas.jpg');
});
$('.grapes').on('click', function () {
  $('.fruit').attr('src', './img/grapes.jpg');
});
$('.peaches').on('click', function () {
  $('.fruit').attr('src', './img/peaches.jpg');
});

// TODO: 조건을 만족하는 jquery 코드 작성
// .bg-red 클래스 있다면, .bg-red 제거, .bg-orange 추가
$('.box').on('click', function () {
  console.log($('div.box').hasClass('.bg-red'));
  if ($('.box').hasClass('.bg-red')) {
    $('.box').removeClass('.bg-red');
    $('.box').addClass('.bg-orange');
  }
});
// .bg-orange 클래스 있다면, .bg-orange 제거, .bg-yellow 추가
// .bg-yellow 클래스 있다면, .bg-yellow 제거, .bg-red 추가
