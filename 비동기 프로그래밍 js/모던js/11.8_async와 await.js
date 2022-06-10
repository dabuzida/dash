async function iiv() {
	// return Promise.resolve(1);
	return 1;
}
function v(phrase) {
	console.log(phrase);
}

// console.log(iiv());
// iiv().then(resolve => console.log(resolve));
// iiv().then(v);

async function x() {
	let promise = new Promise((resolve, reject) => {
		setTimeout(() => resolve('done!'), 1000);
	});
	console.log(promise);
	let result = await promise;
	console.log(result);
}
x();
