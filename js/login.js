let buscador = document.querySelector("input.buscador");
let formulario = document.querySelector("form.busqueda");
formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    if (buscador.value == "") {
        alert("La busqueda tiene que contener caracteres")
    } else {
        this.submit()
    }
    if (buscador.value.length < 3) {
        alert("la busqueda tiene que tener mas de 3 caracteres")
    } else {
        this.submit()
    }
})
let formlogin = document.querySelector("form.l");
let mail = document.querySelector("input.mail");
let pass = document.querySelector("input.contraseña");

formlogin.addEventListener("submit", function(event){
    event.preventDefault();

    if (mail.value == ""){
    alert("El campo de mail es obligatorio");

    }else if(pass.value == ""){
    alert("El campo contraseña es obligatorio");
   

    }else if(pass.value.length < 6) {
        alert("La contraseña debe tener al menos 6 caracteres");

   
    }else {
        localStorage.setItem('email', mail.value);
        location.href = "./index.html";
    }
});
