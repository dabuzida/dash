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
	console.log('끝!');
});
// 1초후, 1출력되고
// 끝출력

increaseAndPrint(0, n => {
	increaseAndPrint(n, n => {
		console.log('끝!');
	});
});
// 1초후, 1출력되고
//
// 끝출력
