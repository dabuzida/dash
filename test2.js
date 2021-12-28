
let nums = [3,2,4,5,1,3,5,12];
let arr = [...new Set(nums)];

// let x = new Array(200000).fill(0);
// let x = new Array(2);

// let x = prompt()
// console.log(Boolean(""));


nums.sort((a, b) => {return a - b;});
console.log(nums);


