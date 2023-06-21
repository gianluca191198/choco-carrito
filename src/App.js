import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import { useState } from 'react';
import Producto from './components/Producto';
import Changuito from './components/Changuito';

function App() {

  //Lista de productos
  const [productos, guardarProducto] = useState([
    {id: 1, articulo:"Caja de chocolates", precio:5000, gramos:500},
    {id: 2, articulo:"Cocolate en rama", precio:2000,   gramos:200},
    {id: 3, articulo:"Caja de alfajores", precio:2500, gramos:700},
    {id: 4, articulo:"Caja de bombones", precio:4500, gramos:500},
    {id: 5, articulo:"Chocolate premium", precio:6500, gramos:500}
  ])

  const [changuito, agregarProducto] = useState([]);

  return (
    <div className='app'>
      <Header
        titulo="Chocolates Momo"
      />

        <h3>Listado de productos</h3>
      <div className='listado-productos container'>
        <div className='container'>
          {
            productos.map( producto => (
              <Producto
                producto={producto}
                productos={productos}
                key={producto.id}
                changuito={changuito}
                agregarProducto={agregarProducto}
              />
            ))
          }
        </div>
      </div>
      <Changuito
        changuito={changuito}/>
      <Footer/>
    </div>
  );
}

export default App;
