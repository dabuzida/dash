import fetch from 'node-fetch';

// async function showAvatar() {
//   let response = await fetch("/article/promise-chaining/user.json");
//   let user = await response.json();
// }

// showAvatar();

async function showAvatar() {
	// read our JSON
	let response = await fetch('/article/promise-chaining/user.json');
	let user = await response.json();

	// read github user
	let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
	let githubUser = await githubResponse.json();

	// show the avatar
	let img = document.createElement('img');
	img.src = githubUser.avatar_url;
	img.className = 'promise-avatar-example';
	document.body.append(img);

	// wait 3 seconds
	await new Promise((resolve, reject) => setTimeout(resolve, 3000));

	img.remove();

	return githubUser;
}

// showAvatar();
async function xx() {
	// let _promise = new Promise((resolve, reject) => {
	// 	setTimeout(() => resolve('_promise'), 1000);
	// });
	function _promise() {
		return new Promise((resolve, reject) => {
			setTimeout(() => resolve('_promise'), 1000);
		});
	}

	console.log(_promise());
	let _promise2 = new Promise((resolve, reject) => {
		setTimeout(() => resolve('_promise2'), 1000);
	});
	console.log(_promise2);

	// let _fetch = fetch('https://jsonplaceholder.typicode.com/todos/1');
	// let xu = await fetch("https://jsonplaceholder.typicode.com/todos/1");
	// return xu;

	console.log('1');
	let start = Date.now();
	let result = await _promise();
	// let result = await _promise;
	let end = Date.now();
	console.log('2', end - start, result);

	// console.log('start');
	// let start2 = Date.now();
	// let result2 = await _fetch;
	// console.log('>>');
	// // console.log('>>', result2);
	// let end2 = Date.now();
	// console.log('3', end2 - start2);

	// let start3 = Date.now();
	// let result3 = await result2.json();
	// let end3 = Date.now();
	// console.log('4', end3 - start3, result3);

	let start4 = Date.now();
	let result4 = await _promise2;
	let end4 = Date.now();
	console.log('5', end4 - start4, result4);

	console.log(
		'>>',
		_promise().then(resolve => console.log('##', resolve)),
	);
	// console.log(_promise);
	console.log(_promise2);

	// console.log(xi);
	// return xu;
}
xx();
// console.log(xx());
// console.log(xx().then((e) => console.log(e)));

/* 

let xu = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  // let xu = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  // return xu;

  console.log("1");
  let result = await x;
  console.log("2", result);
  let xi = await xu.json();
  console.log("3", xi);
  let result2 = await y;
  console.log("4", result2);

*/
