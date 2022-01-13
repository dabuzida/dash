/* 
// 회사 스티키 노트에 기록

숫자 0, 빈 문자열"", null, undefined, NaN은 불린형으로 변환 시 모두 false가 됩니다. 이런 값들은 ‘falsy(거짓 같은)’ 값이라고 부릅니다.
이 외의 값은 불린형으로 변환시 true가 되므로 ‘truthy(참 같은)’ 값이라고 부릅니다. */

let student = {
	id: 23,
	name: 'Kim',
	age: 33,
	major: 'computer',
	22: 'hi',
};

let x = 22;
let y = 33;
student[[x, y]] = 555;

console.log(student[`id`]);
student[33] = 'sadkfjsdlk';
console.log(Boolean(student[22]));
console.log(student[22]);
console.log(student[33]);
console.log(student);
