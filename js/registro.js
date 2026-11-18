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

let registroo = document.querySelector("form.l");
let emailreg = document.querySelector("input.emregistro");
let contra = document.querySelector("input.contraseña1");
let contras = document.querySelector("input.contraseña2");

registroo.addEventListener("submit", function(event) { 
    event.preventDefault();

if(emailreg.value == ""){
    alert("El campo email es obligatorio");


}else if(contra.value == ""){
    alert("El campo contraseña es obligatorio");   

}else if(contra.value.length < 6){
    alert("La contraseña debe tener al menos 6 caracteres")

}else if(contra.value != contras.value){
    alert("Las contraseñas no coinciden")


}else {
    location.href = "./login.html";
}





})


