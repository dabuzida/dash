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

// let s = 'baabaa';
// let pos = 1;
// let target = s.slice(pos, pos + 2);
// let regExp = new RegExp(target);
// s.replace(regExp, '2');
// console.log(s);

// let ss = 'aaaaaaaaa bd xxxxxxxxxxxfiiaaaaaaaaa';
// console.log(ss, ss.length);

// let x = ss.replace(/[aix]{2,}/g, '^');
// console.log(x);

// let y = ss.replace(/[a-z]{2,}/g, '=');
/* let y = ss.replace(/a{2,}/g, '=');
console.log(y);
console.log('########################################################');

let s = 'abcdccccccccc';
let x = s.slice(1, 3);
let d = s.split('')[1];

// console.log(x + x);
// console.log(d + d);

for (let i = 0; i < s.length; i++) {
	console.log(s.length);

	s = s.replace(/c/g, '');
}

let set1 = new Set([1, 2, 3]);
let set2 = new Set('bbaabaxi7llixa');
console.log(set1);
console.log(set2); */

let x = [1, 2, 3, 5];
function change(array) {
	let temp = array[3];
	array[3] = array[0];
	array[0] = temp;
	return;
}
change(x);
console.log(x);
