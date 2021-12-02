// 인터페이스에 제네릭 선언하기
// interface Dropdown {
//     value: string;
//     selected: boolean;
// }

interface Dropdown<T> {
    value: T;
    selected: boolean;
}

// value의 타입을 number로 정의해서 넘길 수 있음
const obj: Dropdown<number> = {
    value: 10,
    selected: false
};