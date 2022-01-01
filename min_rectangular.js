/* let sizes = [
	[60, 50],
	[30, 70],
	[60, 30],
	[80, 40],
]; */
/* let sizes = [
	[10, 7],
	[12, 3],
	[8, 15],
	[14, 7],
	[5, 15],
]; */

let sizes = [
	[14, 4],
	[19, 6],
	[6, 16],
	[18, 7],
	[7, 11],
];

let maxNum = 0;
let maxNumR; // row
let maxNumC; // column
for (let i = 0; i < sizes.length; i++) {
	for (let j = 0; j < 2; j++) {
		if (maxNum < sizes[i][j]) {
			maxNum = sizes[i][j];
			maxNumR = i;
			maxNumC = j;
		}
	}
}

if (sizes[maxNumR][0] < sizes[maxNumR][1]) {
	changeWH(maxNumR, sizes[maxNumR][0], sizes[maxNumR][1]);
}

for (let i = 0; i < sizes.length; i++) {
	if (sizes[i][0] < sizes[i][1]) {
		changeWH(i, sizes[i][0], sizes[i][1]);
	}
}

let maxH = sizes[0][1];
for (let i = 1; i < sizes.length; i++) {
	if (maxH < sizes[i][1]) {
		maxH = sizes[i][1];
	}
}

console.log(maxNum * maxH);

function changeWH(i, w, h) {
	sizes[i][0] = h;
	sizes[i][1] = w;
}
