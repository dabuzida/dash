const rows = 6;
const columns = 6;
let matrix = [];

for (let i = 0; i < rows; i++) {
	matrix.push(new Array());
	for (let j = 0; j < columns; j++) {
		matrix[i].push((i + 1) * (j + 1));
	}
}
console.log(matrix);

function rotateMatrix(matrix) {}
