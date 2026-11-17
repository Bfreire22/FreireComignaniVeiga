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
        alert("La busqueda tiene que tener mas de 3 caracteres")
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
     <li><a href="./category.html">${data[i]}</a></li>
    `
        }
    })
    .catch(function (error) {
        console.log("El error es" + error)
    })

let div = document.querySelector(".detalleshtml")
fetch(`https://dummyjson.com/products/${id}`)

.then(function(response) {
    return response.json()
})
.then(function(data){
let products = data.products
    for(let i = 0; i < products.length; i++){
        div.innerHTML +=
        `
                <h1>${products[i].title}</h1>
                <img src="${products[i].thumbnail}" alt="imagenpto5">
                <p>${products[i].title}</p>
                <p>${products[i].brand}</p>
                <h4>${products[i].description}</h4>
                <p>${products[i].price}</p>
                <a href="./category.html?id=${products[i].category}">Categoria</a>
                <p>${products[i].stock}</p>
                <ul>
                    <li>${products[i].tags}</li>
                </ul>



        `
    }
})
.catch(function(error){
    console.log("El error es: " + error)
})