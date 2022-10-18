import React from 'react';
import "./masterpage.css"
import Sidebar from '../Components/Sidebar/Sidebar';
import {Routes,Route,} from "react-router-dom";
import Home from './Dashboard/Home';
import Navbar from '../Components/Navbar/Navbar';

const Masterpage = () => {
  return (
    <div className='mainContainer'>
      
      <div className="sidebar"> 
        <Sidebar/>
        
      </div>
      <div className="container">
<div className="navwrapper">
        <Navbar/>
</div>
<div className="body">
      <Routes>
        <Route path ="/" exact element= {<Home/>} />


        
      </Routes>
      </div>
      </div>
    </div>
  )
}

export default Masterpage;
