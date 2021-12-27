let nums = [3,2,4,5,1,3,5,12];
let half = nums.length/2;

// 1 숫자 종류 모음 배열을 만들고
let numByType = []; // 길이 = 폰켓몬을 종류별로 선택할 수 있는 최대값
for(let i=0; i<nums.length; i++){
    while(!numByType.includes(nums[i])){
        numByType.push(nums[i]);
    }
}

if(half <= numByType.length){
    console.log(half);
    // return half;
} else{
    console.log(numByType.length);
    // return numByType.length;
}



//  이 아래는 필요없음. 고민은 했지만 필요없던 고민

// 제일 큰 숫자 만큼의 배열을 생성하며 값은 0으로 생성
let maxNum = Math.max(...numByType);
let arrByNumByCnt = new Array(maxNum).fill(0);

// 2 모음 배열에서 하나씩 빼서 개수를 샌다 // 3 수를 색인에, 개수는 값으로 할당하는 배열을 생성
nums.forEach(e => {
    if(numByType.includes(e)){
        arrByNumByCnt[e-1]++;
    }
})
console.log(arrByNumByCnt);





