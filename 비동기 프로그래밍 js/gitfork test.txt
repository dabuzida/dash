function delay(ms) {
	return new Promise((resolve, reject) => setTimeout(resolve, ms));
}

async function run() {
	console.log(1);
	await x();
	console.log(2);

	async function x() {
		let s = new Promise((resolve, reject) => {
			setTimeout(() => resolve('resolved ok!'), 2000);
		});
		await console.log(resolve);
		await console.log(typeof resolve);
		// s.then(resolve => console.log(resolve));
		// s.then(resolve => console.log(typeof resolve));
	}
}
run();
