import React, { Fragment } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Producto = ({producto, productos, changuito, agregarProducto}) => {

    //Extraigo valores
    const {id,articulo, precio} = producto;

    //Funcion para comprar un producto
    const seleccionarProducto = (id) => {
        const productoSeleccionado = productos.filter(
            producto => producto.id === id
        )[0];
        const producto = {
            id: uuidv4(),
            articulo: productoSeleccionado.articulo,
            precio: productoSeleccionado.precio,
            gramos: productoSeleccionado.gramos
        };
        
        agregarProducto([...changuito, producto])
    }

    //Funcion para borrar productos
    const borrarProducto = (id) => {
      const carritoActualizado = changuito.filter(producto => producto.id !== id);
      agregarProducto(carritoActualizado);
     };

    return ( 
        <Fragment>
            <div className='card text-center'>
            {articulo}
            <br />
            ${precio}
            {
                productos 
                ? 
                <button
                    className='btn boton'
                    type="button"
                    onClick={ () => seleccionarProducto(id) }>
                    Comprar
                </button>
                :
                <button
                    className='btn boton'
                    type="button"
                    onClick={ () => borrarProducto(id) }>
                    Eliminar
                </button>


            }
            <br></br>
            </div>
        </Fragment>
     );
}
 
export default Producto;