import React from "react";
import "./variant.css";
import Chart from "react-apexcharts";



const Variant = (props) => {

  return (
    <div className="card">
      <div className="chart"> 
        <Chart
          type="radialBar"
          width={'130px'}
          height={'130px'}
          series={props.series}
          options={{
            plotOptions: {
              radialBar: {
                startAngle: 0,
                endAngle: 360,
                stroke: {
                  show: true,
                  curve: 'smooth',
                  lineCap: 'butt',
                  colors: undefined,
                  width: 4.5,
                  dashArray: 0,      
              },
                track: {
                  show: false,
                  background: '#f2f2f2',
                  dropShadow: {
                      enabled: false,
                  }
              },
                dataLabels: {
                  name: {
                     show: false
                },
                value:{
                  show: true,
                  fontSize: '18px',
                  fontFamily: undefined,
                  fontWeight: 'bold',
                  color: 'black',
                  offsetY: 10,
                }
                }
              }
            },
           
          }}
          
        />
      </div>
      <div className="wrapper">
        <div className="name">{props.name}</div>
        <div className="icon">
          {props.icon}
          <span>${props.value}</span>
        </div>
      </div>
    </div>
  );
};

export default Variant;
