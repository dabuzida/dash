// function xxx() {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			resolve('resolved ok!');
// 		}, 1000);
// 	});
// }

async function run() {
	function xxx() {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve('resolved ok!');
			}, 1000);
		});
	}
	// let _promise = new Promise((resolve, reject) => {
	// 	setTimeout(() => resolve('_promise'), 1000);
	// });
	// let _promise2 = new Promise((resolve, reject) => {
	// 	setTimeout(() => resolve('_promise2'), 1000);
	// });
	// console.log(1);
	// let s = await _promise;
	// console.log(2);
	// let s2 = await _promise2;
	// console.log(3);
	console.log('start');
	let r1 = await xxx();
	console.log(r1);
	let r2 = await xxx();
	console.log(r2);
	let r3 = await xxx();
	console.log(r3);
	console.log('end');
}
run();
