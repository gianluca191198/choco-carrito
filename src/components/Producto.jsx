import React, { Fragment } from 'react';

const Producto = ({producto, productos, changuito, agregarProducto}) => {

    //Extraigo valores
    const {id,articulo, precio} = producto;

    //Funcion para comprar un producto
    const seleccionarProducto = (id) => {
        const producto = productos.filter(
            producto => producto.id === id
        )[0];
        agregarProducto([...changuito, producto])
        console.log(changuito);
    }

    // const eliminarProducto = (id) => {
    //     productos = productos.filter(item => item.id !== id)
    //     agregarProducto();
    // };

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
                    type="button"
                    onClick={ () => seleccionarProducto(id) }>
                    Comprar
                </button>
                :
                <button
                    type="button"
                    onClick={ () => seleccionarProducto(id) }>
                    Eliminar
                </button>


            }
            <br></br>
            </div>
        </Fragment>
     );
}
 
export default Producto;