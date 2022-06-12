async function p() {
  return Promise.resolve(1);
  // return 1;
}
function v(phrase) {
  console.log(phrase);
}
// console.log(p());
// p().then(resolve => console.log(resolve));
// p().then(v);

async function q() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("q function"), 1000);
  });
  //   console.log("i: ", promise);
  let result = await promise;
  console.log(result);
  return result;
  // return promise;
}
async function r() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("r function"), 1000);
  });
  let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("r function2"), 2000);
  });
  console.log("iii: ", promise);
  let result = await promise;
  console.log("iv", result);
  console.log("v: ", promise2);
  let result2 = await promise2;
  console.log("vi", result2);
  // return promise;
}
let s = new Promise((resolve, reject) => {
  setTimeout(() => resolve("s function"), 1000);
});
console.log("start");
q().then((resolve) => console.log(resolve));
// r();
// s.then((resolve) => console.log(resolve));
console.log("fin");
// console.log('>>', q());
// q();
