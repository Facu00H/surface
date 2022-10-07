import React from 'react';
import {useState} from 'react'
import './user.css'
import { AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const User = () => {

  const [display, setDisplay] = useState('none')

  function changeDisplay(){
    if(display === 'none'){
      setDisplay('flex')
    }else{
      setDisplay('none')
    }
  }

const {totalCount} = useSelector(state => state.cart)

  return (
    <>
      <div className='userContent-img'>
        {totalCount}
        <Link to='/cart' style={{ color: "white"}}><AiOutlineShoppingCart  size='28px' className='cart'/></Link>
        <AiOutlineUser size='28px'  onClick={changeDisplay}  style={{width:'54px', borderRadius:'100%', cursor:'pointer'}} />
        {/* <img onClick={changeDisplay} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc3YubX90VNZaT4guYBviMOr2y1J0E9_YEGzcFJg-ucQ&s' style={{width:'54px', borderRadius:'100%', cursor:'pointer'}} alt='user profile pic'/> */}
      </div>
      <div className='dropDown' style={{display, position: 'absolute'}}>
        <div className='navItem'>Nombre</div>
        <div className='navItem'>Mail</div>
        <div className='navItem'>inicia sesion</div>
        <div className='navItem'>Registrate</div>
      </div>
    </>
  );
}

export default User;



