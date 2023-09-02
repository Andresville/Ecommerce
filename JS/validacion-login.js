
const btnEnviar = document.querySelector("#login");

btnEnviar.addEventListener("click", (evento) => {
    evento.preventDefault();
    loginUsuario();
})

const loginUsuario = () => {
    const usuario = document.querySelector("[data-form-usuario]").value;
    const contrasena = document.querySelector("[data-form-contrasena]").value;
    console.log(usuario, contrasena);
    const usuarioDefinido = "Andres";
    const contrasenaDefinida = "Andres2804";

    if (usuario === usuarioDefinido && contrasena === contrasenaDefinida) {
        
        return window.location.href = "../Paginas/administrador-productos.html";

    }
}