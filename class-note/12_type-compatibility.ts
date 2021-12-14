// 타입 호환 : 두개의 타입이 서로 호환되는지 점검하는 것
interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
}

var developer: Developer;
var person: Person;
// developer = person; // 오류 발생

// 기본적으로 오른쪽에 있는 타입이 더 많은 속성을 가지고 있을 때 왼쪽 타입과 호환이 됨

// 함수간 타입 호환
var add = function(a: number) {
  // console.log(a);
  // 실제 함수 안 내부 로직은 중요하지 않음
}

var sum = function (a: number, b: number) {
  // return a + b;
}


// 구조적 호환에서 sum은 add 보다 더 큼
// add = sum (호환 불가) 
sum = add; // (호환 가능)


// 제네릭 타입 호환
interface Empty<T> {
  // ..
}
var empty1: Empty<string>;
var empty2: Empty<number>;
empty1 = empty2; // 호환 가능
empty2 = empty1; // 호환 가능


interface NotEmpty<T> {
  data: T;
}
var notempty1: NotEmpty<string>;
var notempty2: NotEmpty<number>;
// notempty1 = notempty2 (x) // 호환 불가
// notempty2 = notempty1 (x) // 호환 불가
