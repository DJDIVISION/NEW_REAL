import React, { Component } from "react";
import Chart from "react-apexcharts";

class BuySellBars extends Component {
  constructor(props) {
    super(props);

    this.state = {
        series: [{
            name: "BUY TAXES (%)",
          data: [3, 1, 1, 3, 1, 1]
        }, {
            name: 'SELL TAXES (%)',
          data: [5, 1, 1, 4, 2, 2]
        }],
        options: {
          chart: {
            type: 'bar',
            height: 430,
            fontFamily: "Comfortaa", 
          },
          title: {
              text: "BUY AND SELL TAXES (%)",
              style: {
                  fontSize: '20px'
              }
          },
          plotOptions: {
            bar: {
              horizontal: true,
              dataLabels: {
                position: 'top',
              },
            }
          },
          dataLabels: {
            enabled: true,
            offsetX: -6,
            style: {
              fontSize: '18px',
              colors: ['#000']
            }
          },
          stroke: {
            show: true,
            width: 1,
            colors: ['#fff']
          },
          tooltip: {
            shared: true,
            intersect: false
          },
          xaxis: {
            categories: ['MARKETING', 'BURN', 'TEAM', 'REFLECTIONS', 'BUYBACK', 'LIQUIDITY'],
            labels: {
                show: true,
                style: {
                    fontSize: '16px',
                }
            }
          },
          legend: {
              fontSize: '16px',
              fontWeight: 'bold',
          }
          
        },
      
      
      };
    }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="320"
              height="400"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default BuySellBars;