// let s = 'a B z'; //"e F d"
// const n = 4;
let s = 'AB'; //"BC"
const n = 1;
// let s = 'a B dskfdsk    KDz SAFSDE'; //"BC"
// const n = 4;

let lowerAlphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
let upperAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

for (let i = 0; i < s.length; i++) {
	// if (s[i] === ' ') {
	// 	console.log('hi');
	// 	continue;
	// } else
	if (checkCase(s[i])) {
		let index = lowerAlphabet.indexOf(s[i]);
		s[i] = lowerAlphabet[(index + n) % 26];
	} else {
		let index = upperAlphabet.indexOf(s[i]);
		console.log(upperAlphabet[(index + n) % 26]);
		console.log(s[i]);

		// s[i] = upperAlphabet[(index + n) % 26];
	}
}

// for (let i = 0; i < ConversionList.length; i++) {
// 	let regExp = new RegExp(ConversionList[i], 'g');
// 	let targetSpelling;
// 	if (checkCase(ConversionList[i])) {
// 		let index = lowerAlphabet.indexOf(ConversionList[i]);
// 		targetSpelling = lowerAlphabet[(index + n) % 26];
// 	} else {
// 		let index = upperAlphabet.indexOf(ConversionList[i]);
// 		targetSpelling = upperAlphabet[(index + n) % 26];
// 	}

// 	s = s.replace(regExp, targetSpelling);
// }

console.log(s);

function checkCase(string) {
	// let lowerAlphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
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
