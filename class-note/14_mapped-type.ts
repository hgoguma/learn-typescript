// Mapped Type
// 기존에 정의되어 있는 타입을 새로운 타입으로 변환
type Heroes = 'Hulk' | 'Capt' | 'Thor'


// Heroes 안 속성의 타입을 모두 number로 변경
type HeroAges = { [K in Heroes]: number }
// 마치 inteface 처럼 사용됨
const ages: HeroAges = {
  Hulk: 10,
  Capt: 10,
  Thor: 10
}

// for in 반복문
var arr = ['a', 'b', 'c']
for (var key in arr) {
  console.log(arr[key]);
}