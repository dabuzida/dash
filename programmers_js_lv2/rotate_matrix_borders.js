// const rows = 6;
// const columns = 6;
// const queries = [
// 	[2, 2, 5, 4],
// 	[3, 3, 6, 6],
// 	[5, 1, 6, 3],
// ];
const rows = 3;
const columns = 3;
const queries = [
	[1, 1, 2, 2],
	[1, 2, 2, 3],
	[2, 1, 3, 2],
	[2, 2, 3, 3],
];

let matrix = [];
let ans = [];

for (let i = 0; i < rows; i++) {
	matrix.push(new Array());
	for (let j = 0; j < columns; j++) {
		// matrix[i].push((i + 1) * (j + 1));
		matrix[i].push(1 + i * columns + j);
	}
}
// console.log(matrix);

// for (const query of queries) {
// 	rotateMatrix(matrix, query);
// 	console.log(matrix);
// 	console.log(ans);
// }

function rotateMatrix(matrix, query) {
	let x1 = query[0] - 1;
	let y1 = query[1] - 1;
	let x2 = query[2] - 1;
	let y2 = query[3] - 1;

	let temp = matrix[x1][y1];
	let min = matrix[x1][y1];

	for (let i = x1; i < x2; i++) {
		if (matrix[i + 1][y1] < min) {
			min = matrix[i + 1][y1];
		}
		matrix[i][y1] = matrix[i + 1][y1];
	}
	for (let i = y1; i < y2; i++) {
		if (matrix[x2][i + 1] < min) {
			min = matrix[x2][i + 1];
		}
		matrix[x2][i] = matrix[x2][i + 1];
	}
	for (let i = x2; i > x1; i--) {
		if (matrix[i - 1][y2] < min) {
			min = matrix[i - 1][y2];
		}
		matrix[i][y2] = matrix[i - 1][y2];
	}
	for (let i = y2; i > y1 + 1; i--) {
		if (matrix[x1][i - 1] < min) {
			min = matrix[x1][i - 1];
		}
		matrix[x1][i] = matrix[x1][i - 1];
	}
	matrix[x1][y1 + 1] = temp;
	ans.push(min);
}

const a = [...Array(rows)].map((_, r) => [...Array(columns)].map((_, c) => r * columns + c + 1));
let x = [...Array(2)];
let y = new Array(2);
console.log(y);
