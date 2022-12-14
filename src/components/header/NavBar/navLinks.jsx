import React from 'react';
import { Link, link }  from "react-router-dom";


const NavLinks = (param) => {
  return (
    <div className="linkContainer">
      <Link onClick={param.onClick} style={{ textDecoration: "none"}} to={"/"}><p className="navLinks2">Inicio</p></Link>
      <Link onClick={param.onClick} style={{ textDecoration: "none"}} to={"/products"}><p className="navLinks2">Productos</p></Link>
      <Link onClick={param.onClick} style={{ textDecoration: "none"}} to={"/contest"}><p className="navLinks2">Concurso</p></Link>
      <Link onClick={param.onClick} style={{ textDecoration: "none"}} to={"/contact"}><p className="navLinks2">Contacto</p></Link>
    </div>
  );
}

export default NavLinks;
