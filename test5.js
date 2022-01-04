/* let user = {name: "John"};
let admin = {name: "Admin"};

function sayHi() {
    console.log(this.name);
}

user.f = sayHi;
admin.f = sayHi;

console.log(user.f);
user.f(); */

let user = {
	firstName: '보라',
	sayHi() {
		let arrow = () => console.log(this.firstName);
		arrow();
	},
};



user.sayHi(); // 보라

var xx = 11;

