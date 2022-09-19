import Cliente from "./Cliente"

const ListadoClientes = ({ cliente, setClienteE, eliminarCliente}) => {
  return (
    <div className="md:w-1/2 lg:w-3/5">
      {cliente.length > 0 ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado clientes</h2>
          <p className="text-lg mt-5 mb-10 text-center">
            Administra tus {''}
            <span className="text-indigo-600 font-bold">clientes</span>
          </p>
          { cliente.map( datos => (
            <Cliente 
              key={datos.id}
              datos={datos}
              setClienteE={setClienteE}
              eliminarCliente={eliminarCliente}
            />
          ) ) }
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No existen clientes</h2>
          <p className="text-lg mt-5 mb-10 text-center">
            Comienza creando un {''}
            <span className="text-indigo-600 font-bold">cliente</span>
          </p>
        </>
      )}
    </div>
  )
}

export default ListadoClientes