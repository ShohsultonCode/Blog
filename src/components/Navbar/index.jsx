import React from 'react';
import "./style.scss";
import Logo from '../../../public/Logo.png';

const index = () => {
   return (
      <header className='header'>
         <img src={Logo} alt="Logo"/>
         <h1>SultonDev</h1>
         <button className='btn btn-outline-danger'>Log Out</button>
      </header>
   );
};

export default index;