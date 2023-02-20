import React from 'react';

import {Bar} from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto'

export const BarChart = ({dataChart}) => {
    const labels = ["aa","bb","cc","dd","ee","ff","gg"];
    const data = {
    labels: labels,
    datasets: [{
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: [
            'rgba(255, 99, 132)',
            'rgba(255, 159, 64)',
            'rgba(255, 205, 86)',
            'rgba(75, 192, 192)',
            'rgba(54, 162, 235)',
            'rgba(153, 102, 255)',
            'rgba(201, 203, 207)'
        ]
    }]
    };
      
    return (
        <div className="chart-container">
            <h2 style ={{textAlign: 'center'}}> Pokemon Stats </h2>
            <div backgroundColor="black">
                <Bar
                    data={data}
                />  
            </div> 
        </div>   
    )
}