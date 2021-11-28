// const inputs = document.querySelectorAll("input[class='inp']");
// const submit = document.querySelector("input[class='sbm']");
const inputs = document.querySelectorAll(".inp");
const submit = document.querySelector(".sbm");

inputs.forEach((inp, i) => {
  inp.addEventListener("input", (e) => {
    if (i + 1 < inputs.length) {
      inputs[i + 1].focus();
    } else {
      submit.click();
    }
  });

  inp.addEventListener("paste", (e) => {
    e.clipboardData
      .getData("text")
      .slice(0, 6 - i)
      .split("")
      .forEach((char, inx) => {
        inputs[i + inx].value = char;
        console.log(inputs[i + inx].value);
      });
    e.preventDefault();
  });
});
