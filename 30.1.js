let button = document.querySelector("[data-btn]");
let input = document.querySelector("[data-inp]");
let invalidUserName = document.querySelector("[data-invalid]");
let container = document.querySelector("[data-container]");
let userList = [];
//----------------Events Listener-------------------------------------------
window.addEventListener("load", (event) => {
  input.focus();
});
input.addEventListener("keyup", function (event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    button.click();
  }
});
button.addEventListener("click", (e) => {
  let username = input.value;

  userInfo(username);
  // console.log(username);
});

//----------    -----Functions---------------------------------------------
async function userInfo(username) {
  try {
    let userInfo = await fetch(`https://api.github.com/users/${username}`);
    if (userInfo.status === 404) {
      throw "user not found";
    }
    let data = await userInfo.json();
    // console.log("userInfo", userInfo);
    console.log("data", data);
    // -----------------------------------------------
    const userObj = { image: data.avatar_url, name: data.name, repo: data.public_repos, url: data.html_url, id: data.id };
    // console.log("data", data);
    // console.log("obj", userObj);
    userList.push(userObj);
    //--------------------------------------------------
    container.innerHTML = ""; //clear the screan befor print cards again
    const key = "id";

    const arrayUniqueByKey = [...new Map(userList.map((item) => [item[key], item])).values()];

    console.log("arrayUniqueByKey", arrayUniqueByKey);

    createUserCrad(arrayUniqueByKey);
    // createUserCrad(userList);
  } catch (err) {
    err.message = "user not found";
    console.log(err);
    invalidUserName.classList.add("red");
    invalidUserName.innerText = "invalid user name X";
    invalidUserName.addEventListener("click", (e) => {
      invalidUserName.innerText = "";
    });
  }
}

function createUserCrad(arr) {
  for (let i = 0; i < arr.length; i++) {
    const userObj = arr[i];
    let img = document.createElement("img");
    img.src = userObj.image;
    img.classList.add("img-size");
    let h2 = document.createElement("h2");
    h2.innerText = userObj.name;
    let h3 = document.createElement("h3");
    h3.innerText = userObj.repo;
    let a = document.createElement("a");
    a.href = userObj.url;
    a.classList.add("margin");
    a.append(img, h2, h3);
    container.appendChild(a);
    input.value = "";
  }
}
