import fetch from "node-fetch";

// async function showAvatar() {
//   let response = await fetch("/article/promise-chaining/user.json");
//   let user = await response.json();
// }

// showAvatar();

async function showAvatar() {
  // read our JSON
  let response = await fetch("/article/promise-chaining/user.json");
  let user = await response.json();

  // read github user
  let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
  let githubUser = await githubResponse.json();

  // show the avatar
  let img = document.createElement("img");
  img.src = githubUser.avatar_url;
  img.className = "promise-avatar-example";
  document.body.append(img);

  // wait 3 seconds
  await new Promise((resolve, reject) => setTimeout(resolve, 3000));

  img.remove();

  return githubUser;
}

// showAvatar();
async function xx() {
  let x = new Promise((resolve, reject) => {
    setTimeout(() => resolve("function"), 1000);
  });
  let y = new Promise((resolve, reject) => {
    setTimeout(() => resolve("function"), 1000);
  });
  let z = fetch("https://jsonplaceholder.typicode.com/todos/1");
  // let xu = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  // return xu;

  console.log("1");
  let start = Date.now();
  let result = await x;
  let end = Date.now();
  console.log("2", end - start);

  let start2 = Date.now();
  let result2 = await z;
  let end2 = Date.now();
  console.log("3", end2 - start2);

  let start3 = Date.now();
  let result3 = await result2.json();
  let end3 = Date.now();
  console.log("4", end3 - start3);

  let start4 = Date.now();
  let result4 = await y;
  let end4 = Date.now();
  console.log("5", end4 - start4);
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
