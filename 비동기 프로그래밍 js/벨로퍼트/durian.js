// console.log(1);
// setTimeout(() => {
// 	console.log(2);
// }, 1000);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);
// console.log(9);

let ii = true;
const xx = new Promise((resolve, reject) => {
	setTimeout(() => {
		if (ii) {
			resolve(12);
		} else {
			let error = new Error();
			error.name = 'good Error';
			reject(error);
		}
	}, 1000);
});

xx.then(n => {
	console.log(n);
}).catch(error => {
	console.log(error);
});
