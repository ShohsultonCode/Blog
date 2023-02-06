import React from 'react';
import Private from './private/Private'
import Home from './pages/Home'
import Blog from './pages/About'
import Navbar from './components/Navbar'
import {Routes, Route} from 'react-router-dom'
const App = () => {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='*' element={<Private/>}/>
      </Routes>
    </>
  );
};

export default App;