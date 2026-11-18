let mail = localStorage.getItem('email');

if (mail == null) {


} else {
    let nav = document.querySelector(".navegacion")
    let url = '<a class="log" href="./login.html">Logout</a>';
    
    nav.innerHTML = "Bienvenido: " + mail + " " + url;
}




