// function work(callback) {
// 	setTimeout(() => {
// 		const start = Date.now();
// 		for (let i = 0; i < 1000000000; i++) {}
// 		const end = Date.now();
// 		console.log(end - start + 'ms');
// 		callback();
// 	}, 0);
// }

// console.log('start');
// work(() => {
// 	console.log('finish');
// });
// console.log('next');

function increaseAndPrint(n) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const value = n + 1;
			if (value > 5) {
				const error = new Error();
				error.name = 'ValueIsFiveError';
				reject(error);
				return;
			}
			console.log(value);
			resolve(value);
		}, 1000);
	});
}

increaseAndPrint(0)
	.then(n => {
		return increaseAndPrint(n);
	})
	.then(n => {
		return increaseAndPrint(n);
	})
	.then(n => {
		return increaseAndPrint(n);
	})
	.then(n => {
		return increaseAndPrint(n);
	})
	.then(n => {
		return increaseAndPrint(n);
	})
	.catch(e => {
		console.error(e);
	});
