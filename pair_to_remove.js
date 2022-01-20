let s = 'baabaxillixa';
let uniqueChar = new Set(s.split(''));
uniqueChar = [...uniqueChar];

console.log(uniqueChar);

console.log(s);

while (1) {
	let temp = s.slice(0);
	for (let i = 0; i < uniqueChar.length; i++) {
		let char = uniqueChar[i];
		let regExp = new RegExp(`${char}{2}`, 'g');
		s = s.replace(regExp, '');
	}
	if (!s.split('').some((e, id, array) => e == array[id + 1])) {
		break;
	}
	// if (s === temp) {
	// 	break;
	// }
}

console.log('답: ', s, s.length);

// let x = s.split('').filter((val, i) => );

/* let x = 'aaeaaasdfsadfaaaaa';
let char = alphabet[0];
let regExp = new RegExp(`${char}{2}`, 'g');

console.log(x);
x = x.replace(regExp, '');
console.log(x); */
