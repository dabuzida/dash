// let strings = ['sun', 'bed', 'car']; //["car", "bed", "sun"]
// const n = 1;
let strings = ['abce', 'cyt', 'abcd', 'cdx', 'abb']; //["abcd", "abce", "cdx"]
const n = 2;

for (let i = 0; i < strings.length; i++) {
	strings[i] = {
		name: strings[i],
		id: strings[i].charCodeAt(n),
	};
}
console.log(strings);
dicSort(strings);
console.log(strings);

mySort(strings);
console.log(strings);

for (let i = 0; i < strings.length; i++) {
	strings[i] = strings[i].name;
}
console.log(strings);

function mySort(arr) {
	arr.sort((a, b) => {
		if (arr.id > b.id) {
			return 1;
		}
		if (a.id < b.id) {
			return -1;
		}
		return 0;
	});
}

function dicSort(arr) {
	arr.sort((a, b) => {
		var nameA = a.name;
		var nameB = b.name;
		if (nameA < nameB) {
			return -1;
		}
		if (nameA > nameB) {
			return 1;
		}
		return 0;
	});
}

function checkDuplicate(arr) {
	let cnt = 0;
	let idArr = [];
	for (let i = 0; i < arr.length; i++) {
		idArr.push(arr[i].id);
	}
	const set = new Set(idArr);
	// console.log(idArr.length);
	// console.log(set.size);
	if (idArr.length === set.size) {
		return true;
	}
	return false;
}
