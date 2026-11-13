let buscador = document.querySelector("input.buscador");
let formulario = document.querySelector("form.busqueda");
formulario.addEventListener("submit", function(event){
    event.preventDefault();
if( buscador.value == ""){
alert("La busqueda tiene que contener caracteres")
}
if(buscador.value.length < 3){
    alert("la busqueda tiene que tener mas de 3 caracteres")
}
})