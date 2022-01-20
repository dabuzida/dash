// let sum = 0.1 + 0.2;
// // alert( +sum.toFixed(2) );
// console.log(0.1 + 0.2);
// console.log(0.3);

// console.log(sum.toFixed(2) == 0.3);
// console.log((0.3).toFixed(20));

/* console.log((6.35).toFixed(20));
console.log((6.35 * 10).toFixed(20));
console.log(Math.round(6.35 * 10));
console.log(Math.round(6.35 * 10) / 10);

console.log(+(6.35).toFixed(2));
console.log((+(6.35).toFixed(2)).toFixed(1)); */

// console.log(+((6.35 * 100) / 100).toFixed(1));

/* console.log(isFinite(null));
console.log(+null);

console.log(0.2 + 0.2);
console.log((0.2 * 50).toFixed(20)); */

// function readNumber(n) {
//     do{
//         let y = prompt('숫자만 입력해', '');
//         let x = +y;

//         // if(Object.is(x, NaN) || y.length === 0)
//     } while(Object.is(x, NaN) && !y.length && y === null)
// }

/* function randomInteger(min, max) {
	let x = Math.floor((max - min + 1) * Math.random() + min);
	// let x = Math.trunc((max - min + 1) * Math.random() + min);

	return x;
}

for (let i = 0; i < 10; i++) {
	console.log(randomInteger(-1, 3));
} */

let s = 'baabaa';
let pos = 1;
let target = s.slice(pos, pos + 2);
let regExp = new RegExp(target);
s.replace(regExp, '2');
// console.log(s);

let ss = 'aaaaaaaaa bd xxxxxxxxxxxfiiaaaaaaaaa';
console.log(ss, ss.length);

// let x = ss.replace(/[aix]{2,}/g, '^');
// console.log(x);

let y = ss.replace(/[a-z]{2,}/g, '=');
console.log(y);
console.log('########################################################');

// const targetStr = 'AABBZZAaBb';

// // 'A' ~ 'Z'가 한번 이상 반복되는 문자열을 반복 검색
// // 'A', 'AA', 'AAA', ... 또는 'B', 'BB', 'BBB', ... ~ 또는 'Z', 'ZZ', 'ZZZ', ...

// const regexr = /[A-Z]+/g;

// console.log(targetStr.match(regexr)); //

function ask(num, yes, no) {
	yes();
	no();
	// if (num) yes();
	// else no();
}

ask(
	0,
	function good() {
		console.log('동의하셨습니다.');
	},
	function () {
		console.log('취소 버튼을 누르셨습니다.');
	},
);
