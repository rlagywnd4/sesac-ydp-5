// 구조 분해 할당
// 1. 배열 구조 분해 할당
// - 배열 구조 분해 할당시 "순서" 중요
const arr1 = [1, 2, 3, 4, 5];
const arr2 = ['a', 'b', 'c'];

const [one, two, three, four, five] = arr1;
console.log(one, two, three, four, five);

const [a, b, c, alpha] = arr2;
console.log(a, b, c, alpha); //a b c undefined

let num1 = 1;
let num2 = 3;

console.log('swap 전 >', num1, num2);
[num2, num1] = [num1, num2];
console.log('swap 후 >', num1, num2);

const lists = ['apple', 'grape'];
[f1, f2, f3 = 'orange'] = lists; //undefined대신에 바로 값을 넣을 수 있음
console.log(f1, f2, f3);

// 2. 객체 구조 분해 할당
// - 변수를 선언하는 순서는 중요하지 않음
// - 키 값과 변수명이 일치해야 함

let obj = {
  title: '엘리멘탈',
  content: '재밌어요',
  num: 5,
};
// 객체 구조 분해를 쓰지  않았을때
console.log(obj.title, obj.content, obj.num);
console.log(obj['title'], obj['content'], obj['num']);

// 객체 구조 분해를 쓰고 싶다면
// key 가 존재하지 않을 때를 대비하여 = 연산자를 이용하면 default 값을 할당
const { num, title, content, star = 1000 } = obj;
console.log(title, content, num, star);

const { n1, t1, c1 } = obj;
console.log(n1, t1, c1); //undefined undefined undefined 객체 구조분해는 순서가 아니라 key값이 중요

// 클론(:)을 이용하면 새 변수명으로 바꿔서 저장할 수 있다!!
const { title: t2, num: n2, content: c2 } = obj;
console.log(t2, c2, n2);

function getInfo(lecture) {
  // TODO: 구조 분해 할당을 사용하여 값 추출
  const { name, part, leader } = lecture;

  // TODO: 출력 문장 생성
  //   const output =
  //     name +
  //     '강의는 ' +
  //     part +
  //     ' 개발을 공부합니다.' +
  //     '수업의 리더는 ' +
  //     leader +
  //     ' 입니다.';
  // 아래는 템플릿 리터럴(Template Literal)을 사용한 방법
  const output = `${name} 강의는 ${part} 개발을 공부합니다. 수업의 리더는 ${leader} 입니다.`;

  return output;
}

const lectureInfo = {
  name: 'SESAC x CODINGOn',
  part: 'WEB',
  leader: 'Sean',
};

const result = getInfo(lectureInfo);
console.log(result); // SESAC x CODINGOn 강의는 WEB 개발을 공부합니다. 수업의 리더는 Sean 입니다.

console.clear();
///////////////////////////////////////////
//spread 연산자
// 반복 가능한 객체에 대해서 단일 요소로 압축을 해제하는 역할 (== 객체의 값을 펼친다!!!)

// spread in array
const x = [1, 2, 3];
const y = [4, 5];
const spread = [...x, ...y]; // [ 1, 2, 3, 4, 5 ]
console.log(spread);

// spread in string
const z = [...'HELLO']; // [ 'H', 'E', 'L', 'L', 'O' ]
const w = 'HELLO'.split(''); // [ 'H', 'E', 'L', 'L', 'O' ]
console.log(z);
console.log(w);

// spread in object
const chip = {
  base: 'chip',
  company: 'lotte',
};

const potatoChip = {
  ...chip,
  // base: 'chip',
  // company: 'lotte',
  flavor: 'potato',
};

const sweetPotatoChip = {
  ...chip,
  flavor: 'sweet potato',
};

console.log(chip);
console.log(potatoChip);
console.log(sweetPotatoChip);

//실습. spread 연산자 사용하기
const word1 = 'abc';
const word2 = 'xyz';
const result1 = [...word1, ...word2];
console.log(result1);

// rest 파라미터
// 꼭 마지막에 사용할 것
// 1. 함수에서  rest를 사용할 때
const values = [10, 20, 30];

function get(a, ...rest) {
  console.log('a >>', a); // 10
  console.log('rest >>', rest); // [ 20, 30 ]
}

get(...values);

// 2. 객체에서 rest
const icecream = {
  company: 'lotte',
  flavor: 'choco',
  price: 1000,
};

const { flavor, ...rest } = icecream;
console.log(flavor); //'choco'
console.log(rest); //{ company: 'lotte', price: 1000 }
// console.log(price); ReferenceError: price is not defined

// 3. 배열에서 rest
const number = [1, 2, 3, 4, 5, 6, 7, 8];
const [one1, two2, ...rest2] = number;
console.log(one1); // 1
console.log(two2); // 2
console.log(rest2); // [ 3, 4, 5, 6, 7, 8 ]
