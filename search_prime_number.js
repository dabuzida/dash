const n = 1000000;
const pNALTN = findPNumLTN(n); // prime number array less than n

let cnt = 0; //소수의 개수

//소수가 아닌것의 개수를 구하기
let notPrimeNum = [];
for (let i = 2; i <= n; i++) {
	for (let j = 2; j <= Math.sqrt(i); j++) {
		// 2부터 i의 제곱근까지 모두 나눠보는게 아니라
		// 2부터 i의 제곱근 사이의 숫자 중 소수만으로 나눠보고 판별하는게 이득

		if (i % j === 0) {
			cnt++;
			// notPrimeNum.push(i);
			break;
		}
	}
}
console.log(n - 1 - cnt);

// n보다 작은 소수 목록 구하기
function findPNumLTN(n) {
	// find prime number less than n
	let primeList = [];
	if (n >= 2) {
		primeList = [2, 3];
	} else if (n >= 3) {
		primeList = [3];
	}

	for (let i = 4; i < n; i++) {
		let cnt = 0;
		for (let j = 2; j <= Math.sqrt(i); j++) {
			if (i % j !== 0) {
				cnt++;
			}
			if (cnt === Math.floor(Math.sqrt(i)) - 1) {
				primeList.push(i);
			}
		}
	}
	return primeList;
}

let x = 1000;
let xx = findPNumLTN(x);
console.log(xx.length);
console.log(xx);
