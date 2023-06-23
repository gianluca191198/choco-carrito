import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import { useState, useEffect } from 'react';
import Producto from './components/Producto';
import Changuito from './components/Changuito';

function App() {

  //Creamos un hook para guardar la url del gatito
  const [url, editar] = useState(""); // cambiar nombre de variable url

  // Funcion para consultar API
  const consultarAPI = async() => {
    try{
        const api = await fetch("urlQueElija"); //TODO: buscar una api
        const resultado = await api.json();
        editar(resultado[0].url)
    } catch (error){
      console.log(error);
    }
  }

    //Iniciamos nuestro local storage
    let changuitoGuardado = JSON.parse(localStorage.getItem('changuito'));
    if(!changuitoGuardado) {
      changuitoGuardado = []
    };

  //Lista de productos
  const [productos, guardarProducto] = useState([
    {id: 1, articulo:"Caja de chocolates", precio:5000, gramos:500},
    {id: 2, articulo:"Cocolate en rama", precio:2000,   gramos:200},
    {id: 3, articulo:"Caja de alfajores", precio:2500, gramos:700},
    {id: 4, articulo:"Caja de bombones", precio:4500, gramos:500},
    {id: 5, articulo:"Chocolate premium", precio:6500, gramos:500},
    {id: 6, articulo:"Chocolate Vegano", precio:5500, gramos:500},
  ])

  const [changuito, agregarProducto] = useState(changuitoGuardado);
  
  useEffect( () => {
    if(changuitoGuardado) {
      localStorage.setItem('changuito', JSON.stringify(changuito));
    } else {
      localStorage.setItem('changuito', JSON.stringify([]));
    }
  }, [changuitoGuardado]);


  return (
    <div className='app'>
      <Header
        titulo="Chocolates Momo"
      />

        <h3>Listado de productos</h3>
        <div className='listado-productos'>
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
        changuito={changuito}
        agregarProducto={agregarProducto}
        key="1"/>
      <button
        onclick="consultarAPI">
          Traer gatito
      </button>
      <img src={url}></img>
      <Footer/>
    </div>
  );
}

export default App;
