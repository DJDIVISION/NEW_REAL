import React, { Component } from 'react';
import Chart from 'react-apexcharts'

class Donut extends Component {

  constructor(props) {
    super(props);

    this.state = {
      options: {
        labels: ['Sale', 'Liquidity', 'Advisors', 'CEX Reserve', 'Team', 'Giveaways', 'Play To Earn', 'Marketing'],
        chart: {
            fontFamily: "Comfortaa", 
        },
        fill: {
            type: "gradient",
        },
        title: {
            text: "TOKENOMICS", 
        },
        legend: {
            position: "bottom",
        }
        
      },
      series: [400000000000, 200000000000, 30000000000, 100000000000, 100000000000, 30000000000, 100000000000, 40000000000],
      
    }
  }

  render() {

    return (
      <div className="donut">
        <Chart options={this.state.options} series={this.state.series}  type="donut" width="380" />
      </div>
    );
  }
}

export default Donut;