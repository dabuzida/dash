let student = {
	id: 23,
	name: 'Kim',
	age: 33,
	major: 'computer',
	22: 'hi',
};

console.log(student[id]);

student[33] = 'sadkfjsdlk';

console.log(student[22]);
console.log(student[33]);

/* function uniquePaths(rows, columns, memo = {}) {
	console.log(memo);
	if (rows === 1 || columns === 1) {
		return 1;
	}

	if (!memo[[rows, columns]]) {
		memo[[rows, columns]] = uniquePaths(rows - 1, columns, memo) + uniquePaths(rows, columns - 1, memo);
	}

	return memo[[rows, columns]];
}

let ttt = uniquePaths(3, 7);
console.log(ttt);
 */
