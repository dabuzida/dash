// let nums = [3,2,4,5];
// let arr = [...new Set(nums)];

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
let p = b.split('');
p.push('i');
// b.split('').push('i');
// console.log(b);
console.log(b);
console.log(p);
