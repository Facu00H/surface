import React from 'react'
import { useGetHoodieQuery } from '../../features/actions/hoodieAPI'
import PrintProduct from './PrintProduct'

export default function ProductosDestacos() {
    let params = ''
    const { 
        data: hoodie,
        isLoading, 
        isSuccess,
        isError
    } = useGetHoodieQuery(params)

    let data = [];

    if(isLoading){
        data = []
    }
    if(isSuccess){
        data = hoodie.response
    }

    return (
        <>
            <h2 className='h3'>Nuestros productos</h2>
            <div className='container'>
                {data.slice(1,2).map( (hoodies, index )=> <PrintProduct className={index %2 === 0 ? 'normal' : 'reverse'} key={hoodies.price} data={hoodies} /> ) }
            </div>
        </>
    )
}
