let promise = new Promise((resolve, reject) => {
	setTimeout(() => resolve('result> success'), 1000);
	// setTimeout(() => reject(new Error('result> error')), 1000);
	// setTimeout(() => {
	// 	let _error = new Error();
	// 	_error.name = 'error100';
	// 	reject(_error);
	// }, 1000);
});

console.log(promise);
promise
	.then(
		result => console.log(result),
		// error => console.log(error, '<<<<'),
		// error => console.log('error 실행'),
	)
	.catch(ivi);
// .finally(() => console.log('i >> finally'));

function ivi(phrase) {
	console.log(phrase);
}
/* 
new Promise((resolve, reject) => {
	setTimeout(() => resolve('결과'), 2000);
})
	.finally(() => console.log('프라미스가 준비되었습니다.'))
	.then(result => console.log(result)); // <-- .then에서 result를 다룰 수 있음

new Promise((resolve, reject) => {
	throw new Error('에러 발생!');
})
	.finally(() => console.log('프라미스가 준비되었습니다.'))
	.catch(err => console.log(err)); // <-- .catch에서 에러 객체를 다룰 수 있음
 */
