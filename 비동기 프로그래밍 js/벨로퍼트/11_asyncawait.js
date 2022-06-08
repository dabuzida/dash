/* 
// 1
function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

async function process() {
	console.log('안녕하세요!');
	await sleep(1000); // 1초쉬고
	console.log('반갑습니다!');
}

process().then(() => {
	console.log('fin');
});
 */
/* 
// 2
function sleep2(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

async function makeError() {
	await sleep2(1000);
	const error = new Error();
	throw error;
}

async function process() {
	try {
		await makeError();
	} catch (e) {
		console.error(e);
	}
	// console.log('hi');
	// await sleep(1000);
	// console.log('hellow');
}

process();
 */

function sleep3(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

const getDog = async () => {
	await sleep3(1000);
	return '멍멍이';
};

const getRabbit = async () => {
	await sleep3(500);
	return '토끼';
};
const getTurtle = async () => {
	await sleep3(3000);
	return '거북이';
};

async function process() {
	// 1
	// const dog = await getDog();
	// console.log(dog);
	// const rabbit = await getRabbit();
	// console.log(rabbit);
	// const turtle = await getTurtle();
	// console.log(turtle);

	// 2
	// const results = await Promise.all([getDog(), getRabbit(), getTurtle()]);
	// console.log(results);

	// 3
	const [dog, rabbit, turtle] = await Promise.all([getDog(), getRabbit(), getTurtle()]);
	console.log(dog);
	console.log(rabbit);
	console.log(turtle);

	// 4
	const first = await Promise.race([getDog(), getRabbit(), getTurtle()]);
	console.log(first);
}

process();
