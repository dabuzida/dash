function delay(ms) {
	return new Promise((resolve, reject) => setTimeout(resolve, ms));
}

console.log(1);
let ss1 = new Promise((resolve, reject) => {
	setTimeout(() => resolve('resolved ok!'), 2000);
});
console.log(ss1);
ss1.then(resolve => console.log(resolve));
ss1.then(resolve => console.log(typeof resolve));
console.log(2);

// console.log(1);
// setTimeout(() => {
// 	console.log(123);
// }, 2000);
// console.log(2);

//  .then(data => console.log(data));
// new Promise((resolve, reject) => resolve('resolved ok!')).then(data => console.log(data));

// new Promise((resolve, reject) => {
// 	setTimeout(() => resolve('결과'), 2000);
// })
