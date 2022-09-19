import { useState, useEffect } from "react";
import Error from "./Error";

const Formulario = ({ cliente, setCliente, clienteE, setclienteE }) => {

  const [nombre, setNombre] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [correo, setCorreo] = useState('');
  const [fna, setFna] = useState('');
  const [des, setDes] = useState('');
  const [error, setError] = useState(false);  

  useEffect(
    () => {
      if(Object.keys(clienteE).length > 0) {
        setNombre(clienteE.nombre)
        setEmpresa(clienteE.empresa)
        setCorreo(clienteE.correo)
        setFna(clienteE.fna)
        setDes(clienteE.des)
      }
    }, [clienteE]
  )

  const generarId = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);
    return random + fecha;
  }
  // Valida si los campos de el formulario estan todos llenos
  const handleSubmit = (e) => {
    e.preventDefault();
    if( [nombre, empresa, correo, fna, des].includes('') ) {
      setError(true);
      return;
    }
    setError(false);
    // Objeto paciente
    const objetoCliente = {
      nombre, 
      empresa, 
      correo, 
      fna, 
      des,
    }
    if(clienteE.id) {
      // Editando el registro
      objetoCliente.id = clienteE.id;
      const clienteA = cliente.map( clienteState => clienteState.id === clienteE.id ? objetoCliente : clienteState );
      setCliente(clienteA);
      setclienteE({});
    } else {
      // Nuevo cliente
      // Se genera el id y se inserta en el objeto
      objetoCliente.id = generarId();
      // Metodo inmutable para insertar un nuevo objeto a el arreglo que ya contiene objetos
      setCliente([...cliente, objetoCliente]);
    }
    // Reiniciar el formulario
    setNombre('');
    setEmpresa('');
    setCorreo('');
    setFna('');
    setDes('');
  }

  return (

    <div className="md:w-1/2 lg:w-2/5 mx-5 mb-10">
      <h2 className="font-black text-3xl text-center">
        Seguimiento de clientes
      </h2>
      <p className="text-lg mt-5 mb-10 text-center">
        Añade clientes y {""}
        <span className="text-indigo-600 font-bold">administralos</span>
      </p>
      <form onSubmit={ handleSubmit } className="bg-white shadow-md rounded-lg py-10 px-5">
        { error && <Error>Todos los campos son requeridos</Error> }
        <div className="mb-5">
          <label htmlFor="nombre" className="block text-gray-700 uppercase font-bold">
            Nombre del cliente
          </label>
          <input 
            id="nombre"
            type="text"
            placeholder="Nombre del cliente"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={ nombre }
            onChange={ (e) => { setNombre(e.target.value) } }
          />
        </div>
        <div className="mb-5">
          <label htmlFor="empresa" className="block text-gray-700 uppercase font-bold">
            Nombre de la empresa
          </label>
          <input 
            id="empresa"
            type="text"
            placeholder="Nombre de la empresa"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={ empresa }
            onChange={ (e) => { setEmpresa(e.target.value) } }
          />
        </div>
        <div className="mb-5">
          <label htmlFor="correo" className="block text-gray-700 uppercase font-bold">
            Correo
          </label>
          <input 
            id="correo"
            type="email"
            placeholder="Correo"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={ correo }
            onChange={ (e) => { setCorreo(e.target.value) } }
          />
        </div>
        <div className="mb-5">
          <label htmlFor="fna" className="block text-gray-700 uppercase font-bold">
            Fecha de nacimiento
          </label>
          <input 
            id="fna"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={ fna }
            onChange={ (e) => { setFna(e.target.value) } }
          />
        </div>
        <div className="mb-5">
          <label htmlFor="des" className="block text-gray-700 uppercase font-bold">
            Descripción
          </label>
          <textarea
            id="des"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={ des }
            onChange={ (e) => { setDes(e.target.value) } }
          />
        </div>
        <input 
          type="submit" 
          value={ clienteE.id ? 'Editar cliente' : 'Guardar cliente' } 
          className="bg-indigo-600 w-full p-3 rounded-md text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer"
        />
      </form>
    </div>

  )
}

export default Formulario;