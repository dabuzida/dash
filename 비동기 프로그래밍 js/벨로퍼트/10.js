function iii(n) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const value = n + 3;
			if (value > 5) {
				const error = new Error();
				error.name = 'ErroraoR Error'; // 마지막을 Error로 끝내면 출력이 달라짐
				// error.name = 'asdkdkdk';
				// error.name = 'ValueIsFiveError';
				reject(error);
				return;
			}
			console.log(value);
			resolve(value);
		}, 1000);
	});
}

iii(1)
	.then(n => {
		return iii(n);
	})
	.catch(e => {
		console.error(e);
	});
