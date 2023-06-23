import React, { useState } from 'react';
import './changuito.css'
import Producto from './Producto';
import carrito from '../resources/carrito.svg';

const Changuito = ({changuito, agregarProducto}) => {
    var [mostrarCarrito, toggleCarrito]  = useState(false);

    const handleClick = event => {
        toggleCarrito(mostrarCarrito ? false : true);
      };

    return ( 
        <>
            <div className='changuito'>
            <img className="icono-carrito" src={carrito} onClick={handleClick}></img>
                {
                    mostrarCarrito ?
                        changuito.length > 0?
                            changuito.map( producto => (
                                <Producto
                                    key = {producto.id}
                                    producto={producto}
                                    changuito={changuito}
                                    agregarProducto={agregarProducto}
                                />
                            ))
                            :
                            <div className='card'>Changuito vacio</div>
                    :
                    <div></div>
                }
            </div>
        </>
     );
}
 
export default Changuito;