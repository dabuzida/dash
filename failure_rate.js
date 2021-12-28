/* const stages = [2, 1, 2, 6, 2, 4, 3, 3];
const N = 5; */

/* const stages = [4,4,4,4,4]; // [0, 0, 0, 1] => [4,1,2,3]
const N = 4; */

/* const stages = [4,4,4,4,4];
const N = 5; */

const stages = [1,2,2,1,3];
const N = 5;

let failRateByStage = [];
const maxStage = Math.max(...stages);
const minStage = Math.min(...stages);

if(minStage !== 1){
    for(let i=0; i<minStage-1; i++){
        failRateByStage.push(0);
    }
}

// 최소 단계에 대한 실패율 // 분모: denominator, 분자: numerator
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

// failRateByStage = failRateByStage.concat(x);
console.log(failRateByStage);


// failRateByStage 정한 이후 알고리즘
// failRateByStage에서 실패율이 가장 큰 인덱스를 찾아서,  같은게 있을 경우 오름차순 인덱스로 배열생성

let maxPbb = Math.max(...failRateByStage); //pbb=probability
let answer = [];
let temp = [];

while(maxPbb > -1){
    for(let i=0; i<failRateByStage.length; i++){
        if(failRateByStage[i] === maxPbb){
            temp.push(i+1);
            failRateByStage[i] = -1;
        }
    }
    
    temp.sort((a, b) => {return a - b;});
    console.log(temp);
    answer = answer.concat(temp);
    console.log(answer);  // 단계별 실패율을 1단계부터 오름차순으로 배열로 생성
    maxPbb = Math.max(...failRateByStage);
    temp = [];

}
console.log(failRateByStage);  // 단계별 실패율을 1단계부터 오름차순으로 배열로 생성

console.log("answer: " + answer);


