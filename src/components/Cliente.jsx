const Cliente = ({ datos, setClienteE, eliminarCliente }) => {
    const handleEliminar = () => {
        const respuesta = confirm('Deseas eliminar este cliente ?');
        if(respuesta) {
            eliminarCliente(datos.id);
        }
    }
    return (
        <div className="mx-5 my-5 bg-white shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold mb-3 text-gray-700 uppercase">
            Nombre: {''}
            <span className="font-normal normal-case">
                { datos.nombre }
            </span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
            Empresa: {''}
            <span className="font-normal normal-case">
                { datos.empresa }
            </span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
            Correo: {''}
            <span className="font-normal normal-case">
                { datos.correo }
            </span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
            Fecha de nacimiento: {''}
            <span className="font-normal normal-case">
                { datos.fna }
            </span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
            Descripción: {''}
            <span className="font-normal normal-case">
                { datos.des }
            </span>
            </p>
            <div className="mt-5 flex justify-end">
                <button 
                    className="mx-1 py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md uppercase font-bold"
                    // Se llama a la funcion con un arrow function porque si no es asi se ejecuta en automatico
                    onClick={ () => setClienteE(datos) }>
                    Editar
                </button>
                <button className="mx-1 py-2 px-10 bg-red-600 hover:bg-red-700 text-white rounded-md uppercase font-bold"
                    onClick={ handleEliminar }>
                    Eliminar
                </button>
            </div>
        </div>
    )
}

export default Cliente