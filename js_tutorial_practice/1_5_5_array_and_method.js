// border-left-width를 borderLeftWidth로 변경하기
/* 
function camelize(string) {
	console.log(string);

	let temp = string.split('');
	// console.log(temp);
	for (let key in temp) {
		if (temp[+key] == '-') {
			temp[+key] = '';
			temp[+key + 1] = temp[+key + 1].toUpperCase();
		}
		// console.log(+key);
		// console.log(temp[+key + 1]);
	}
	// console.log(temp);
	console.log(temp.join(''));
}

camelize('background-color');
camelize('list-style-image');
camelize('-webkit-transition');
 */
// 특정 범위에 속하는 요소 찾기
/* 
function filterRange(arr, a, b) {
	return arr.filter(e => a <= e && e <= b);
}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

console.log(filtered); // 3,1 (조건에 맞는 요소)

console.log(arr); // 5,3,8,1 (기존
 */

// 특정 범위에 속하는 요소 찾기(배열 변경하기)
/* 
function filterRangeInPlace(arr, a, b) {
	// arr = arr.filter(e => a <= e && e <= b);

	arr = arr.map(e => {
		if (a <= e && e <= b) {
			return e;
		}
	});
}
let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // 1과 4 사이에 있지 않은 요소는 모두 제거함

console.log(arr); // [3, 1]
 */
// 내림차순으로 정렬하기
/* let arr = [5, 2, 1, -10, 8];
arr.sort((a, b) => b - a);
console.log(arr); */

// 배열 복사본을 정렬하기
/* function copySorted(arr) {
	let temp = arr.slice(0);
	return temp.sort();
}

let arr = ['HTML', 'JavaScript', 'CSS'];

let sorted = copySorted(arr);

console.log(sorted); // CSS, HTML, JavaScript
console.log(arr); // HTML, JavaScript, CSS (no changes) */

// 확장 가능한 계산기
/* function Calculator() {
	this.calculate = function (str) {
		let temp = str.split(' ');
		if (temp[1] == '+') {
			return +temp[0] + +temp[2];
		} else {
			return +temp[0] - +temp[2];
		}
	};
    this.addMethod = function (name, func) {
        
    }
}
let calc = new Calculator();

console.log(calc.calculate('3 + 7')); */

// console.log('3 + 7'.split(' '));
// 이름 매핑하기
/* let john = { name: 'John', age: 25 };
let pete = { name: 'Pete', age: 30 };
let mary = { name: 'Mary', age: 28 };

let users = [john, pete, mary];

let names = users.map(e => e['name']);

console.log(names); // John, Pete, Mary */

// 객체 매핑하기
/* let john = { name: 'John', surname: 'Smith', id: 1 };
let pete = { name: 'Pete', surname: 'Hunt', id: 2 };
let mary = { name: 'Mary', surname: 'Key', id: 3 };

let users = [john, pete, mary];

let usersMapped = users.map(e => ({
	fullName: e.name + ' ' + e.surname,
	id: e.id,
}));

console.log(usersMapped[0].id); // 1
console.log(usersMapped[0].fullName); // John Smith
 */

// 나이를 기준으로 객체 정렬하기
/* 
let john = { name: 'John', age: 25 };
let pete = { name: 'Pete', age: 30 };
let mary = { name: 'Mary', age: 28 };
let arr = [pete, john, mary];

sortByAge(arr);
function sortByAge(arr) {
	arr.sort((a, b) => a.age - b.age);
}

// now: [john, mary, pete]
console.log(arr[0].name); // John
console.log(arr[1].name); // Mary
console.log(arr[2].name); // Pete
 */

// 배열 요소 무작위로 섞기

// 평균 나이 구하기
/* function getAverageAge(users) {
	let ans = 0;
	for (const val of users) {
		ans += val.age;
	}
	return ans / users.length;
}
let john = { name: 'John', age: 25 };
let pete = { name: 'Pete', age: 30 };
let mary = { name: 'Mary', age: 29 };

let arr = [john, pete, mary];

console.log(getAverageAge(arr)); */ // (25 + 30 + 29) / 3 = 28

// 중복 없는 요소 찾아내기
/* function unique(arr) {
	for (let i = 0; i < arr.length; i++) {
		let cnt = 0;
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i] == arr[j]) {
				cnt++;
			}
		}
		if (cnt == 0) {
			return arr[i];
		}
	}
}

let strings = ['Hare', 'Krishna', 'Hare', 'Krishna', 'Krishna', 'Krishna', 'Hare', 'Hare', ':-O'];

console.log(unique(strings)); */

// Create keyed object from array

let users = [
	{ id: 'john', name: 'John Smith', age: 20 },
	{ id: 'ann', name: 'Ann Smith', age: 24 },
	{ id: 'pete', name: 'Pete Peterson', age: 31 },
];

let usersById = groupById(users);
function groupById(array) {
	return array.reduce((obj, value) => {
		obj[value.id] = value;
		return obj;
	});
}
console.log(usersById);
/*
  // after the call we should have:
  
  usersById = {
    john: {id: 'john', name: "John Smith", age: 20},
    ann: {id: 'ann', name: "Ann Smith", age: 24},
    pete: {id: 'pete', name: "Pete Peterson", age: 31},
  }
  */
