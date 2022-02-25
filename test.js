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

let date = new Date();
console.log('현재시간', date);
console.log('현재요일', date.getDay());
console.log('1970-1-1 0h 0m 0s로부터 지난 시간[ms]', date.getTime());
console.log(date.getHours());

let today = new Date();
console.log(today);
today.setHours(0);
console.log(today);
today.setHours(0, 0, 0);
console.log(today);
