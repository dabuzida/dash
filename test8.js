/* let student = {
	id: 23,
	name: 'Kim',
	age: 33,
	major: 'computer',
	22: 'hi',
};

let x = 22;
let y = 33;
student[[x, y]] = 555;

console.log(student[`id`]);
student[33] = 'sadkfjsdlk';
console.log(Boolean(student[22]));
console.log(student[22]);
console.log(student[33]);
console.log(student); */
// let progresses = [95, 90, 99, 99, 80, 99];
// let speeds = [1, 1, 1, 1, 1, 1];

let s = 'baabaa'; //1

while (checkRepetition(s)) {
	let pos;
	for (let i = 0; i < s.length - 1; i++) {
		if (s[i] === s[i + 1]) {
			pos = i;
			break;
		}
	}

	let target = s.slice(pos, pos + 2);
	let regExp = new RegExp(target);
	s = s.replace(regExp, '');
}

let target = s.slice(pos, pos + 2);
s = s.replace(target, '');

console.log(s.length === 0);

function checkRepetition(s) {
	for (let i = 0; i < s.length - 1; i++) {
		if (s[i] === s[i + 1]) {
			return true;
		}
	}
	return false;
}
