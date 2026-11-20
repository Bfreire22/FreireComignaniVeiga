let buscador = document.querySelector("input.buscador");
let formulario = document.querySelector("form.busqueda");
formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    if (buscador.value == "") {
        alert("La busqueda tiene que contener caracteres")
    } else if (buscador.value.length < 3) {
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
        console.log("El error es" + error)
    })
let section = document.querySelector(".Smartphones");

fetch('https://dummyjson.com/products/category/smartphones')
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        let products = data.products;
        for (let i = 0; i < products.length; i++) {
            section.innerHTML +=
                `
<article>
                    <img src="${products[i].thumbnail}" alt="imagenesapi">
                    <h3>${products[i].title}</h3>
                    <p>${products[i].description}</p>
                    <h4>${products[i].price}</h4>
                    <a class="det" href="./detalle.html?id=${products[i].id}">Ver detalle</a>
                </article> 
`
        }

    })
    .catch(function (error) {
        console.log("El error es: " + error)
    })
let section2 = document.querySelector(".beauty");

fetch('https://dummyjson.com/products/category/beauty')
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        let products = data.products;
        for (let i = 0; i < products.length; i++) {
            section2.innerHTML +=
                `
<article>
                    <img src="${products[i].thumbnail}" alt="imagenesapi">
                    <h3>${products[i].title}</h3>
                    <p>${products[i].description}</p>
                    <h4>${products[i].price}</h4>
                    <a class="det" href="./detalle.html?id=${products[i].id}">Ver detalle</a>
                </article> 
`
        }

    })
    .catch(function (error) {
        console.log("El error es: " + error)
    })