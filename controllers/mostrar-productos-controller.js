//Creando la card del producto
export const MostrarProductos = (name, price, imageURL, id, categoria) => {
    //Creando el div que guarda todo el card
    const cardProducto = document.createElement("div");
    cardProducto.className = "producto__card";
    const contenido = `
      <div class="producto__card__imagen" style="background-Image: url(${imageURL})"></div>
      <h3 class="producto__card__titulo">${name}</h3>
      <p class="producto__card__precio">${price}</p>
      <a class="producto__card__boton" href="../Paginas/ver-producto.html?id=${id}">Ver producto</a>
    `
    cardProducto.innerHTML = contenido;
    return cardProducto;
  }