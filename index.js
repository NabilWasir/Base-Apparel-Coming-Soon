const btn = document.querySelector(".button");
const alert = document.querySelector(".alert");
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const input = document.querySelector(".email-box");
const errorIcon = document.querySelector(".error-icon");

input.addEventListener("input", function () {
  if (input.value.match(emailRegex) && alert.style.display === "block") {
    input.style.border = "1px solid hsl(0, 36%, 70%)";
    alert.style.display = "none";
    errorIcon.style.display = "none";
  } else {
    input.style.border = "1px solid red";
    alert.style.display = "block";
    errorIcon.style.display = "flex";
  }
});

btn.addEventListener("click", function () {
  if (input.value.match(emailRegex)) {
    input.style.border = "1px solid hsl(0, 36%, 70%)";
    alert.style.display = "none";
    errorIcon.style.display = "none";
  } else {
    input.style.border = "1px solid red";
    alert.style.display = "block";
    errorIcon.style.display = "flex";
  }
});
