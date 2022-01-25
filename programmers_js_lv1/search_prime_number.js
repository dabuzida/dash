// 2부터 제곱근까지 소수인지 일일이 검사

function solution(n) {
	let cnt = Math.floor(n / 2) - 1;

	//소수가 아닌것의 개수
	for (let i = 3; i <= n; i = i + 2) {
		for (let j = 2; j <= Math.sqrt(i); j++) {
			if (i % j === 0) {
				cnt++;
				break;
			}
		}
	}
	return n - 1 - cnt;
}
