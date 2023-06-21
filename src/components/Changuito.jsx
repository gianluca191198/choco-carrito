import React from 'react';
import './changuito.css'
import Producto from './Producto';

const Changuito = ({changuito}) => {
    return ( 
        <>
            <div className='changuito'>
                <h3>Changuito de compras</h3>
                {
                    changuito.map( producto => (
                        <Producto
                            key = {producto.id}
                            producto={producto}
                        />
                    ))
                }
            </div>
        </>
     );
}
 
export default Changuito;