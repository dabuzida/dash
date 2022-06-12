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
  let xu = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  let xi = await xu.json();
  console.log(xi);
}
xx();
