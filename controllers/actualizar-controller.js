import { productoServices } from "../services/producto-servicios.js";

let id,imageURL;
const obtenerInfoProducto = async () => {
  const url = new URL(window.location);
  id = (url.searchParams.get("id"));

  if(id === null){
    console.log("Hubo error al momento de traer la info de este producto");
  }

  const name = document.querySelector("[data-form-producto-nombre]");
  const price = document.querySelector("[data-form-producto-precio]");
  const categoria = document.querySelector("[data-form-producto-categoria]");
  const descripcion = document.querySelector("[data-form-producto-descripcion]");
  const zonaDrag = document.querySelector("[data-drag-area]")
  
  try{
    const producto = await productoServices.detalleProducto(id);
    console.log(producto);
    if(producto.name && producto.price && producto.descripcion && producto.imageURL && producto.categoria){
      name.value = producto.name;
      price.value = producto.price;
      categoria.value = producto.categoria;
      descripcion.value = producto.descripcion;
      imageURL = producto.imageURL;

      let imgTag = `<img src="${producto.imageURL}" alt="" style="width:100%; height:100%; border-radius:5px">`;
      zonaDrag.innerHTML = imgTag;
      zonaDrag.classList.add("active");
    }
  }catch(error){
    console.log("catch error", error);
  }
}
obtenerInfoProducto();

const informacionCargada = document.querySelector("[data-form-registro]");

informacionCargada.addEventListener ("submit", evento =>{
    evento.preventDefault();

    const zonaDrag = document.querySelector("[data-drag-area]");
    const imageURL = zonaDrag.querySelector("img").src;

    const name = document.querySelector("[data-form-producto-nombre]").value;
    const price = document.querySelector("[data-form-producto-precio]").value;
    const categoria = document.querySelector("[data-form-producto-categoria]").value;
    const descripcion = document.querySelector("[data-form-producto-descripcion]").value;

    console.log(imageURL);
    console.log(name);
    console.log(price);
    console.log(categoria);
    console.log(descripcion);

    productoServices.actualizarProducto(name, price, imageURL, id, categoria, descripcion);
});

