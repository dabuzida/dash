async function q() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("q function"), 1000);
  });
  let result = await promise;
  console.log(result);
  // return result;
}

let s = new Promise((resolve, reject) => {
  setTimeout(() => resolve("s function"), 1000);
});

function t() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("t function"), 1000);
  });
}

async function z() {
  let zz = new Promise((resolve, reject) => {
    setTimeout(() => resolve("z function"), 1000);
  });
  let a = Date.now();
  // for (let i = 0; i < 1000000000; i++) {}
  let result = await zz;
  let b = Date.now();
  console.log(b - a);
  console.log("bye");
  return result;
}

function u() {
  return Promise.resolve("u function");
}
console.log("start");
// q(); // async await으로 구현
// s.then((resolve) => console.log(resolve)); // then으로 구현
// t().then((resolve) => console.log(resolve));
z().then((resolve) => console.log(resolve));
// u().then((resolve) => console.log(resolve));
console.log("fin");
