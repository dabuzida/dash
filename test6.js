// n보다 작은 소수 목록 만들기

const n = 10000;
let primeList = [];
// 2, 3을 넣을지 말지
if (n >= 2) {
	primeList.push(2);
	primeList.push(3);
} else if (n >= 3) {
	primeList.push(3);
}

for (let i = 4; i < n; i++) {
	// 2~n에 대하여
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
console.log(primeList.length);
console.log(primeList);
