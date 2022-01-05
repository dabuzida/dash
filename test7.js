// const n = 1000000;
const n = 12;

const pNALTN = findPNumLTN(n);

console.log(pNALTN.length);
console.log(pNALTN);
console.log('----------------------');

// pNALTN에서 Math.sqrt(i) 보다 큰 첫번째 수 바로 전 색인
// let a = pNALTN.findIndex(e => e > Math.floor(Math.sqrt(10))) - 1;
// console.log(a);
let pNcol = [];
// 2부터 n까지 소수 목록 구하기
for (let i = 2; i <= n; i++) {
	let limitIndex = pNALTN.findIndex(e => e > Math.floor(Math.sqrt(i))); // - 1;
	let checkArray = pNALTN.slice(0, limitIndex);
	console.log(i, limitIndex + ' <=====> ' + checkArray);
	for (let j = 0; j < checkArray.length; j++) {
		if (i % checkArray[j] === 0) {
			break;
		}
		pNcol.push(i);
	}

	// for (let j = 2; j <= Math.sqrt(i); j++) {
	// 	// 2부터 i의 제곱근까지 모두 나눠보는게 아니라
	// 	// 2부터 i의 제곱근 사이의 숫자 중 소수만으로 나눠보고 판별하는게 이득

	// 	if (i % j === 0) {
	// 		cnt++;
	// 		// notPrimeNum.push(i);
	// 		break;
	// 	}
	// }
}

console.log(pNcol);

function findPNumLTN(n) {
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
