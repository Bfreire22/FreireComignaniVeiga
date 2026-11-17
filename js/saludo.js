let mail = localStorage.getItem('email');

if (mail == null) {


} else {
    let bienvenido = document.querySelector(".bienvenido")
    bienvenido.innerHTML = "bienvenido: " + mail;
    
}







