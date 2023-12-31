// val() - value
function getValue() {
  //js
  //   const inputVal = document.querySelector('input').value;
  //   alert(inputVal);

  // jquery
  const value = $('input').val();
  alert(value);
}

function setValue() {
  //js
  //   document.querySelector('input').value = '하이하이~';

  // jquery
  $('input').val('안뇽안뇽~');
}

// css()
function changeCssJS() {
  const span = document.querySelector('span');
  span.style = 'font-size: 20px; color: red';
}
function changeCssJquery() {
  // case1
  //   $('span').css('font-size', '40px');
  //   $('span').css('color', 'blue');

  // case2. css 여러 속성 한번에 적용
  $('span').css({
    fontSize: '40px', // 모든 span에 대해 폰트 크기 변성
    color: 'blue', // 모든 span에 대해 폰트 색상 변경
  });
}
function getCssJquery() {
  console.log(document.querySelector('span').style.color); //js
  //   console.log($('span').css('color'));
}

// attr()
function changeAttrJS() {
  // 퀴즈: a 태그를 선택하고, href 속성 값을 naver 주소로 변경
  const naver = document.querySelector('a');
  naver.textContent = 'naver';
  naver.href = 'https://www.naver.com/';
}
function changeAttrJquery() {
  $('a').attr('href', 'https://www.daum.net');
}

// text()
function changeTextJS() {
  // 퀴즈: p-text 클래스를 갖는 요소 선택하고, 요소의 텍스트를 임의의 값으로 변경
  const pText = document.querySelector('.p-text');
  //   pText.textContent = 'sfdfdf';
  pText.innerText = 'sffs';
  //   pText.innerHTML = 'fsfsdf'; 얘만 태그를 인식하고 나머지는 문자 그래도 바뀜
}
function changeTextJquery() {
  $('.p-text').text('jquery로 텍스트 변경~');
}

// html()
function changeHtmlJS() {
  // 퀴즈: p-html 클래스 갖는 요소 선택하고, <h3>javascript</h3>로 변경
  const pHtml = document.querySelector('.p-html');
  pHtml.innerHTML = '<h3>javascript</h3>';
}
function changeHtmlJquery() {
  $('.p-html').html('<h3>jquery</h3>');
}

// 요소 추가하기
// append()
function appendJS() {
  // 1. colors 클래스 갖는 요소 선택하고
  // 2. li 태그 요소를 생성한 후
  // 3. li 태그의 텍스트로 '마지막 자식으로 추가된 js' 추가
  // 4. colors 클래스를 갖는 요소에 "맨 마지막 자식"으로 li 요소 추가
  // 힌트: https://developer.mozilla.org/en-US/docs/Web/API/Element/append
  // 방법1:
  const colors = document.querySelector('.colors');
  const nLi = document.createElement('li');
  nLi.innerText = '마지막 자식으로 추가된 js';
  colors.append(nLi);
  // 방법2:
  //   document.querySelector('.colors').innerHTML +=
  //     '<li>마지막 자식으로 추가된 js</li>';
}

function appendJquery() {
  $('.colors').append('<li>마지막 자식으로 추가된 jquery</li>');
}

// prepend()
function prependJS() {
  // 1. color 클래스 갖는 요소 선택하고
  // 2. li 태그 요소를 생성한 후
  // 3. li 태그의 텍스트로 '첫 자식으로 추가된 js' 추가
  // 4. color 클래스를 갖는 요소에 "가장 첫 자식"으로 li 요소 추가
  // 힌트: https://developer.mozilla.org/en-US/docs/Web/API/Element/prepend
  const colors = document.querySelector('.colors');
  const nLi = document.createElement('li');
  nLi.innerText = '첫 자식으로 추가된 js';
  colors.prepend(nLi);
}

function prependJquery() {
  $('.colors').prepend('<li>첫 자식으로 추가된 jquery</li>');
}

// before()
function beforeJS() {
  // 1. green 클래스를 갖는 요소 선택하고
  // 2. li 태그 요소를 생성한 후
  // 3. li 태그의 텍스트로 'green 클래스를 갖는 요소의 이전 형제 요소로 추가(js)' 추가
  // 4. green 클래스를 갖는 요소의 "바로 이전 형제 요소"로 li 요소 추가
  // 힌트: https://developer.mozilla.org/en-US/docs/Web/API/Element/before
  const green = document.querySelector('.green');
  const nLi = document.createElement('li');
  nLi.innerText = 'green 클래스를 갖는 요소의 이전 형제 요소로 추가(js)';
  green.before(nLi);
}

