// const numbers = [2,1,3,4,1]; // result = [2,3,4,5,6,7];
const numbers = [5, 0, 2, 7]; // result = [2,5,7,9,12];
let sum;
const result = [];
for (let i=0; i<numbers.length-1; i++) {
    for (let j=i+1; j<numbers.length; j++) {
        sum = numbers[i] + numbers[j];
        if (!result.includes(sum)) { // Set 객체 이용하면 중복없이 저장 가능
            result.push(sum); // const answer = [...new Set(temp)] 이런식
        }
    }
}

result.sort((a, b) => a - b);
console.log(result);

