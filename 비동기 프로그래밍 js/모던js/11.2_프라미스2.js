// new Promise((resolve, reject) => {
// 	setTimeout(() => resolve('결과'), 2000);
// })
// 	.finally(() => console.log('프라미스가 준비되었습니다.'))
// 	.then(result => console.log(result)); // <-- .then에서 result를 다룰 수 있음

// new Promise((resolve, reject) => {
// 	// throw new Error('에러 발생!');
// 	reject(new Error('에러 발생!'));
// })
// 	.finally(() => console.log('프라미스가 준비되었습니다.'))
// 	.catch(err => console.log(err)); // <-- .catch에서 에러 객체를 다룰 수 있음

function delay(ms) {
	return new Promise((resolve, reject) => setTmeout(resolve, ms));
}

delay(3000).then(() => console.log('3초후 실행'));

// 전코드

// 여기서 3초 지연되고 이후 코드 실행되도록

// 이후코드