function beforeJquery() {
  $('.green').before(
    '<li>green 클래스를 갖는 요소의 이전 형제 요소로 추가(jquery)</li>'
  );
}

// after()
function afterJS() {
  // 1. green 클래스를 갖는 요소 선택하고
  // 2. li 태그 요소를 생성한 후
  // 3. li 태그의 텍스트로 'green 클래스를 갖는 요소의 다음 형제 요소로 추가(js)' 추가
  // 4. green 클래스를 갖는 요소의 "바로 다음 형제 요소"로 li 요소 추가
  // 힌트: https://developer.mozilla.org/en-US/docs/Web/API/Element/after
  const green = document.querySelector('.green');
  const nLi = document.createElement('li');
  nLi.innerText = 'green 클래스를 갖는 요소의 다음 형제 요소로 추가(js)';
  green.after(nLi);
}

function afterJquery() {
  $('.green').after(
    '<li>green 클래스를 갖는 요소의 다음 형제 요소로 추가(jquery)</li>'
  );
}

// 요소 삭제하기
// remove()
function removeJS() {
  // li2 아이디를 갖는 요소를 선택하여 그 요소를 삭제
  // 힌트: https://developer.mozilla.org/en-US/docs/Web/API/Element/remove
  const li2 = document.querySelector('#li2');
  li2.remove();
}
function removeJquery() {
  $('#li2').remove();
}

// empty()
function emptyJS() {
  // 참고! js에는 empty 메서드가 없습니다~ 따라서 아래와 같이 코드를 적용해주세요
  // ul 태그이자 num 클래스를 갖는 요소를 선택후
  // 해당 요소의 HTML을 빈 문자열 '' 로 설정 (innerHTML)
  const ul = document.querySelector('.nums');
  ul.innerHTML = '';
}

function emptyJquery() {
  //   $('.nums').html(''); => 이건 내가 쓴 코드
  $('ul.nums').empty();
}

// 요소 탐색하기
function findParent() {
  // child2 클래스 갖는 요소의 부모 요소
  const child2 = document.querySelector('.child2');
  console.log(child2.parentNode);
  console.log($('.child2').parent()); //jquery
}

function findParents() {
  //js로 구현해보고 싶음 아직 미완성이라 완성할것
  // JS 없습니다! 패스~~
  const child2 = document.querySelector('.child2');

  if (child2.parentNode != null) {
    console.log(child2);
    console.log(child2.parentNode);
  }

  console.log($('.child2').parents()); //jquery
}

function findNext() {
  // child2 클래스 갖는 요소의 다음 형제 요소
  const child2 = document.querySelector('.child2');
  console.log(child2.nextElementSibling);
  console.log($('.child2').next()); //jquery
}

function findPrev() {
  // child2 클래스 갖는 요소의 이전 형제 요소
  const child2 = document.querySelector('.child2');
  console.log(child2.previousElementSibling);
  console.log($('.child2').prev()); //jquery
}

function findChildren() {
  // parent 클래스 갖는 요소의 자식 요소
  const parent = document.querySelector('.parent');
  console.log(parent.children);
  console.log($('.child2').children()); //jquery
}

// 클래스 조작하기
function addClass() {
  // hi 아이디 갖는 요소 선택하여 "fs-50" 클래스 추가
  const hi = document.querySelector('#hi');
  hi.classList.add('fs-50');

  //   $('#hi').addClass('fs-50');
}

function removeClass() {
  // hi 아이디 갖는 요소 선택하여 "fs-50" 클래스 삭제
  const hi = document.querySelector('#hi');
  hi.classList.remove('fs-50');

  //   document.querySelector('#hi').classList.remove('fs-50');
  //   $('#hi').removeClass('fs-50');
}

function hasClass() {
  // hi 아이디 갖는 요소 선택하여 "fs-50" 클래스 포함 여부 확인
  const hi = document.querySelector('#hi');
  console.log(hi.classList.contains('fs-50'));
  //   $('#hi').hasClass('fs-50');
}

function toggleClass() {
  // hi 아이디 갖는 요소 선택하여 "bg-pink" 클래스 토글 (있으면 삭제, 없으면 추가)
  const hi = document.querySelector('#hi');
  hi.classList.toggle('bg-pink');
  //   $('#hi').toggleClass('bg-pink');
}
