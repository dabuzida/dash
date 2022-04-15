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

/* let x = 'computer';

const dartResult = '10S2D*3T'; //  37

let y = dartResult.replace(/[^0-9]/g, " ");
*/

// const orders = ['ABCFG', 'AC', 'CDE', 'ACDE', 'BCFG', 'ACDEH'];
// const course = [2, 3, 4];
// result = ['AC', 'ACDE', 'BCFG', 'CDE'];
const orders = ['ABCDE', 'AB', 'CD', 'ADE', 'XYZ', 'XYZ', 'ACD'];
const course = [2, 3, 5];
// result = ["ACD", "AD", "ADE", "CD", "XYZ"];
// const orders = ['XYZ', 'XWY', 'WXA'];
// const course = [2, 3, 4];
// result = ["WX", "XY"];

let _course = [];

for (let i = 0; i < course.length; i++) {
	let _obj = {};
	for (let j = 0; j < orders.length; j++) {
		let count = course[j];

		let subStr = '';
		subStr.concat();
	}
}

for (let e of orders) {
	for (let count of course) {
		if (e.length >= count) {
		}
	}
}
