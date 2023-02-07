import React from 'react';
import "./style.scss";
import Logo from '../../../public/Logo.png';
import {NavLink} from "react-router-dom";
const index = () => {
   return (
      <header className='header'>
         <img src={Logo} alt="Logo"/>
         <NavLink className="cen" to="/"><h1>SultonDev</h1></NavLink>
         <a  href="https://www.instagram.com/shohsultoncode" className='btn btn-outline-danger' id='sam'>More info</a>
      </header>   
   );
};
export default index;