/* let x = [
	{ stage: 22, failRate: 312 },
	{ stage: 1232, failRate: 7565 },
	{ stage: 454, failRate: 568679 },
	{ stage: 563, failRate: 6785 },
];

let y = x.map(e => e.stage);
let xx;
console.log(Math.floor(-3.5));
console.log(Math.trunc(-3.5)); */

/* function multiplyNumeric(obj) {
	for (let key in obj) {
		if (typeof obj[key] === 'number') {
			obj[key] *= 2;
		}
	}
}

let menu = {
	width: 200,
	height: 300,
	title: 'My menu',
};

multiplyNumeric(menu);
console.log(menu); */

/* let user = {
	name: 'John',
	age: 30,
};

let clone = Object.assign({}, user);
console.log(user === clone); // true, 같은 객체입니다. */

let x = 'computer';

const dartResult = '0S2D*3T'; //  37
let y = dartResult.search(/[^^0-10]/g);
// let y = dartResult.search(/2/);

// console.log(dartResult.substring(y, y + 1));

// let z = dartResult.indexOf(y);

console.log(y);
// console.log(z);
