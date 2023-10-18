// only typescript type

// Tuple
let drink: [string, string] = ['사이다', '롯데'];
drink[0] = 'cider';
drink[1] = 'lotte';
// drink.push('hi'); // 이럴꺼면 튜플 쓰는 의미가 없음(되긴한데 이럴꺼면 배열사용) //tuple의 한계
console.log(drink);

// readonly: 요소 타입 순서와 길이 고정
let drink2: readonly [string, number] = ['사이다', 2200];
// drink2.push('hi'); // error(이렇게 튜플에 push()방지)
console.log(drink2);

// type별칭
type productInfo = [number, string, number]; // type 별칭으로 type 선언
let product1: productInfo = [1, 'logitech mouse', 1200000];
let product2: productInfo = [2, 'logitech keyboard', 2200000];
// let product3: productInfo = [3, 'logitech keyboard', '2200000']; // type error

////////////////////////////////////////////////////////////////////////////////////

// Enum
enum Auth {
  admin = 0,
  user = 1,
  guest = 2,
}

enum Cafe {
  americano = '아메리카노',
  latte = '카페라떼',
}

console.log(Auth.admin);
console.log(Cafe.latte);

enum Cake {
  choco,
  vanilla,
  kiwi = '키위케이크',
}

console.log(Cake.choco);
console.log(Cake.kiwi);

/////////////////////////////////////////////////////////

//any
// 명시적으로
let val: any;
val = true;
val = '하이';
val = 10000;
val = { name: 'sesac' };

// 암묵적으로
let val2;
val = false;
val = '하glgl이';
val = 10000456;
val = { name: 'sosac' };

/////////////////////////////////////////////////////////////
// 실습
let olimplc_newgame: readonly [object, boolean] = [
  { name: '쇼트트랙', type: '혼성 계주' },
  true,
];
