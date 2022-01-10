const { reverse } = require('lodash');

var items = [
	{ name: 'Edward', value: 21 },
	{ name: 'Sharpe', value: 37 },
	{ name: 'And', value: 45 },
	{ name: 'The', value: -12 },
	{ name: 'Magnetic', value: 13 },
	{ name: 'Zeros', value: 37 },
];

items.sort(function (a, b) {
	var nameA = a.name.toUpperCase(); // ignore upper and lowercase
	var nameB = b.name.toUpperCase(); // ignore upper and lowercase
	if (nameA < nameB) {
		return -1;
	}
	if (nameA > nameB) {
		return 1;
	}

	// 이름이 같을 경우
	return 0;
});

// console.log(items);
/* 
const str = 'abcde';
let stack = [];
for (let i = 0; i < str.length; i++) {
	stack.push(str[i]);
}
console.log(stack);

let reverseStr = '';
for (let i = stack.length - 1; i > -1; i--) {
	reverseStr += stack[i];
}

console.log(reverseStr); */
