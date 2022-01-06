// n이하의 소수 목록을 생성 후, n이하의 임의의 수 i가 소수인지 체크할때 사용

// const n = 1000000;
const n = 1000;
const prmArrLTN = findPrmArrLTN(n);
let cnt = 0;
console.log(prmArrLTN);
console.log(prmArrLTN.length);

// 소수가 아닌 것의 개수 카운트
// prmArrLTN 목록으로 해당 수가 1개로나 나눠진다면 카운트

for (let i = 2; i < n + 1; i++) {
	let lastIdx = prmArrLTN.findIndex(e => e > Math.floor(Math.sqrt(i)));
	let divisor = prmArrLTN.slice(0, lastIdx);

	if (notPrimeFinder(i, divisor)) {
		cnt++;
	}
}

console.log(n - 1 - cnt);

function notPrimeFinder(n, divisor) {
	for (let i = 0; i < divisor.length; i++) {
		if (n % divisor[i] === 0) {
			return true;
		}
	}
	return false;
}

function findPrmArrLTN(n) {
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
