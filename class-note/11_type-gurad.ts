interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function introduce(): Developer | Person {
  return { name: 'Tony', age: 33, skill: 'en' }
}

var tony = introduce();
// console.log(tony.skill); // (x)
// >> 유니온 타입은 공통 특성만 접근할 수 있음
console.log(tony.name); // (o)

// 타입단언 후 속성 접근
if ((tony as Developer).skill) {
  var skill = (tony as Developer).skill;
  console.log(skill);
} else if ((tony as Person).age) {
  var age = (tony as Person).age;
  console.log(age);
}
// 타입 단언만 사용시 코드 가독성x -> 타입 가드 적용

// ** 타입 가드 정의 **
// is+해당 타입
// target is Developer : 넘겨 받은 파라미터가 실제 해당 타입인지 체크
function isDeveloper(target: Developer | Person): target is Developer {
  return (target as Developer).skill !== undefined;
}

if (isDeveloper(tony)) {
  console.log(tony.skill);
} else {
  console.log(tony.age);
}

