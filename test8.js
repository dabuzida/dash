let student = {
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
console.log(student);
