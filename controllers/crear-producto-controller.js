import { productoServices } from "../services/producto-servicios.js";

const form = document.querySelector("[data-form]");

form.addEventListener("submit", evento =>{
    evento.preventDefault()
    
    const name = document.querySelector("[data-name]").value;
    const url = document.querySelector("[data-url]").value;
    const price = document.querySelector("[data-price]").value;

    productoServices.crearProductos(name, url, price)
        .then(respuesta=>{
            window.location.href ="./index.html"
            console.log(respuesta)
        })
        .catch(error => console.log(error))
});