// let map = new Map([
// 	['1', 'str1'],
// 	[1, 'num1'],
// 	[true, 'bool1'],
// ]);

// console.log(map.get('1')); // str1

let obj = {
	name: 'John',
	age: 30,
};

let arr = Object.entries(obj);
console.log(arr);
let map2 = new Map(arr);
console.log(map2); // John
console.log(map2.get('name')); // John

let prices = Object.fromEntries([
	['banana', 1],
	['orange', 2],
	['meat', 4],
]);
console.log(prices); // 2
console.log(prices.orange); // 2

let map = new Map();
map.set('banana', 1);
map.set('orange', 2);
map.set('meat', 4);

let obj2 = Object.fromEntries(map.entries()); // 맵을 일반 객체로 변환 (*)

// 맵이 객체가 되었습니다!
// obj = { banana: 1, orange: 2, meat: 4 }
console.log(map); // 2

console.log(obj2); // 2
