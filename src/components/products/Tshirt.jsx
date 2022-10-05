import React from 'react'
import {useGetTShirtQuery} from '../../features/tShirtAPI'
import './product.css'


export default function Tshirt() {

  let query = ''

  const {
    data: shirts,
    isLoading,
    isSuccess,
    isError,
    isFailed
  } = useGetTShirtQuery(query)

  let data = []

  if(isSuccess){
    data = shirts.response
  }

  console.log(data)

  function generateCard(param){
    return(
      <div key={param._id} className='cardProduct'>
        <div className='imgContainer'>
          <img src={param.photo} alt='tshirt'/>
        </div>
        <div className='cardBody'>
          <h3>X nombre</h3>
          <p>Descripcion: {param.description}</p>
          <div className='cardData'>
            <p>Stock: {param.stock}</p>
            <p>Precio: ${param.price}</p>
          </div>
          <div className='addCart'>
            <div>Futuro select</div>
            <div className='buttonAddCart'>Añadir al carrito</div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container">
        {data.map(generateCard)}
    </div>
  )
}