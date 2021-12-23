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

// console.log(emptyArr[0]%3);
// console.log(typeof emptyArr[0]%2);

// 소수: 2부터 자기자신까지 나눴을때 나머지가 인 경우는 한가지. 자기자신
/* emptyArr.forEach(e => {
  if (e === 2) {
    cnt++;
  }
  else {

    for (let i = 2; i < e; i++) {
      // console.log('---');
      // console.log(e);
      // console.log(typeof e);
      // console.log(i);
      // console.log(typeof i);
      // console.log(e%i); // 나머지가 출력이 잘됨
      // console.log(typeof e%i); // / % 연산결과 항상 자료형 nan이 떠서 불가능
      // console.log('---');

      let index = i;
      let element = e;

      if (element % index != 0) {
        if (index == element - 1) {
          cnt++;
        }
      }
    }

  }
});

console.log(cnt); */

// console.log(9%2 + 13%4);
// console.log(typeof 9%2);

/* console.log('==================================');
let b = 22;
let c = 32;
let d = b%c;
let e = b/c;
console.log(d);
console.log(typeof d);
coksole.log(typeof e);
console.log(typeof 434%11);
 */


let n = [5, 6, 7];
for (let i = 0; i < n.length; i++) {

  for (let j = 2; j < n[i]; j++) {
    // let target = n[i];
    // let divisor = j;
    let z = n[i] % j;
    console.log(z);
    console.log(typeof z);
    if (z == 0) {
      console.log(true);
    }
  }
}

console.log(22222222222222222);


