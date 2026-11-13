let buscador = document.querySelector("input.buscador");
let formulario = document.querySelector("form.busqueda");
formulario.addEventListener("submit", function(event){
    event.preventDefault();
if( buscador.value == ""){
alert("La busqueda tiene que contener caracteres")
}else{
    this.submit()
}
if(buscador.value.length < 3){
    alert("la busqueda tiene que tener mas de 3 caracteres")
}else{
    this.submit()
}
})
let url = "https://dummyjson.com/products/category-list"
fetch(url)
.then (function(res){
    return res.json()
})
.then(function(data){
let category = category.data
 for(let i = 0; i < category.length; i++){
    
 }
})