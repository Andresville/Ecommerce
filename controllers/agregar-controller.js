import { productoServices } from "../services/producto-servicios.js";

const formulario = document.querySelector("[data-form-registro]");
formulario.addEventListener("submit", (eventoSubmit) => {
  eventoSubmit.preventDefault();
  const name = document.querySelector("[data-form-producto-nombre]").value;
  const zonaDrag = document.querySelector("[data-drag-area]");
  const imageURL = zonaDrag.querySelector("img").src;
  const price = document.querySelector("[data-form-producto-precio]").value;
  const categoria = document.querySelector("[data-form-producto-categoria]").value;
  const descripcion = document.querySelector("[data-form-producto-descripcion]").value;

  const nameVaciar = document.querySelector("[data-form-producto-nombre]");
  const priceVaciar = document.querySelector("[data-form-producto-precio]");
  const categoriaVaciar = document.querySelector("[data-form-producto-categoria]");
  const descripVaciar = document.querySelector("[data-form-producto-descripcion]");
  const zonaDragVaciar = document.querySelector("[data-drag-area]")
  const contenidoDrag = `
  <img class="imagen-drop-img" src="../IMG/Vector-imagen.svg" alt="icono agrega imagen">
  <img class="imagen-drop-img__pantalla-mobile" src="../IMG/Vector-imagen_mobile.svg" alt="icono agrega imagen">
  <p class="imagen-drop-texto">Arrastre para agregar una imagen para el producto</p>
  `
  //Enviando datos a la funcion que crea el producto
  productoServices
  .crearProductos(name, imageURL, price, categoria, descripcion)
  .then(() => {
    console.log("envio exitoso");
    nameVaciar.value = "";
    priceVaciar.value = "";
    categoriaVaciar.value = "";
    descripVaciar.value = "";
    zonaDragVaciar.classList.remove("active");
    zonaDrag.innerHTML = contenidoDrag;
    
  }).catch((err) => console.log(err));
});
