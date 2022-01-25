// const dartResult = '1S2D*3T'; //  37
// const dartResult = '1D2S#10S'; // 9
// const dartResult = '10D0S#10S'; // 103
// const dartResult = '1D2S0T'; //  3
// const dartResult = '1S*2T*3S'; //  23
// const dartResult = '1D#2S*3S'; //  5
// const dartResult = '1T2D3D#'; //  -4
// const dartResult = '1D2S3T*'; //  59
// const dartResult = '10D4S10D'; //  204
// const dartResult = '1S2D*3T*'; // 72
// const dartResult = '1S*2D*3T*'; // 74
// const dartResult = '1S2D3T*'; // 63
const dartResult = '10D10S0D'; //  204

let index1stNum = 0;
let index2ndNum;
let index3rdNum;

let extractNum = dartResult.replace(/[^0-9]/g, ' ');
let arrayNum = extractNum.split(/[ ]/g);

console.log(extractNum, extractNum.length);
console.log(arrayNum);

while (arrayNum.findIndex(e => e.length < 1) !== -1) {
	let n = arrayNum.findIndex(e => e.length < 1);
	arrayNum.splice(n, 1);
}

console.log(arrayNum);

let stringLeng = arrayNum[0].length;
for (let i = stringLeng; i < dartResult.length; i++) {
	if (dartResult[i] === arrayNum[1][0]) {
		index2ndNum = i;
		break;
	}
}

stringLeng = arrayNum[1].length;
for (let i = index2ndNum + stringLeng; i < dartResult.length; i++) {
	if (dartResult[i] === arrayNum[2][0]) {
		index3rdNum = i;
		break;
	}
}

console.log(index1stNum, index2ndNum, index3rdNum);

let firstResult = dartResult.substring(index1stNum, index2ndNum);
let secondResult = dartResult.substring(index2ndNum, index3rdNum);
let thirdResult = dartResult.substring(index3rdNum, dartResult.length);
const result = [firstResult, secondResult, thirdResult];
console.log(dartResult);

console.log(firstResult);
console.log(secondResult);
console.log(thirdResult);

let point = [];
for (let i = 0; i < result.length; i++) {
	let base = arrayNum[i];
	let exp = result[i].includes('S') ? 1 : result[i].includes('D') ? 2 : 3;
	let hash = 1;
	let asterisk = 1;

	if (result[i].includes('#')) {
		hash = -1;
	}
	if (result[i].includes('*')) {
		asterisk = 2;
		point[i - 1] *= 2;
	}

	point[i] = base ** exp * hash * asterisk;
}
console.log(point[0], point[1], point[2]);
console.log(point[0] + point[1] + point[2]);
