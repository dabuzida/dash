/* const stages = [2, 1, 2, 6, 2, 4, 3, 3];
const N = 5; */

/* const stages = [4,4,4,4,4]; // [0, 0, 0, 1] => [4,1,2,3]
const N = 4; */

/* const stages = [4,4,4,4,4];
const N = 5; */

/* const stages = [1,2,2,1,3];
const N = 1; */

/* const stages = [2];
const N = 1; */

// 단계별 실패율을 새로운 배열에서 단계는 색인에 실패율은 값에 사상(mapping)시킨 후,
// 실패율 내림차순으로 해당 색인을 담는 배열을 만드려 함
// 다른사람 풀이는 js의 자료구조인 속성을 이용해서 [{a:11, b:22}, {}, {}...] 앞에는 색인, 뒤에는 실패율을 담아
// 더 짧고 간결하게 구현함

const N = 500;
let stages = [];
for(let i=0; i<200000; i++){
    let n = Math.floor(Math.random()*501 + 1); // 1~501
    stages.push(n);
}

let failRateByStage = [];
// const maxStage = Math.max(...stages);  // stages 배열의 크기가 110,000정도 되면 Runtime Error 발생
// const minStage = Math.min(...stages);  // 종류는 RangeError: Maximum call stack size exceeded 발생
// for로 비교하면서 max, min을 초기화 했음 -> 배열크기 200,000는 가능
let maxStage = stages[0];
for(let i=0; i<stages.length; i++){
    if(maxStage < stages[i]){
        maxStage = stages[i];
    }
}
let minStage = stages[0];
for(let i=0; i<stages.length; i++){
    if(minStage > stages[i]){
        minStage = stages[i];
    }
}

if(minStage !== 1){
    for(let i=0; i<minStage-1; i++){
        failRateByStage.push(0);
    }
}

// 최소 단계에 대한 실패율 // 분모: denominator, 분자: numerator 
// N단계 실패율 = 배열 내 N단계 개수 / 배열 내 N단계 이상의 개수
if(maxStage === N+1){
    for(let i=minStage; i<maxStage; i++){
        let numerator = stages.filter(e => e === i).length;
        let denominator = stages.filter(e => e >= i).length;
        failRateByStage.push(numerator/denominator); 
    }
} else if(maxStage <= N){
    for(let i=minStage; i<maxStage+1; i++){
        let numerator = stages.filter(e => e === i).length;
        let denominator = stages.filter(e => e >= i).length;
        failRateByStage.push(numerator/denominator); 
    }
    // N-maxStage 만큼 0배열을 만들어서 failRateByStage에 concat
    failRateByStage = failRateByStage.concat(new Array(N-maxStage).fill(0));
}


// failRateByStage 정한 이후 알고리즘
// failRateByStage에서 실패율이 가장 큰 인덱스를 찾아서,  같은게 있을 경우 오름차순 인덱스로 배열생성

let ans = [];
let maxId;
while(ans.length !== N){
    maxId = failRateByStage.indexOf(Math.max(...failRateByStage));
    failRateByStage[maxId] = -1;
    ans.push(maxId+1);
}

console.log("ans: " + ans);


