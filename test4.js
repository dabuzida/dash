/* let n = 33453234;
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

while (arr.length > 0) {
    result += (3**(arr.length-1)) * arr.shift();

    // console.log(result);
}

m === 2 ? console.log(m) : console.log(result); */

/* let a = [1, 2, 3, 4, 5];
// let b = [];
let b = Object.assign([], a);

Object.assign(b, a);
console.log(a === b); // true, 같은 객체입니다.
a.push(22);
console.log(a);
console.log(b); */
var _ = require('lodash');
let user = {
	name: 'John',
	sizes: {
		height: 182,
		width: 50,
	},
};

let clone = Object.assign({}, user);
let clone2 = _.cloneDeep(user);

console.log(user);
console.log(clone);
console.log(clone2);

console.log(clone2 === user); // true, 같은 객체입니다.
console.log(clone2 === clone); // true, 같은 객체입니다.
console.log('========================');
console.log(clone2.sizes === user.sizes); // true, 같은 객체입니다.
console.log(clone2.sizes === clone.sizes); // true, 같은 객체입니다.
console.log('========================');

console.log(user === clone); // true, 같은 객체입니다.
console.log(user.sizes === clone.sizes); // true, 같은 객체입니다.

user.sizes.width++;
console.log(user.sizes.width);
console.log(clone.sizes.width);
