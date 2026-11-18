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
     <li><a href="./category.html?category=${data[i]}">${data[i]}</a></li>
    `
        }
    })
    .catch(function (error) {
        console.log("El error es" + error)
    })

let div = document.querySelector(".detalleshtml")
let locatio = location.search
let querystring = new URLSearchParams(locatio)
let id = querystring.get("id")
fetch(`https://dummyjson.com/products/${id}`)

    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        div.innerHTML +=
            `
                <h1>${data.title}</h1>
                <img src="${data.thumbnail}" alt="imagenpto5">
                <p>${data.title}</p>
                <p>${data.brand}</p>
                <h4>${data.description}</h4>
                <p>${data.price}</p>
                <a href="./category.html?id=${data.category}">Categoria</a>
                <p>${data.stock}</p>
                <ul>
                    <li>${data.tags}</li>
                </ul>



        `

    })
    .catch(function (error) {
        console.log("El error es: " + error)
    })