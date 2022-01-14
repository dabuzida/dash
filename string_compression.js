// let s ='aabbaccc'; // 단위: 1, 길이: 7
// let s ='ababcdcdababcdcd'; // 8, 9
// let s ='abcabcdede'; // 3, 8
// let s ='xababcdcdababcdcd'; // x없음, 17
// let s = 'abcabcabcabcdededededede'; // 6, 14 / 4, 17 / 3, 16 / 2, 15
let s = 's';
let lengthByN = [];
let flag = 0;
for (let n = 1; n <= Math.floor(s.length / 2); n++) {
	let ans = '';
	for (let i = 0; i < s.length; i += flag) {
		let char = s.slice(i, i + n);
		let cnt = 1;

		for (let j = i + n; j < s.length; j += n) {
			if (s.indexOf(char, j) === j) {
				cnt++;
				continue;
			}
			break;
		}
		flag = cnt * n;

		if (cnt > 1) {
			ans = ans + cnt + char;
		} else {
			ans = ans + char;
		}
	}
	// console.log(ans.length);

	lengthByN.push(ans.length);
}
console.log(lengthByN);
console.log(Math.min(...lengthByN));

/* 
// let s ='aabbaccc'; // 단위: 1, 길이: 7
// let s ='ababcdcdababcdcd'; // 8, 9
// let s ='abcabcdede'; // 3, 8
let s = 'abcabcabcabcdededededede'; // 6, 14 / 4, 17 / 3, 16 / 2, 15
// let s ='xababcdcdababcdcd'; // x없음, 17

// n을 고정했을때

let box = [];
let ans = '';
let n = 3;
let flag = 0;

for (let i = 0; i < s.length; i += flag) {
	let char = s.slice(i, i + n);
	let cnt = 1;

	for (let j = i + n; j < s.length; j += n) {
		if (s.indexOf(char, j) === j) {
			cnt++;
			continue;
		}
		break;
	}
	flag = cnt * n;
	box.push(cnt);

	if (cnt > 1) {
		ans = ans + cnt + char;
	} else {
		ans = ans + char;
	}
}

console.log(ans);
console.log(ans.length);
// console.log(box);
 */
