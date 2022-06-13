async function f() {
	// let promise = new Promise((resolve, reject) => {
	// 	setTimeout(() => resolve('완료!'), 1000);
	// });

	// let result = await new Promise((resolve, reject) => {
	// 	setTimeout(() => resolve('result 완료!'), 1000);
	// });
	// console.log(result); // "완료!"

	// let result2 = await new Promise((resolve, reject) => {
	// 	setTimeout(() => resolve('result2 완료!'), 1000);
	// });
	// console.log(result2); // "완료!"

	console.log('1');
	setTimeout(() => {
		console.log('aaa');
	}, 1000);

	console.log('2');

	let result3 = await new Promise((resolve, reject) => {
		console.log('excute');
		resolve('result3 완료!');
		//setTimeout(() => resolve('result3 완료!'), 1000);
	});

	console.log('3');
	setTimeout(() => {
		console.log(result3); // "완료!"
	}, 1000);

	console.log('4');
}

f();
