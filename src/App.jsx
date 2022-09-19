import { useState, useEffect } from "react"
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoClientes from "./components/ListadoClientes"

function App() {

  const [cliente, setCliente] = useState([]);
  const [clienteE, setClienteE] = useState({});

  useEffect(() => {
    const obtenerLocalStorage = () => {
      const clientesLocalStorage = JSON.parse(localStorage.getItem('cliente')) ?? [];
      setCliente(clientesLocalStorage);
    };
    obtenerLocalStorage();
  }, []);
  useEffect(() => {
    // localStorage.setItem agrega informacion a la memoria del navegador
    // JSON.stringify comvierte arreglos y objetos en String
    localStorage.setItem('cliente', JSON.stringify( cliente ));
  }, [cliente]);

  const eliminarCliente = (id) => {
    const clientesA = cliente.filter( clienteE => clienteE.id !== id );
    setCliente(clientesA);
  };

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario 
          cliente={cliente}
          setCliente={setCliente}
          clienteE={clienteE}
          setClienteE={setClienteE}
        />
        <ListadoClientes 
          cliente={cliente}
          setClienteE={setClienteE}
          eliminarCliente={eliminarCliente}
        />
      </div>
    </div>
  )
}

export default App