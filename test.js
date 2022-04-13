/* let arr = ['nap', 'teachers', 'cheaters', 'PAN', 'ear', 'era', 'hectares'];

function aclean(array) {
	let map = new Map();
	let set = new Set();
	for (const e of array) {
		let eSorted = e.toLowerCase().split('').sort().join('');
		// if (!map.has(eSorted)) {
		map.set(eSorted, e);
		// }
	}
	console.log(map);
	return Array.from(map.values());
}

console.log(aclean(arr)); */
/* let map = new Map();

map.set('name', 'John');

let keys = Array.from(map.keys());

console.log(keys);
keys.push('more');
console.log(keys); */

// let salaries = {
// 	Joh: 100,
// 	Pete: 300,
// 	Mary: 250,
// };

// let { Joh, Pete, Mary } = salaries;
// console.log(Joh);

/* let date = new Date();
console.log('현재시간', date);
console.log('현재요일', date.getDay());
console.log('1970-1-1 0h 0m 0s로부터 지난 시간[ms]', date.getTime());
console.log(date.getHours());

let today = new Date();
console.log(today);
today.setHours(0);
console.log(today);
today.setHours(0, 0, 0);
console.log(today); */

/* let student = {
	name: 'John',
	age: 30,
	isAdmin: false,
	courses: ['html', 'css', 'js'],
	wife: null,
	good: function () {
		console.log('good');
	},
	bye() {
		console.log('bye');
	},
};
student.good();
student.bye();

let json = JSON.stringify(student);

console.log(typeof json); // 문자열이네요!

console.log(json);
console.log(JSON.stringify([1, 2, 'sdfds', undefined, null, 3]));
console.log(JSON.stringify({ a: [1, 2, 3] })); */

/* let room = {
	number: 23,
};

let meetup = {
	title: 'Conference',
	occupiedBy: [{ name: 'John' }, { name: 'Alice' }],
	place: room,
};

// 순환 참조
room.occupiedBy = meetup;
meetup.self = meetup;

// console.log(room);
// console.log(meetup);

console.log(
	JSON.stringify(meetup, function replacer(key, value) {
		// return value == meetup ? undefined : value;
		return key != '' && value == meetup ? undefined : value;
	}),
); */

/* let list = {
	value: 1,
	next: {
		value: 2,
		next: {
			value: 3,
			next: {
				value: 4,
				next: null,
			},
		},
	},
};
function printList2(list) {
	// if (!list.next) {
	// 	return console.log(list.value);
	// }
	// printList2(list.next);
	// return console.log(list.value);

	if (list.next) {
		printList2(list.next);
	}

	console.log(list.value);
}
printList2(list); */

/* function printList(list) {
	let i = [];
	while (list) {
		// console.log(list.value);
		i.push(list.value);
		list = list.next;
	}
	for (let j = i.length - 1; j >= 0; j--) {
		console.log(i[j]);
	}
} */
// printList(list);

// console.log(list.next ? 100 : 0);
// console.log(Object.keys(list));
// console.log(Object.values(list));
// console.log(Object.entries(list));

/* 
 Array.isArray()  인자가 배열인지 판별해서 true false
 Object.keys	인자로 받은 객체의 키를 모아 배열로 반환
 Object.values 	인자로 받은 객체의 값만을 모아 배열로 반환
 Object.entries 	인자로 받은 객체의 [키, 값]쌍을 담은 배열 반환
*/

/* function showName() {
	console.log(arguments.length);
	console.log(arguments);
	console.log(arguments[0]);
	console.log(arguments[1]);

	// arguments는 이터러블 객체이기 때문에
	// for(let arg of arguments) alert(arg); 를 사용해 인수를 펼칠 수 있습니다.
}

// 2, Bora, Lee가 출력됨
showName('Bora', 'Lee');

// 1, Bora, undefined가 출력됨(두 번째 인수는 없음)
showName('Bora'); */

/* let x;
let y = null;
console.log(typeof x, x);
console.log(typeof y, y);

undefined = 'value';
console.log(undefined); */

/* let x = {
	name: 'James',
	age: 33,
};
let i = Object.assign({}, x);
let j = {};
Object.assign(j, i);
let y = Object.assign(x);
let z = { ...x };
i.birth = '1991';
y.school = 'yang-jeong';
z.school = 'mit';
console.log(i);
console.log(j);
console.log(x);
console.log(y);
console.log(z); */

/* function makeCounter() {
	let count = 0;

	return function () {
		return ++count;
	};
}

let counter = makeCounter();

console.log(counter()); // 0
console.log(counter()); // 1
console.log(counter()); // 2 */
// console.log(makeCounter()()); // 0
// console.log(makeCounter()()); // 1
// console.log(makeCounter()()); // 2
// console.log(typeof makeCounter());
// console.log(typeof 1);

// function returnTen() {
// 	// return 10;

// 	return function asdf(n) {
// 		return function name(params) {
// 			return 50;
// 		};
// 	};
// }

// let a = returnTen;
// let b = a();

// console.log(returnTen()(10)());
// return;

// console.log(a, typeof a);
// console.log(typeof a());
// console.log(b, typeof b);

/* function curry(f) {
	return f;
}

function temp(n) {
	return function temp2(l) {
		return n + l;
	};
}

let a = curry(temp)(5)(6);
console.log('a: ', a, typeof a);

let b = curry(temp);
console.log('b: ', b(5), typeof b);
 */

/* function sayHi() {
	console.log(phrase); // undefined

	phrase = 'Hello'; // 할당은 실행 흐름이 해당 코드에 도달했을 때 처리됩니다.
	var phrase; // 선언은 함수 시작 시 처리됩니다.
}

sayHi();
var phrase = 1;
console.log(phrase);

function xx() {
	let phrase = null; // 선언은 함수 시작 시 처리됩니다.

	console.log(typeof phrase); // undefined
	console.log(phrase); // undefined
	console.log(typeof undefined); // undefined

	phrase = 'Hello'; // 할당은 실행 흐름이 해당 코드에 도달했을 때 처리됩니다.
}

xx();
let aa = 1;
console.log(aa);
 */

/* let x = 1011;
let y = 1010;
let z = x & y;
let p = 0b11;

console.log(z, typeof z);
console.log(typeof p);
 */
const orders = ['ABCFG', 'AC', 'CDE', 'ACDE', 'BCFG', 'ACDEH'];
const course = [2, 3, 4];
// result = ['AC', 'ACDE', 'BCFG', 'CDE'];

// 주어진 문자열 배열 순회하면서 중복없이 주어진 문자를 합친 문자열 만들기
const givenAllLetters = orders.reduce((acc, cur) =>
	acc.concat(
		'',
		cur
			.split('')
			.filter(e => !acc.includes(e))
			.join(''),
	),
);
// 주어진 문자열 배열 순회하면서 중복없이 주어진 문자를 합친 문자열 만들기2
// const givenAllLetters2 = new Set(orders.join(''));
// console.log(givenAllLetters2);
console.log(givenAllLetters);
const standardString = givenAllLetters.split('').sort().join(''); // 사전순 정렬
console.log(standardString);

const binaryMapping = +'1'.repeat(standardString.length);
console.log(binaryMapping);

/* 
const letterLength = orders.map(e => e.length);

const maxLengthLetter = ;
const maxLength = Math.max(...letterLength);

console.log(maxLength);
const existingLetters =  // 'ACIXZ'

 */
