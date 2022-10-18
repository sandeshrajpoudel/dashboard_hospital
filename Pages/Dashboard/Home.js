import React from "react";
import Users from "../../Components/Card/Users";
import Variants from "../../Components/Card/Variants";
import Clock from "../../Components/Clock/Clock";
import PieChart from "../../Components/Piechart/Chart";
import Table from "../../Components/Table/Table";
import './home.css';
const Home = () => {
  return (
    <div className="dashboard">
      <h2 style={{display: 'flex', justifyContent:'left'}}>Dashboard</h2>
      <div className="first">
        <div className="cards">
          <Variants />
        </div>
        <div className="chartSection">
          <PieChart/>
          <Clock/>
        </div>
      </div>
      <div className="second">
        <div className="table">
        <Table/>
        </div>
        
        <div className="doctorsCard">
          <Users/>
        </div>
      </div>
    </div>
  );
};

export default Home;
