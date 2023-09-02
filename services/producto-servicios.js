const listaProductos = () => {
    return fetch("http://localhost:3000/productos")
        .then(respuesta => respuesta.json())
        .catch(error => console.log(error))
};

const crearProductos = (name, imageURL, price, id) => {
    return fetch("http://localhost:3000/productos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name,
            imageURL,
            price,
            id,
        })
    })
        .then(respuesta => {
            if (respuesta.ok) {
                return respuesta.body
            }
            throw new Error("No se pudo crear el producto");
        });

};

const eliminarProducto = (id) => {
     return fetch(`http://localhost:3000/productos/${id}`, {
        method: "DELETE"
    });
};

//Detalles del producto por ID
const detalleProducto = async (id) => {
    return fetch(`http://localhost:3000/productos/${id}`).then(respuesta => respuesta.json());
};

const actualizarProducto = (name, price, imageURL, id, categoria) => {
    return fetch(`http://localhost:3000/productos/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ 
            name, 
            price, 
            imageURL, 
            categoria 
        })
    }).then(respuesta => respuesta).catch(error => console.log(error));
};


export const productoServices = {
    listaProductos,
    crearProductos,
    eliminarProducto,
    detalleProducto,
    actualizarProducto
};