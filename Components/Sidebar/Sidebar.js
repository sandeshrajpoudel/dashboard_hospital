  import React, {useState} from "react";
import { Sidemenu } from "../API/Data";
import "./sidebar.css";
import Logo from '../../assets/logo.png';

import {MdLogout,} from 'react-icons/md';
import {FaBars,} from 'react-icons/fa';
import {
 Link,
} from "react-router-dom";




const Sidebar = () => {
  const [active, setactive]= useState(0);
  const [sidenav, setSidenav]= useState(false);

  const handleclick= ()=>{
    console.log(sidenav);
    setSidenav(!sidenav);

}
  
  return (
    <>
    <div className="hamburger"  
    style={sidenav?{left: '35%',}:{left: '2%',}}>
        <FaBars  onClick={handleclick}/>
      </div>
      
    <div className= "sidebar" id="sidetoggle" >
      <div className="wrapper">
      <div className="top">
        <img src={Logo} alt="Logo" />
        <span> Dashboard</span>
      </div>
      <div className="menu">
        <ul>
          {Sidemenu.map((item, index) => {
            return (
              <Link   to={item.to}  key={index} title={item.name} 
              style={{textDecoration: 'inherit',color: 'inherit',}}
              ><li className={active===index?"active":""} 
              onClick={()=>{
                setactive(index);
              }}>
              

                {item.icon}             
                <span>{item.name}</span>
              
                </li>
              </Link>
             
            );
          })}
        </ul>
        
      </div>
      </div>
      <div className="bottom" title="logout">
        <MdLogout/> <span>Logout</span>
    
        </div>
    </div>
    </>
  );
};

export default Sidebar;
