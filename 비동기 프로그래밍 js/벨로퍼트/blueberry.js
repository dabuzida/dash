// 비동기 프로그래밍을 만들때 생기는 callback hell
function callbackHell() {
	function increaseAndPrint(n, callback) {
		setTimeout(() => {
			const increased = n + 1;
			console.log(increased);
			if (callback) {
				callback(increased);
			}
		}, 1000);
	}
	increaseAndPrint(0, n => {
		increaseAndPrint(n, n => {
			increaseAndPrint(n, n => {
				increaseAndPrint(n, n => {
					increaseAndPrint(n, n => {
						console.log('fin');
					});
				});
			});
		});
	});
}
// callbackHell();

// Promise: callback hell 해결책
function _Promise() {
	const myPromise = new Promise((resolve, reject) => {
		// 코드
	});
}

// Promise: 성공시, resolve 호출하기
function promiseSucceeded() {
	const myPromise = new Promise((resolve, reject) => {
		// resolve();
		// reject(new Error('heeeeeeeeeei'));
		setTimeout(() => {
			let transmittedArgument = 4918;
			resolve(transmittedArgument);
		}, 1000);
	});

	myPromise
		.then(receivedArgument => {
			console.log(receivedArgument);
		})
		.catch(e => {
			console.log(e);
		});
}
// promiseSucceeded();

// Promise: 실패시, reject 호출하기
function promiseFailed() {
	const myPromise = new Promise((resolve, reject) => {
		setTimeout(() => {
			let _error = new Error('실패구현'); // 1
			// let _error = new Error(); //2
			// _error.name = '실패구현 Error';
			reject(_error);
		}, 1000);
	});
	myPromise
		.then(recevedArgument => {
			console.log(recevedArgument);
		})
		.catch(error => {
			//실패시(reject시), 수행할 작업 설정
			console.log(error);
		});
}
// promiseFailed();

function exampleMakingPromise() {
	function increaseAndPrint(n) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				const transmittedValue = n + 1;
				if (transmittedValue === 4) {
					const _error = new Error();
					_error.name = 'ValueIsThreeError';
					reject(_error);
					// return;
				}
				console.log(transmittedValue);
				resolve(transmittedValue);
			}, 1000);
		});
	}
	console.log('i');
	increaseAndPrint(0)
		.then(receivedValue => {
			// console.log('result: ', receivedValue);
			return increaseAndPrint(receivedValue);
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

	console.log('ii');
	increaseAndPrint(-999)
		.then(increaseAndPrint)
		.then(increaseAndPrint)
		.then(increaseAndPrint)
		.catch(e => {
			console.error(e);
		});
	console.log('iii');
	for (let i = 0; i < 1000000000; i++) {}
	console.log('iv');
	increaseAndPrint(-77777)
		.then(increaseAndPrint)
		.then(increaseAndPrint)
		.then(increaseAndPrint)
		.catch(e => {
			console.error(e);
		});
	console.log('v');
}

exampleMakingPromise();
