let mails = localStorage.getItem('email');

if (mails == null) {


} else {
    let nav = document.querySelector(".navegacion")
    let url = '<a class="log" href="./login.html">Logout</a>';
    
    nav.innerHTML = "Bienvenido: " + mails + " " + url;
}




