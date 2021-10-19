import React from 'react';
import {Bar  } from "react-chartjs-2";

const BarChart = () => {
    let data = {
        labels: ['Mar 1 - 7', 'Mar 8 - 14', 'Mar 15 - 21', 'Mar 22 - 28', 'Final wk'],
        datasets: [{
            label: 'Amount spent per week',
            data: [25000, 50000, 100000, 150000, 200000],
            backgroundColor: [
                'rgba(54, 162, 235, .7)',
            ],
        }]
    };


    return (
            <div >
                <div className="barchart" style ={{flexBasis:'2' , padding : '0 4rem 0 4rem' , marginBottom:'4rem'}}>
                        <p  style = {{fontSize:'18px' , fontColor: '#222428'}}>Amount spent so far: $180,000</p>
                        <Bar
                            data={data}
                            options={{
                                aspectRatio:2,
                                height:'150rem',
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
export default BarChart;