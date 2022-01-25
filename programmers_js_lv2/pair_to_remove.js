// let s = 'bbaabaxi7llixa';
let s = 'bbabba';
s = s.split('');
let ans = [];

for (let i = 0; i < s.length; i++) {
	let lastVal = ans[ans.length - 1];
	if (lastVal === s[i]) {
		ans.pop();
	} else {
		ans.push(s[i]);
	}
}

console.log(ans);

/* 
// let s = 'bbaabaxi7llixa';
let s = 'bbabba';

// s에서 존재하는 알파벳만 순회
// const subletter = [...new Set(s)];
// console.log(subletter);

// 그냥 a~z까지 전부 순회
// const letter = 'abcdefghijklmnopqrstuvwxyz'.split('');

for (let i = 0; i < s.length - 1; ) {
	if (i < 0) {
		i = 0;
	}
	let sample1 = s[i] + s[i + 1];
	let sample2 = s[i] + s[i];
	if (sample1 == sample2) {
		let regExp = new RegExp(`${sample2}`, 'g');
		s = s.replace(regExp, '');
		// i = i == 0 ? i : --i;
	} else {
		i++;
	}
}
console.log(s.length, s);
 */
