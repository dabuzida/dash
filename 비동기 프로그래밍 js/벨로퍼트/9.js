/* const myPromise = new Promise((resolve, reject) => {
	setTimeout(() => {
		// resolve(10);
		const error = new Error();
		error.name = 'speed_error';
		reject(error);
	}, 1000);
});

myPromise
	.then(n => {
		console.log(n);
	})
	.catch(error => {
		// console.log(error);
		console.error(error);
	}); */

function ii(n) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (n > 5) {
				const error = new Error();
				error.name = '##speed_erro##r';
				reject(error);
				return;
			}

			console.log(n);
			resolve(n);
		}, 1000);
	});
}

ii(3)
	.then(n => {
		return ii(n + 3);
	})
	.catch(e => {
		console.error(e);
	});
