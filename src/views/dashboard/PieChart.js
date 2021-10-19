import React from 'react';
import { Pie } from "react-chartjs-2";

const PieChart = () => {
    let data = {       
        labels: ['Nigeria', 'Ghana', 'Kenya', 'Mauritius', 'Morrocco' , 'South Africa'],
        datasets: [{
            label: 'Countries',
            data: [25000, 50000, 100000, 150000, 200000, 18000],
            backgroundColor: [
              'rgba(31, 196, 6, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(193, 6, 196, 1)',
              'rgba(196, 6, 12, 1)',
              'rgba(196, 190, 6, 1)',
              'rgba(255, 159, 64, 1)'
          ],
     
        }]
    };


    return (
            <div >
                <div className="piechart"  style ={{flexBasis:'1' ,  padding : '0 4rem 0 4rem' , marginBottom:'4rem'}}>
                        <p style = {{fontSize:'18px' , fontColor: '#222428'}}>Average Cost by country</p>
                        <Pie
                            data={data}
                            options={{
                                aspectRatio:2,
                                title: {
                                    fontSize: 25,
                                },
                                scales:{
                                    yAxes:[ {
                                        ticks:{
                                            beginAtZero: true
                                        }
                                    }]
                                },
                            }}
                        />
                </div>
            </div>
    );
}
export default PieChart;