let nums = [1, 2, 7, 6, 4]; //result 4 , 소수가 되는 경우의  개수 구하기
let emptyArr = [];
let cnt = 0;

// 모든 경우의 수에 대해, 서로 다른 3개를 골라서 더하는 방법?

for (let i = 0; i < nums.length - 2; i++) {
  for (let j = i + 1; j < nums.length - 1; j++) {
    for (let k = j + 1; k < nums.length; k++) {
      emptyArr.push(nums[i] + nums[j] + nums[k]);
    }
  }
}
console.log(emptyArr);

// 소수: 2부터 자기자신까지 나눴을때 나머지가 인 경우는 한가지. 자기자신
emptyArr.forEach(e => {
  for (let i = 2; i < e; i++) {
    // console.log(e, typeof e);
    // console.log(e%i, typeof e%i);

    if (e % i != 0) {
      // console.log(e);
      i == e-1 ? cnt++ : null;
    }
  }
});
console.log(cnt);
// console.log(9%2 + 13%4);
// console.log(typeof 9%2);



