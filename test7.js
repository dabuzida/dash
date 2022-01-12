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

/* const array = ['ab', 'c', 'def', 'ghij'];

function countString(array) {
	if (array.length === 1) {
		return array[0].length;
	}
	return array[0].length + countString(array.splice(1, array.length - 1));
}

let ans = countString(array);
console.log(ans); */

// let x = [1];
// let y = x.slice(1);
// console.log(y[0] % 2);

// if (NaN) {
// 	console.log(22);
// }

// const array = [1, 3, 4, 7, 10];
function evenArray(array) {
	// if (array.length === 1) {
	// 	return array[0] % 2 ? null :
	// }
	// return array[0] % 2 ? evenArray(array.slice(1)) : evenArray(array.slice(1)).push(array[0]);

	if (array.length === 1) {
		if (array[0] % 2 === 1) {
			return [];
		} else if (array[0] % 2 === 0) {
			return [array[0]];
		}
	}

	if (array[0] % 2 === 1) {
		return evenArray(array.slice(1));
	} else if (array[0] % 2 === 0) {
		return [...evenArray(array.slice(1)), array[0]];
	}
}
// return !(array[0] % 2) ? ans.push(array[0]) + evenArray(array.slice(1)) : evenArray(array.slice(1));

let x = evenArray([1, 3, 4, 7, 10, 2777]);
console.log(x);

// for (let i = 1; i < 6; i++) {
// 	if (!i % 2) {
// 		console.log(22);
// 	}
// }

// if (!0) {
// 	console.log(32323);
// }

function selectEven(array) {
	if (array.length === 0) {
		return [];
	}

	if (array[0] % 2 === 0) {
		return [array[0]].concat(selectEven(array.slice(1)));
	} else {
		return selectEven(array.slice(1));
	}
}

console.log(selectEven([1, 2, 3, 4, 22, 11]));
