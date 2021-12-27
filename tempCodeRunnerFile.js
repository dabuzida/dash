console.log();

// 2 모음 배열에서 하나씩 빼서 개수를 샌다 // 3 수를 색인에, 개수는 값으로 할당하는 배열을 생성
let arrByNumByCnt = [];
let cntNum = 0;
nums.forEach(e => {
    // 종류별 모음 배열의 숫자를 하나빼서 숫자들 배열의 원소들 중 일치하는 것의 갯수
    if(numByType.includes(e)){
        cntNum++;
    }
    arrByNumByCnt[e] = cntNum;
    cntNum = 0;
})
console.log(arrByNumByCnt);

