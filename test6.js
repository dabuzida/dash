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
/* 
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
 */
/* console.log(
	[1, 11, 9, 22].sort((a, b) => {
		if (a > b) {
			return -1;
		}
	}),
); */

// let x = [3, 2, 6, 16, 8, 5, 1]; // [1, 2, 3, 5, 6, 8, 16]
/*
누구나자알 13장  연습문제
let x = [5, 2, 4, 1, 0];
console.log(x);

class SortArray {
	constructor(array) {
		this.array = array;
	}

	partition(leftPointer, rightPointer) {
		let pivotIndex = rightPointer;
		let pivot = this.array[pivotIndex];
		rightPointer--;

		while (1) {
			while (this.array[leftPointer] < pivot) {
				leftPointer++;
			}
			while (this.array[rightPointer] > pivot) {
				rightPointer--;
			}
			// console.log(rightPointer);
			if (leftPointer >= rightPointer) {
				break;
			} else {
				let temp = this.array[leftPointer];
				this.array[leftPointer] = this.array[rightPointer];
				this.array[rightPointer] = temp;
				leftPointer++;
			}
		}
		let temp = this.array[leftPointer];
		this.array[leftPointer] = this.array[pivotIndex];
		this.array[pivotIndex] = temp;
		return leftPointer;
	}

	quicksort(leftIndex, rightIndex) {
		if (rightIndex - leftIndex <= 0) {
			return;
		}

		let pivotIndex = this.partition(leftIndex, rightIndex);
		this.quicksort(leftIndex, pivotIndex - 1);
		this.quicksort(pivotIndex + 1, rightIndex);
	}
}

let sort_array = new SortArray(x);
sort_array.quicksort(0, x.length - 1);
console.log(x);

// console.log(x[x.length - 3] * x[x.length - 2] * x[x.length - 1]);

let ans;
for (const key in x) {
	if (key != x[key]) {
		ans = key;
		break;
	}
}
console.log(ans); */

let x = [2, 1, 445, 223, 34252345, 3423, 22, 143, 523];
let max = x[0];

// for (let i = 1; i < x.length; i++) {
// 	if (x[i] > max) {
// 		max = x[i];
// 	}
// }
// console.log(max);

// x.sort((a, b) => {
// 	console.log(a, b);
// 	return a < b ? -1 : 1;
// });

x.sort((a, b) => {
	console.log(a, b);
	return a - b;
});
console.log(x[x.length - 1]);
