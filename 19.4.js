let body = document.body;
let frm = document.createElement("form");
body.append(frm);
for (let i = 0; i < 6; i++) {
  let inp = document.createElement("input");
  inp.setAttribute("type", "text");
  frm.append(inp);
}
let submit = document.createElement("input");
submit.setAttribute("type", "submit");

submit.name = "Verify";
submit.value = "Verify";
frm.append(submit);
frm.querySelectorAll("input[type='text']").forEach((element) => {
  element.style.backgroundColor = "red";
  element.style.width = "20px";
  element.style.height = "20px";
  element.style.
});
