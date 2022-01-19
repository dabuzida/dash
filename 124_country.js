// const n = 10; //41
// const n = 13; //111
// const n = 14; //112
// const n = 15; //114
const n = 7; //114

let ans = [];
let m = 1;
const mappingDigit = {
	1: '1',
	2: '2',
	3: '4',
};
while (condition(n, m) > 0) {
	// let quotient = Math.floor(condition(n, m) / Math.pow(3, m));
	let remainder = condition(n, m) % Math.pow(3, m); //=== 0 ? Math.pow(3, m): condition(n, m)%Math.pow(3, m);
	remainder = remainder === 0 ? Math.pow(3, m) : remainder;
	let mappingId = Math.ceil(remainder / Math.pow(3, m - 1));
	ans.unshift(mappingDigit[mappingId]);
	m++;
}
let x = ans.join('');
console.log(+x);

function condition(n, m) {
	return n - ((Math.pow(3, m - 1) - 1) * 3) / 2;
}
/* 
// 다른사람 풀이  n-1 이 의미는?
function change124(n) {
    return n === 0 ? '' : change124(parseInt((n - 1) / 3)) + [1, 2, 4][(n - 1) % 3];
  }
 */
