/* const d = [1, 3, 2, 5, 4];
let budget = 9;
let result = 0; //3 */

const d = [2, 2, 3, 3];
let budget = 10;
let result = 0; //4

d.sort((a, b) => a - b);
// let minD = Math.min(d);

while (d[0] <= budget) {
    budget -= d.shift();
    result++;
}

console.log(result);


