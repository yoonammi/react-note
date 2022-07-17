// 웹브라우저에서 유일하게 자바스크립트 코드 실행 가능

// 크롬 브라우저에 내장되어 있는 자바스크립트 엔진 : v8

// node.js : 자바스크립트를 브라우저처럼 브라우저 밖에서 실행하는 환경

// 리액트 활용
// 슬랙, vscode, 웹게임, 웹3D, 깃데스크탑, gather,
// 모바일앱(react native) - 안드로이드와 os둘다 개발 가능,

// const
// - 재할당 불가능, 재선언 불가능
// - 선언과 동시에 무조건 할당해야 함
// - 호이스팅이 가능하지만 tdz(데드존)에 갇힌다, 에러발생

// let
// - 재할당 가능, 재선언 불가능
// - for문에서는 사용해야 함
// - 호이스팅이 가능하지만 tdz(데드존)에 갇힌다, 에러발생

// <JS 키워드>
// 1. var, let, const
// - 식별자, 선언, 할당
// - hoisting, TDZ, block scope(변수가 유효한 범위 - ex)for문 안에 선언된 변수는 for문 밖에서 접근 불가능. 에러남 / var는 undefined뜸-에러는 안떠서 에러난줄 모름), function scope
// var는 function scope
// let, const는 block scope

{
  let c;

  const a = function () {
    // 표현식(const는 tdz에 갇혀 호이스팅 안됨)

    c += 1;
    console.log(c);
  };

  const b = function () {
    c -= 1;
    console.log(c);
  };

  a();
}

// 2. 화살표함수(❗❗❗중요함)
const ef = () => {};
const plus = (a, b) => a + b;

// 표현식(const)
// b(); // error: not defined
//console.log(b); // cannot access
const b = function () {
  c -= 1;
};
// 표현식(var)
//f(); // error: not a function
console.log(f); // undefined(있긴 있는데 함수가 아니라서 실행을 못한다)
var f = function () {};
// 그러니까 표현식은 const a까지만, const f까지만 호이스팅 되어서 에러가 난다

// 선언식(호이스팅 가능하며 에러 안남-함수가 동째로 호이스팅됨)
e();
function e() {
  // () {} -> 이곳이 통째로 호이스팅됨
}

// 자바스크립트는 일급함수(다른함수에 인자로도 쓰일수 있고 암튼 쓰임새가 많다)

// 3. 비구조화(구조 분해) 할당(destructure 구조체를 부순다.) ❗❗❗엄청 중요

// 배열이나 오브젝트여야 함

// 배열
const a = [1, 2, 3, 4];
// const first = a[0];
// const second = a[0];
const [first, second] = a;
// const [first, setFirst] = useState(1); // react에서 이런식으로 쓸거다.
console.log(first);
console.log(second);

// 오브젝트
const student1 = {
  name: "john",
  math: 90,
  english: 20,
};
const { name, math, english } = student1;
console.log("이름: " + name);
console.log("수학: " + math);
console.log("영어: " + english);

// -디폴트 파라미터
const add = (a, b = 10) => a + b;
console.log(add(3));

// - ===사용할것임. 타입까지 검사함

// - 탬플릿 리터럴(백틱사용)
console.log(`${a} 글자 더하기 가능`);

// 4. 원시타입, 참조타입

// 원시타입 : Primitive Type
// 종류 : Numbers, Strings, Booleans, null, undefined
// 변수에 값 자체를 저장

// 참조타입: Refrerence Type
// 종류 : Object, Array, Function ...
// 변수에 값이 담긴 주소를 저장

// - 불변성 유지(한쪽은 값을 바꿔도 나머지 한쪽은 값을 유지하고 싶다), 깊은복사, 얕은복사(...은 얕은복사를 해줌. 한단계만)

// 불변성 유지를 도와주는게 펼침 연산자다
// 5. 펼침연산자(배열과 객체에서 쓰임) ❗❗❗중요함

const arr1 = [1, 2, 3];
const arr2 = [...arr1]; // (배열안의 값을 복사한거라 값이 바뀌는게 가능, 새로운 배열이 됨)
arr2[1] = 10;
// arr1은 불변성을 유지
// arr2는 바뀜

// 약점(배열 안의 배열은 주소를 복사한다)
const arr3 = [1, 2, 3, [10, 11, 12]];
const arr4 = arr3;

// --------------------------------------------------------------------------------------

// 리액트(데이터만 바꿔줘도 화면에 저절로 바뀐것이 표현된다 - 알아서 뷰에 업데이트 됨)

// 가상돔에 미리 적용시킨 다음에 한꺼번에 업데이트한다
