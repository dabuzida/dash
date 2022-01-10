const { reduce } = require('lodash');

let user = {
	name: 'John',
	// ff: () => console.log(this.name)
};
let admin = { name: 'Admin' };

function sayHi() {
	console.log(this.name);
}

user.f = sayHi;
admin.f = sayHi;
console.log(user.f);
user.f();

user.ff = () => console.log(this.name);
console.log(user.ff);
user.ff();

let userr = {
	firstName: '보라',
	sayHellow() {
		console.log(`1. ${this.firstName}`);
	},
	sayHi() {
		let arrow = () => console.log(`2. ${this.firstName}`);
		arrow();
	},
	xx() {
		function arrow2() {
			console.log('22. ' + this.firstName);
		}
		arrow2();
	},
	sayHello() {
		let xx = function () {
			console.log(`3. ${this.firstName}`);
		};
		xx();
	},
	fin: () => console.log(`4. ${this.firstName}`),
};

userr.sayHellow();
userr.sayHi(); // 보라
userr.xx(); // 보라
userr.sayHello(); // undefined
userr.fin(); // undefined
console.log(userr.fin);

let ladder = {
	step: 0,
	up() {
		this.step++;
		return this;
	},
	down() {
		this.step--;
		return this;
	},
	showStep: function () {
		// 사다리에서 몇 번째 단에 올라와 있는지 보여줌
		console.log(this.step);
		return this;
	},
};

ladder.up().up().down().showStep();
