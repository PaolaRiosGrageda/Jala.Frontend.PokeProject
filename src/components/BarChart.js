import React from 'react';

import {Bar} from 'react-chartjs-2';



const BarChart = ({data}) => {
    data = [
        {
          id: 1,
          year: 2016,
          userGain: 80000,
          userLost: 823
        },
        {
          id: 2,
          year: 2017,
          userGain: 45677,
          userLost: 345
        },
        {
          id: 3,
          year: 2018,
          userGain: 78888,
          userLost: 555
        },
        {
          id: 4,
          year: 2019,
          userGain: 90000,
          userLost: 4555
        },
        {
          id: 5,
          year: 2020,
          userGain: 4300,
          userLost: 234
        }
      ];
      
    return (
    <div className="chart-container">
        <h2 style ={{textAlign: 'center'}}> Pokemon Stats </h2>
        <Bar
            data ={data}
            options={{
                plugins:{
                    title:{
                        display:true,
                        text:"Pkemon data"
                    },
                    legend:{
                        display:false
                    }
                }
            }}
        />
       
    </div>
       
    )
}

export default BarChart;