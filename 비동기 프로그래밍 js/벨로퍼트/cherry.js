// 비동기 프로그래밍을 Promise보다 더 쉽게 사용하기 async, await
function basicStep() {
	function sleep(ms, id) {
		// 1
		return new Promise(resolve =>
			setTimeout(() => {
				console.log('-_-');
				resolve(121);
			}, ms),
		);

		// 2
		// return new Promise((resolve, reject) => setTimeout(resolve(2), ms));

		// 3
		// return new Promise((resolve, reject) => setTimeout(resolve, ms));

		// 4
		// return new Promise((resolve, reject) =>
		// 	setTimeout(() => {
		// 		resolve(2);
		// 	}, ms),
		// );

		// 5
		// console.log(id);
		// return new Promise(resolve =>
		// 	setTimeout(() => {
		// 		resolve(22);
		// 	}, ms),
		// );
	}

	async function process() {
		console.log('start');
		sleep(3000, '1').then(x => console.log('4'));
		console.log('-_-');
		sleep(2000, '2').then(x => console.log('5'));
		console.log('>0<');
		sleep(1000, '3').then(x => console.log('6'));
		console.log('fin');
	}
	process();
}
basicStep();
