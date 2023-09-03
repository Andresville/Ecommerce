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

const obtenerInformacion = async () => {

  const url = new URL(window.location);
  const id = url.searchParams.get("id"); //Extraccion ID de la URL

  if(id === null){
    console.log("Hubo error al momento de buscar el producto")
  }

  //Traemos la informacion del producto que fue clickado
  try{
    const producto = await productoServices.detalleProducto(id);
    //Validamos que ese ID tenga informacion
    if(producto.name && producto.price && producto.categoria && producto.imageURL){
      //Contenedo de la informacion
      const infoProducto = document.querySelector("[data-producto]");

      const contenido = `
        <img class="producto__imagen" src="${producto.imageURL}" alt="producto star wars">
        <div class="producto__info">
            <h2 class="producto__info__titulo">${producto.name}</h2>
            <p class="producto__info__valor">${producto.price}</p>
            <p class="producto__info__descripcion">${producto.categoria}</p>
        </div>
      ` 
      //Pasamos los detalles del producto
      infoProducto.innerHTML = contenido;

      //Productos relacionados segun categoria
      const categoriaSolicitada = producto.categoria;
      const idProductoVisto = producto.id;

      const productosSimilares = document.querySelector("[data-productos-similares]");
      productoServices.listaProductos().then(data => {
        data.forEach(({name, price, imageURL, id, categoria}) => {
          //Imprimir datos en el index
          if(categoria === "star-wars" && categoriaSolicitada === "star-wars" && idProductoVisto != id){
                productosSimilares.appendChild(
                    nuevoProducto(name, imageURL, price, id))
          }else if(categoria === "consolas" && categoriaSolicitada === "consolas" && idProductoVisto != id){
            productosSimilares.appendChild(
                nuevoProducto(name, imageURL, price, id))
          }else if(categoria === "diversos" && categoriaSolicitada === "diversos" && idProductoVisto != id){
            productosSimilares.appendChild(
                nuevoProducto(name, imageURL, price, id))
          }
        });
      }).catch( error => alert("Ocurrio un error en vista"));
    }else{
      throw new error();
    }
  }catch(error){
    console.log("catch error", error);
  }

  
} 
obtenerInformacion();
