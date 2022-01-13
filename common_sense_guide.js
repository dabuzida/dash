/* 
재귀함수 작성요령
1. 이미 구현된 함수 상정
2. 하위문제 찾기
3. 하위문제를 구현된 함수에 적용하면 어떻게 될지 생각
4. 3번 생각할때 기저조건 생각
*/

/* 
// 11장 1번
const array = ['ab', 'c', 'def', 'ghij'];

function countString(array) {
	if (array.length === 1) {
		return array[0].length;
	}
	return array[0].length + countString(array.splice(1, array.length - 1));
}
let ans = countString(array);
console.log(ans); 
*/

/* 
// 11장 2번
function evenArray(array) {
	if (!array.length) {
		return [];
	}

	if (array[0] % 2) {
		return evenArray(array.slice(1));
	} else {
		return [...evenArray(array.slice(1)), array[0]];
	}
}

let x = evenArray([1, 3, 4, 7, 10, 2777]);
console.log(x); 
*/

/* 
// 11장 3번
function outputTriangularNum(n) {
	if (n === 1) {
		return 1;
	}
	return n + outputTriangularNum(n - 1);
}

console.log(outputTriangularNum(7)); 
*/

/* 
// 11장 4번
function returnX(str) {
	if (str[0] === 'x') {
		return 0;
	} //	str.substring(1, 8)
	return returnX(str.substring(1, str.length)) + 1;
}
console.log(returnX('abcdefghijklmnopqrstuvwxyz'));
 */

// 11장 5번
/* 
let m = 3;
let n = 7;
function paths(m, n) {
	if (m === 1 && n >= 2) {
		return 1;
	} else if (m >= 2 && n === 1) {
		return 1;
	} else if (m > 1 && n > 1) {
		return paths(m - 1, n) + paths(m, n - 1);
	}
}
const test = paths(m, n);
console.log(test); 
*/

// 12장 2번
/* function golomb(n, memo = {}) {
	if (n === 1) {
		return 1;
	}

	if (!(n in memo)) {
		memo[n] = 1 + golomb(n - golomb(golomb(n - 1, memo), memo), memo);
		return memo[n];
	}

	return memo[n];
}
const test = golomb(3);
console.log(test); */

// 12장 3번
let m = 3;
let n = 7;
function paths(m, n, memo = {}) {
	console.log(memo);
	if (m === 1 || n === 1) {
		return 1;
	} else if (!(`${m}, ${n}` in memo)) {
		memo[`${m}, ${n}`] = paths(m - 1, n, memo) + paths(m, n - 1, memo);
		return memo[`${m}, ${n}`];
	}
	return memo[`${m}, ${n}`];
}
const test = paths(m, n);
console.log(test);

/* function uniquePaths(rows, columns) {
	if (rows === 1 || columns === 1) {
		return 1;
	}

	return uniquePaths(rows - 1, columns) + uniquePaths(rows, columns - 1);
}

let aa = uniquePaths(3, 4);
console.log(aa); */

// 객체 프로퍼티 접근 시 프로퍼티 키의 자료형 숫자 안되는지ㅏ
// 백틱 말고 ''와 \m \n 이용 불가능?
