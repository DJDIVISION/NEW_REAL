import React, { Component } from 'react';
import Chart from 'react-apexcharts'

class Donut extends Component {

  constructor(props) {
    super(props);

    this.state = {
      options: {
        labels: ['SALE', 'LIQUIDITY', 'ADVISORS', 'CEX RESERVE', 'TEAM', 'GIVEAWAYS', 'PLAY TO EARN', 'MARKETING'],
        chart: {
            fontFamily: "Comfortaa", 
        },
        fill: {
            type: "gradient",
        },
        title: {
            text: "TOTAL SUPPLY: 1,000,000,000,000", 
            align: "center",
            style: {
                fontSize: '20px',
                
            }
        },
        legend: {
            position: "bottom",
            fontSize: '16px',
            fontWeight: 'bold',
        }
        
      },
      series: [400000000000, 200000000000, 30000000000, 100000000000, 100000000000, 30000000000, 100000000000, 40000000000],
      
    }
  }

  render() {

    return (
      <div className="donut">
        <Chart options={this.state.options} series={this.state.series}  type="donut" width="440" />
      </div>
    );
  }
}

export default Donut;