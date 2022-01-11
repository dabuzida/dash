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
/* const n = 118372;
let numberByDigit = ('' + n).split('');

let x = +('' + n).split('').sort().join(''); */

// const n = 3;
// const m = 12; // [최대공약수, 최소공배수]
// const n = 2;
// const m = 5;

const n = 18;
const m = 24;

let gcf; //greatestCommonFactor;
let lcm; //leastCommonMultiple;

// if (Math.floor(n / m) === n / m) {
// 	lcm = n;
// } else if (Math.floor(m / n) === m / n) {
// 	lcm = m;
// } else {
// 	lcm = m * n;
// }

///////////////////////////////////////////////////

let nFactor = createFactor(n).sort((a, b) => {
	if (a > b) {
		return -1;
	}
});
let mFactor = createFactor(m).sort((a, b) => {
	if (a > b) {
		return -1;
	}
});

console.log(nFactor);
console.log(mFactor);

if (n > m) {
	for (let i = 0; i < mFactor.length; i++) {
		if (nFactor.includes(mFactor[i])) {
			console.log(mFactor[i]);
			gcf = mFactor[i];
			break;
		}
	}
} else {
	for (let i = 0; i < nFactor.length; i++) {
		if (mFactor.includes(nFactor[i])) {
			console.log(nFactor[i]);
			gcf = nFactor[i];
			break;
		}
	}
}

lcm = (m * n) / gcf;
console.log(gcf, lcm);
// return [gcf, lcm];

function createFactor(number) {
	let smallFactor = [];
	let bigFactor = [];
	let factor = [];

	for (let i = 2; i <= Math.sqrt(number); i++) {
		if (number % i === 0) {
			smallFactor.push(i);
		}
	}

	for (let i = 0; i < smallFactor.length; i++) {
		bigFactor.push(number / smallFactor[i]);
	}

	factor = [...smallFactor, ...bigFactor];
	// factor.unshift(1);
	factor.push(1, number);
	return factor;
}

/* console.log(
	[1, 11, 9, 22].sort((a, b) => {
		if (a > b) {
			return -1;
		}
	}),
); */
