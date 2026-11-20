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
let url = "https://dummyjson.com/products/category-list"
let ul = document.querySelector("ul.izquierda")
fetch(url)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {

        for (let i = 0; i < data.length; i++) {
            ul.innerHTML +=
                `
     <li><a href="./category.html?category=${data[i]}">${data[i]}</a></li>
    `
        }
    })
    .catch(function (error) {
        console.log("el error es" + error)
    })
    let loca = location.search
    let obuscado = new URLSearchParams(loca)
    let loqhayqbuscar = obuscado.get("busqueda")
    let busection = document.querySelector("section.loqbuscar")
    let turesultado = document.querySelector("h1.res")
    turesultado.innerText = "Resultado de busqueda para: " + loqhayqbuscar
    fetch(`https://dummyjson.com/products/search?q=${loqhayqbuscar}`)
    .then(function(response){
        return response.json()
    } )
    .then(function(data){
        let products = data.products 
        if(products.length == 0){
            alert("no hay resultados para el termino: " + loqhayqbuscar)
        }else{
        for(let i = 0; i<products.length; i++){
            busection.innerHTML +=
             ` 
             <article>
                    <img src="${products[i].thumbnail}" alt="img">
                    <h3>${products[i].title}</h3>
                    <p>${products[i].description}</p>
                    <h4>${products[i].price}</h4>
                    <a class="det" href="./detalle.html?id=${products[i].id}">Ver detalle</a>
                </article>
             `
        }}
    } )
    .catch(function(error){
        console.log("el error es: " + error)
    }
)