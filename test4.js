let n = 33453234;
let m = n;
let arr = [];
let result = 0;

while (n >= 3) {
    
    
    let remainder = n%3;
    arr.unshift(remainder);
    n = Math.floor(n/3);
}
n == 2 ? arr.unshift(2) : arr.unshift(1);

console.log(arr);
arr.reverse();
console.log(arr);

while(arr.length > 0){
    result += (3**(arr.length-1)) * arr.shift();

    // console.log(result);
}

m === 2 ? console.log(m) : console.log(result);