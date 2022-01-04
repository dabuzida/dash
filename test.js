const nums = [3, 2, 4, 5, 1, 3, 5, 12];
console.log(nums.length);
const numCanHave = nums.length / 2;

// 1 숫자 종류 모음 배열을 만들고
const numByType = [];
for (let i = 0; i < nums.length; i++) {
	while (!numByType.includes(nums[i])) {
		numByType.push(nums[i]);
	}
}

console.log(numByType);

// 제일 큰 숫자 만큼의 배열을 생성하며 값은 0으로 생성
const maxNum = Math.max(...numByType);
const arrByNumByCnt = new Array(maxNum).fill(0);

// 2 모음 배열에서 하나씩 빼서 개수를 샌다 // 3 수를 색인에, 개수는 값으로 할당하는 배열을 생성
nums.forEach(e => {
	if (numByType.includes(e)) {
		arrByNumByCnt[e - 1]++;
	}
});
console.log(arrByNumByCnt);

for (let i = 0; i < 22; i++) {
	console.log(22);
}

console.log('hihi');
console.log('good');
console.log('bye');

const aa = 'single';
const daa = 'goodbye';

let x = 'xaskfjksdlj';
console.log(x.substring(3, 4));
console.log(x);
