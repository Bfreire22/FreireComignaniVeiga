let logout = document.querySelector(".log");

logout.addEventListener("click", function(event) {
event.preventDefault();

localStorage.removeItem("email");

let nav = document.querySelector(".navegacion");
let login = '<a class = "ln" href="./login.html">login</a>'
let register = '<a class = "ln" href="./registro.html">register</a>'

nav.innerHTML = login + " " + register;
});