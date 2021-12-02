var a = 'abc';

function getB(b = 10) {
  var c = 'hi';
  return b;
}

// 타입 추론 기본2
// interface Dropdown<T> {
//   value: T;
//   title: string;
// }

// var shoppingItem: Dropdown<string> = {
//   value: 'snack',
//   title: 'hi'
// }

// 타입 추론 기본3
interface Dropdown<T> {
  value: T;
  title: string;
}

interface DetailedDropdown<T> extends Dropdown<T> {
  desc: string;
  tag: T;
  // 암묵적으로 value, title이 들어옴
}
// 제네릭으로 string 을 넘기면 DetailedDropdown 과 Dropdown 에 string 타입으로 들어감
var detailedItem: DetailedDropdown<string> = {
  title: 'abc',
  desc: 'ab',
  value: 'val',
  tag: 'tag'
  // tag: 10 (x) 
}
var shoppingItem: Dropdown<string> = {
  value: 'snack',
  title: 'hi'
}


// Best Common Type 추론 방식
// >> 모든 값을 다 유니온으로 묶는 추론 방식임
var arr = [1, 2, true]; // number | boolean 으로 추론
// 타입들을 배열의 교집합으로 추론함
