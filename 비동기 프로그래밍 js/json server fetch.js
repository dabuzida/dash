import fetch from 'node-fetch';

// 비동기 프로그래밍 제이슨 서버에서 비동기로 받아서 작업을 처리하는 걸 구현해보려고  했었음

fetch('https://jsonplaceholder.typicode.com/todos/1')
	.then(response => response.json())
	.then(json => console.log(json));
