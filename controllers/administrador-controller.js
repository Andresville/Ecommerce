import { productoServices } from "../services/producto-servicios.js";

const nuevoProducto = (name, imageURL, price, id) => {
    const card = document.createElement("div")

    const contenido = `
    <div class="producto">
        <div>
        <img class="imagen" src="${imageURL}" alt="Foto Producto">
        <a class="boton-eliminar" id="${id}" href="#"><img src="/IMG/eliminar-boton.svg" alt="boton eliminar"></a>
        <a class="boton-editar" href="../Paginas/editar-producto.html?id=${id}"><img src="/IMG/editar-boton.svg" alt="boton editar"></a>
        </div>
        <p class="texto__imagen">${name}</p>
        <p class="precio__producto">${price}</p>
        <a class="boton__producto" href="../Paginas/ver-producto.html?id=${id}">Ver producto</a>
    </div>
    `;

    card.innerHTML = contenido;

    //Eliminar

    const eliminarProducto = card.querySelector(".boton-eliminar");

    eliminarProducto.addEventListener("click", evento => {
        const id = eliminarProducto.id;
        productoServices.eliminarProducto(id)
    });


    return card;
};



const productos = document.querySelector("[data-productos-admin]");


const render = async () => {
    try {
        const listaProducto = await productoServices.listaProductos()

        listaProducto.forEach(({ name, price, imageURL, id, categoria, descripcion }) => {
            if (categoria === "star-wars" || categoria === "consolas" || categoria === "diversos") {
                productos.appendChild(
                    nuevoProducto(name, imageURL, price, id, descripcion, categoria))
            }
        });
    } catch (error) {
        console.log(error)
    }
};

render();