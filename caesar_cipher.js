// let s = 'a B z'; //"e F d"
// const n = 4;
// let s = 'AB'; //"BC"
// const n = 1;
let s = 'a B dskfdsk    KDz SAFSDE'; //"BC"
const n = 4;

let arrayS = s.split('');

let lowerAlphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
let upperAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

for (let i = 0; i < arrayS.length; i++) {
	if (arrayS[i] == ' ') {
		continue;
	} else if (checkCase(arrayS[i])) {
		let index = lowerAlphabet.indexOf(arrayS[i]);
		arrayS[i] = lowerAlphabet[(index + n) % 26];
	} else {
		let index = upperAlphabet.indexOf(arrayS[i]);
		arrayS[i] = upperAlphabet[(index + n) % 26];
	}
}
s = arrayS.join('');
console.log(s);

function checkCase(string) {
	return lowerAlphabet.includes(string);
}

/* 정규식으로 알파벳과 일치하는 소문자 대문자 배열 받아서

그것만 replace로 다바꾸기

(s[i]의 알파벳 배열에서의 색인 + n ) % 26 */

/* let x = 'cancould';
let y = x.match(/[can]/g);
let set = new Set(y);
let nonDuplicateY = [...set];
console.log(nonDuplicateY); */

/* let lowerS = s.replace(/[A-Z]/g, ' ').split('');
let upperS = s.replace(/[a-z]/g, ' ').split('');

console.log(lowerS);
console.log(upperS); */
