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
let map = new Map();

map.set('name', 'John');

let keys = Array.from(map.keys());

console.log(keys);
keys.push('more');
console.log(keys);
