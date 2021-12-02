// 타입 단언
var a;
a = 20;
a = 'a';
var b = a as string;
// a는 string 타입으로 변경됨

// 타입 단언 : 내가 정의한 타입으로 간주하라고 하는 것
// DOM API 조작시 타입 단언을 가장 많이 사용

// 타입 단언 조작 예제
// <div id="app"></div>
var div = document.querySelector('div'); // div 엘리먼트
// querySelector 로 접근하는 시점에 div 태그가 있다고 보장하지 않음
