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

console.log(Auth[1]);
console.log(Cafe['latte']);

//////////////////////////////////////////////////////////////////
// 1. interface
interface Student {
  name: string;
  isPassed: boolean;
}

const student1: Student = {
  name: 'hyo',
  isPassed: true,
  // addr: 'seoul',
};
const student2: object = {
  name: 'hyo',
  isPassed: true,
  addr: 'seoul',
};

// interface 상속
// interface BaseballClub { // interface 상속 X
//   name: string;
//   isPassed: boolean;
//   position: string;
//   height: number;
// }

// type Score = 'A+' | 'A' | 'B' | 'C' | 'D' | 'F';
enum Score {
  Aplus = 'A+',
  A = 'A',
  B = 'B',
  C = 'C',
  D = 'D',
  F = 'F',
}

interface BaseballClub extends Student {
  // interface 상속 O
  position: string;
  height: number;
  readonly backNumber?: number; //backNumber라는 키는 있어도되고 없어도됨 // readonly를 넣으면 값 변경 불가
  [grade: number]: Score; // 숫자형인 grade가 키값이고 value는 위에서 만든 Score타입
}

const otani: BaseballClub = {
  name: 'ontani',
  isPassed: true,
  position: 'pitcher',
  height: 193,
  // backNumber: 17,
  // 1: 'A+', // type 사용
  1: Score.A, // enum 사용
};

console.log(otani);

otani.position = '투수';
otani['height'] = 200;
// otani.backNumber = 16; error: backNumber readonly
console.log(otani);

type Bp1 = 500 | 700 | 1000;
enum Bp2 { // 요소들간에 관계가 있을때 enum사용하면 편함
  SM = 500,
  MD = 700,
  LG = 1000,
}

const width1: Bp1 = 500; // type은 개발자가 값을 알아야함
const width2: Bp2 = Bp2.SM; // enum은 몰라도 됨

// 교차 타입 : 두개 이상의 타입을 합치는 것
interface Toy {
  name: string;
  start(): void;
}

interface Car {
  name: string;
  color: string;
  price: number;
}

type ToyCar = Toy & Car;
const toyCar: ToyCar = {
  name: 'tayo',
  start() {
    console.log('출발~~~');
  },
  color: 'blue',
  price: 5000,
};

/// 2. type
type Gender = 'F' | 'M';
type Person = {
  name: string;
  age?: number;
  like?: string[];
  gender: Gender;
};

let daniel: Person = {
  name: 'daniel',
  gender: 'F', // Gender 탕비에 선언된 값만 넣을 수 있음
  age: 20,
  like: ['minji', 'hani'],
};

///////////////////////////////////////////////////////////
// 실습. interface 이용

type category = '액션' | '로맨스' | ' 판타지' | '롤플레잉';
type platform = '모바일' | 'PC' | 'VR';
interface Game {
  title: string;
  price: number;
  desc?: string;
  category: category;
  platform: platform;
}
