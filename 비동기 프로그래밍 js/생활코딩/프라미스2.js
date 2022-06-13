let ss1 = new Promise((resolve, reject) => resolve('resolved ok!'));
console.log(ss1);
ss1.then(resolve => console.log(resolve));
ss1.then(resolve => console.log(typeof resolve));
//  .then(data => console.log(data));
// new Promise((resolve, reject) => resolve('resolved ok!')).then(data => console.log(data));
