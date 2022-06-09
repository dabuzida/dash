// 동기 프로그래밍
function a() {
	function work() {
		const start = Date.now();
		for (let i = 0; i < 1000000000; i++) {}
		const end = Date.now();
		let diff = end - start;
		console.log(diff + 'ms');
	}
	console.log('start');
	work();
	console.log('fin');
}
// a();

// 비동기 프로그래밍
function b() {
	function work2() {
		setTimeout(() => {
			const start = Date.now();
			for (let i = 0; i < 1000000000; i++) {}
			const end = Date.now();
			let diff = end - start;
			console.log(diff + 'ms');
		}, 0);
	}

	console.log('start');
	work2();
	console.log('fin');
}
// b();

// 비동기 프로그래밍 + 후속 작업
function c() {
	function work3(callback) {
		setTimeout(() => {
			const start = Date.now();
			for (let i = 0; i < 1000000000; i++) {}
			const end = Date.now();
			let diff = end - start;
			console.log(diff + 'ms');
			callback();
		}, 0);
	}

	console.log('start');
	work3(() => {
		console.log('done');
	});
	console.log('fin');
}
c();
