function func1() {
	console.log('func1');
	func2();
}

function func2() {
	setTimeout(function () {
		console.log('func2');
	}, 0);

	func3();
}

function func3() {
	console.log('func3');
	func4();
}
function func4() {
	console.log('func4');
	func5();
}
function func5() {
	console.log('func5');
	func6();
}
function func6() {
	console.log('func6');
	for (let i = 0; i < 1000000000; i++) {}
	console.log('fin');
}

func1();
