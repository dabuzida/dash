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

let list = {
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

function printList(list) {}
