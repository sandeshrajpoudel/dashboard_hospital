import React from 'react';
import './chart.css';
import Chart from "react-apexcharts";

const PieChart = () => {
  return (
<div className="piechart">
  <h6>Total cases (%)</h6>
<Chart
          type="donut"
          width={'300px'}
          height={'300px'}
          series={[20,40,40]}
          options={{
            labels:['Birth', 'Death', 'Accident'],
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
    
</div>  )
}

export default PieChart;

// later it is changed to pie chart 
// 