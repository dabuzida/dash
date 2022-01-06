//  에라토스테네스의 체 이용하여 소수 판별

/* 
1 1부터 n까지 수를 담은 배열 생성 
2 n의 제곱근 이하의 모든 소수 목록을 구한다
3 [2, 3, ... , Math.floor(Math.sqrt(n))]
4 배열 모든 원소에 대해서 하나씩, 2배, 3배... 를 하여 처음 생성한 배열에서 해당 수를 제거한다
	i*2, i*3, i*4... 를 배열에서 있으면, 제거
5 처음 생성한 배열의 길이를 반환
*/

// const n = 1000000;
const n = 200;
let arrUpToN = [];
const primeNum = findPrimeNum(n);

for (let i = 2; i < n + 1; i++) {
	arrUpToN.push(i);
}

for (let i = 0; i < primeNum.length; i++) {
	for (let j = 2; primeNum[i] * j < n + 1; j++) {
		let xx = arrUpToN.indexOf(primeNum[i] * j);
		if (xx > -1) {
			arrUpToN.splice(xx, 1);
		}
	}
}

console.log(arrUpToN);
console.log(arrUpToN.length);

function findPrimeNum(n) {
	let prmNumArr = [];
	for (let i = 2; i < n + 1; i++) {
		if (checkPrime(i)) {
			prmNumArr.push(i);
		}
	}
	return prmNumArr;
}

function checkPrime(n) {
	for (let i = 2; i <= Math.sqrt(n); i++) {
		if (n % i === 0) {
			return false;
		}
	}
	return true;
}
