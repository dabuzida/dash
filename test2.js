// let nums = [3,2,4,5];
// let arr = [...new Set(nums)];

const { map } = require('lodash');

// let x = new Array(200000).fill(0);
// let x = new Array(2);

// let x = prompt()
// console.log(Boolean(""));

// nums.sort((a, b) => {return a - b;});

// console.log(nums);

// let arrByNumByCnt = new Array(2).fill(0);
// console.log(arrByNumByCnt)

// failRateByStage = failRateByStage.concat(new Array(N-maxStage).fill(0));

// N: 1~500
// stages 길이: 1~200,000
// stages의 원소값: 1~N+1

/* let N = 100;
let temp = [];
for(let i=0; i<1000; i++){
    let n = Math.floor(Math.random()*N);
    temp.push(n);
}
console.log(temp); */

/* let x = 2; // 10
let y = 3; //11
let z = x & y;
console.log(z); */

// let x = [1,2,3];
// x = x.concat([2,2,2,2,]);
// console.log(x);
// var x = 15;

// console.log(typeof x.toString(2));

/* const arr = [1, 2, 3, 4, 5];
const arr2 = [0, 2, 4, 6, 8];
let largeArr;
let smallArr;
let hashTable = {};
let i = 0;
let ans = [];
if (arr.length > arr2.length) {
    largeArr = arr;
    smallArr = arr2;
} else {
    largeArr = arr2;
    smallArr = arr;
}

for (const e of largeArr) {
    hashTable[e] = true;
}
console.log(hashTable);

for (const e of smallArr) {
    if (hashTable[e]) {
        ans[i] = e;
        i++;
    }
}
console.log(ans); */
/* 
const xx = ['a', 'b', 'c', 'd', 'e', 'c', 'f', 'g', 'v'];
let hashTable = {};
for (const val of xx) {
    if (hashTable[val]) {
        console.log(val);
    } else {
        hashTable[val] = true;
    }
} */

// let xx = 'asss';
// for (const val of xx) {
//     console.log(val);
// }

/* var x = 10;

function foo() {
	x = 100;
	console.log(x);
}
console.log(x); // ?
foo();
console.log(x); // ? */

/* var x = 10;
function foo() {
	x = 100;
	console.log(x);

	function bar() {
		// 내부함수
		x = 1000;
		console.log(x); // ?
	}

	bar();
}
console.log(x); // ?
foo();
console.log(x); // ? */
/* const a = `${{ a: 1 }}`;
console.log(a);

const b = { a: 1 };
console.log(b);

const text = `${b}`;
console.log(text);
 */

let a = 'coffee';
let b = 'coke';
// let c = a.split('');
// let d = new Set(...c);
// let e = new Set(a);
// console.log(c);
// console.log(d);
// console.log(e);
// let p = b.split('');
// p.push('i');
// b.split('').push('i');
// console.log(b);
console.log(b);
// console.log(p);

let p = ['ABCFG', 'AC', 'CDE', 'ACDE', 'BCFG', 'ACDEH'];
let q = p.reduce((acc, cur) => acc.concat('', cur));
let r = p.join('');
console.log(q);
console.log(r);

let s = 'aa'.concat('', [1, 2, 3], [4, 6, 8]);
console.log(s);

let i = 'abcde';
let j = 'bcjd';
console.log(i.includes(j));

const x = '00000'.split('');
let w = x.slice();
console.log(w, typeof w);

let ax = 'xie'.split('');
console.log(ax);
console.log(ax.indexOf('x'));
ax.splice(0, 1, 's');
console.log(ax);

let ai = 'blind'.split('');
console.log(ai);
console.log(typeof ai.join(''));

console.log(0b100101 & 0b111011100);
let au = 5;
console.log(typeof au);
console.log(typeof au.toString(2));
console.log(5 & 4);
console.log((987).toString(16));
let az = '101011';
console.log(az[2]);
console.log(9 >>> 3);

let ap = Array(6);
ap.fill(1, 0, 6);
let ay = Array(5);
ay.fill(0, 0, 5);
ay.push(1);
console.log(ap);
console.log(ay);
let at = ay.join('');
console.log(at);
console.log('======================================');
const $sample = Array(8).fill(7, 0, 8);
let sample = $sample.slice();
console.log($sample);
console.log(sample);

let ar = [
	[1, 1, 1, 0, 0, 1, 1, 0],
	[1, 0, 1, 0, 0, 0, 0, 0],
];

console.log(ar[0][3]);

let aw = '';
let aq = '1011';
console.log(Boolean(+'0'));

let al = aw.concat('', aq[1]);
console.log('al:', al);

let am = '';

var str = 'ABCDE';
let av = str.slice(1, str.length);

console.log(typeof str[0]);
console.log(av);

for (let e of str) {
	console.log(e);
}

let ba = {};

ba['22'] = [1];
console.log(ba);
if (ba.hasOwnProperty('22')) {
	ba['22'].push(31);
}
console.log(ba);
console.log('==========================================================================================');
let iv = {
	2: {
		ab: 3,
		bc: 2,
	},
	3: {
		abc: 1,
		bcd: 2,
	},
};
console.log(iv);

let v = new Map([
	['cucumber', 500],
	['tomatoes', 350],
	['onion', 50],
]);
console.log(v);
v.set(13, 'dkdkdk');
console.log(v);
// 자료구조 후보군 3개
let dataStructure1 = new Map([
	[
		2 + 1,
		new Map([
			['ab', 2],
			['bc', 3],
		]),
	],
	[
		3,
		new Map([
			['bcd', 1],
			['cdf', 5],
		]),
	],
	[
		5,
		new Map([
			['bcdef', 4],
			['cdfgh', 2],
		]),
	],
]);
console.log(dataStructure1);
let dataStructure2 = {
	2: new Map([
		['ab', 2],
		['bc', 3],
	]),

	3: new Map([
		['bcd', 1],
		['cdf', 5],
	]),

	5: new Map([
		['bcdef', 4],
		['cdfgh', 2],
	]),
};
console.log(dataStructure2);
let dataStructure3 = [
	new Map([
		['ab', 2],
		['bc', 3],
	]),
	new Map([
		['bcd', 1],
		['cdf', 5],
	]),
	new Map([
		['bcdef', 4],
		['cdfgh', 2],
	]),
];
console.log(dataStructure3);

/* // JavaScript 함수 꼴
// 함수선언식
function i(){} o
i(){} x
function (){} x

// 함수표현식
let v = () => 11; o
let v = () => {
	...
	return 11;
}; o
let v = function(){}; o
let v = function i(){}; o
let v =  (){}; x   
let v =  i(){}; x   */
