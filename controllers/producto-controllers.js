import { productoServices } from "../services/producto-servicios.js";

const nuevoProducto = (name, imageURL, price, id)=>{
    const card = document.createElement("div")

    const contenido = `
    <div class="producto">
        <img class="imagen" src="${imageURL}" alt="Foto Producto">
        <p class="texto__imagen">${name}</p>
        <p class="precio__producto">${price}</p>
        <a class="boton__producto" href="../Paginas/ver-producto.html?id=${id}">Ver producto</a>
    </div>
    `;

    card.innerHTML = contenido;

    return card;
};

const productosStarWars = document.querySelector("[data-starwars]");
const productosConsolas = document.querySelector("[data-consolas]");
const productosDiversos = document.querySelector("[data-diversos]");

const render = async ()=>{
    try {
        const listaProducto = await productoServices.listaProductos()

        listaProducto.forEach(({name, price, imageURL, id, categoria}) => {
            if(categoria === "star-wars"){
                productosStarWars.appendChild(
                    nuevoProducto(name, imageURL, price, id))
            }else if (categoria === "consolas"){
                productosConsolas.appendChild(
                    nuevoProducto(name, imageURL, price, id))
            }else if (categoria === "diversos"){
                productosDiversos.appendChild(
                    nuevoProducto(name, imageURL, price, id))
            }
    });
    } catch (error) {
        console.log(error)
    }
};

render();