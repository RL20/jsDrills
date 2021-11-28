const users = [
  {
    id: 167464,
    firstName: "Jimmy",
    lastName: "Arnold",
    email: "jimmya@gmail.com",
  },
  {
    id: 578447,
    firstName: "Martha",
    lastName: "Goldman",
    email: "gold@hotmail.com",
  },
  {
    id: 864578,
    firstName: "Tim",
    lastName: "Burton",
    email: "timmy.hotmail.com",
  },
];
// let ol = `<ol style="list-style-type: none;">`;
// users.forEach((user) => (ol += `<li ${li.setAttribute(data - id, user.id)}>${user.firstName} ${user.lastName}</li>`));
let ul = document.createElement("ul");
ul.style.listStyleType = "none";

users.forEach((user) => {
  let li = document.createElement("li");
  li.setAttribute("data-id", user.id);
  li.textContent = user.id;
  ul.appendChild(li);
});
document.body.appendChild(ul);
