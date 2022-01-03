/* 
1. 배열의 원소를 2진수로 변환
2. 2진수를 1 0 을 # 공백 으로 변환
3. 배열1, 2를 합집합
4. # 공백으로 이루어진 배열을 리턴
*/

// const n = 5;
// const arr1 = [9, 20, 28, 18, 11];
// const arr2 = [30, 1, 21, 17, 28]; // ["#####","# # #", "### #", "# ##", "#####"]

const n = 6;
const arr1 = [46, 33, 33, 22, 31, 50];
const arr2 = [27, 56, 19, 14, 14, 10];

const union = []; // 배열1 2 합집합
const unionToB = [];

for (let i = 0; i < n; i++) {
	union.push(arr1[i] | arr2[i]);
}
console.log(union);

for (let i = 0; i < n; i++) {
	unionToB.push(binaryer(union[i], n));
}
console.log(unionToB);

function binaryer(decimal, oneSideN) {
	let bit = '';
	for (let i = 0; i < oneSideN; i++) {
		if (decimal % 2 === 1) {
			bit = '#' + bit;
		} else if (decimal % 2 === 0) {
			bit = ' ' + bit;
		}
		decimal = Math.floor(decimal / 2);
	}
	return bit; // type: string
}

// console.log(x.substring(3, 4));

/* for (let i = 0; i < n; i++) {
	arr1ToB.push(binaryer(arr1[i]));
	arr2ToB.push(binaryer(arr2[i]));
} */

/* console.log(arr1ToB);
console.log(arr2ToB); */
