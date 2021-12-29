/* 
N: 1~500
stages길이: 1~200,000
stages 값: 1~N+1 << 목표

0 <= Math.random() <1


0 <= Math.random()*N < N
 */

// let N = 100;
// let temp = [];
// for(let i=0; i<1000; i++){
//     let n = Math.floor(Math.random()*N);
//     temp.push(n);
// }
// console.log(temp);
let N = 500;

for(let i=0; i<1000; i++){
    let x = Math.random()*(N+1)+1;
    let y = Math.floor(x);
    if(y<=0 || y>=502){
        console.log(y);
    }
}