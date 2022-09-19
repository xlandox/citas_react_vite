const Error = ({ children }) => {
  return (
    <div className='bg-red-600 rounded-md text-white text-center p-3 uppercase font-bold mb-5'>
        <p>{ children }</p>
    </div> 
  )
}

export default Error