const stages = [2, 1, 2, 6, 2, 4, 3, 3];
const N = 5;

/* const stages = [4,4,4,4,4];
const N = 4; */

const maxStage = Math.max(...stages);
const minStage = Math.min(...stages);
// console.log(minStage);

let failRateByStage = [];

if(minStage !== 1){
    for(let i=0; i<minStage; i++){
        failRateByStage.push(0);
    }
}

// 분모: denominator, 분자: numerator
// 실패율이 0이 아닌 첫 단계의 실패율 구하기
let numerator = stages.filter(e => e === minStage).length;
let denominator = stages.filter(e => e >= minStage).length;
// failRateByStage[minStage-1] = numerator/denominator
failRateByStage.push(numerator/denominator); 

for(let i=minStage+1; i<N+1; i++){
    numerator = stages.filter(e => e === i).length;
    denominator = stages.filter(e => e >= i).length;
    failRateByStage.push(numerator/denominator); 
}

console.log(failRateByStage);

let answer = [];

while(Math.max(...failRateByStage) > -1){
    let temp = [];
    let maxVal = failRateByStage.findIndex(e => e === Math.max(...failRateByStage));
    for(let i=0; i<failRateByStage.length; i++){
        if(failRateByStage[i] === maxVal){
            temp.push(i);
            failRateByStage[i] = -1;
        }
    }
    temp.sort((a, b) => {return a - b;});
    console.log(temp);
    // answer = answer.concat(temp);
}

console.log(answer);

/* for(let i=0; i<failRateByStage.length; i++){
    let maxFailRate = Math.max(...failRateByStage);
} */

// for(let i=0; i<maxStage-minStage; i++){
//     stages.filter(e => e === minStage + i).length

// }


// if(maxStage !== N+1){
//     for(let i=N; i>maxStage; i--){

//     }
// }
