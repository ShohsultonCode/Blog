import React from 'react';
import "./style.scss";
import {NavLink} from "react-router-dom";



const index = () => {

   return (
      <div className="wrapper d-flex justfy-content-center align-items-center">
      <div className="container">
         <h2>Hammaga salom do'stlar sizlar bilan SultonDev</h2>
         <h2>JavaScript bo'yicha bilimlarimni ulashaman <img className='js' src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" alt="JS" /> </h2>
           <NavLink to="/blog" className='btn' id='kirish'>Kirish</NavLink>
      </div>
      </div>
   );
};

export default index;