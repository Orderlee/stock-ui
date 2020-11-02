// import React, { Component, Fragment } from "react";
// import { Grid, Card } from "@material-ui/core";

// import DoughnutChart from "../charts/echarts/Doughnut";

// import ModifiedAreaChart from "./shared/ModifiedAreaChart";
// import StatCards from "./shared/StatCards";
// import TableCard from "./shared/TableCard";
// import RowCards from "./shared/RowCards";
// import StatCards2 from "./shared/StatCards2";
// import UpgradeCard from "./shared/UpgradeCard";
// import Campaigns from "./shared/Campaigns";
// import { withStyles } from "@material-ui/styles";

// class Dashboard2 extends Component {
//   state = {};

//   render() {
//     let { theme } = this.props;

//     return (
//       <Fragment>
//         <div className="pb-24 pt-7 px-8 bg-primary">
//           <div className="card-title capitalize text-white mb-4 text-white-secondary">
//             Last 12 months sales
//           </div>
//           <ModifiedAreaChart
//             height="280px"
//             option={{
//               series: [
//                 {
//                   data: [34, 45, 31, 45, 31, 43, 26, 43, 31, 45, 33, 40],
//                   type: "line"
//                 }
//               ],
//               xAxis: {
//                 data: [
//                   "Jan",
//                   "Feb",
//                   "Mar",
//                   "Apr",
//                   "May",
//                   "Jun",
//                   "Jul",
//                   "Aug",
//                   "Sep",
//                   "Oct",
//                   "Nov",
//                   "Dec"
//                 ]
//               }
//             }}
//           ></ModifiedAreaChart>
//         </div>

//         <div className="analytics m-sm-30 mt--18">
//           <Grid container spacing={3}>
//             <Grid item lg={8} md={8} sm={12} xs={12}>
//               <StatCards />

//               {/* Top Selling Products */}
//               <TableCard />

//               <StatCards2 />

//               <h4 className="card-title text-muted mb-4">Ongoing Projects</h4>
//               <RowCards />
//             </Grid>

//             <Grid item lg={4} md={4} sm={12} xs={12}>
//               <Card className="px-6 py-4 mb-6">
//                 <div className="card-title">Traffic Sources</div>
//                 <div className="card-subtitle">Last 30 days</div>
//                 <DoughnutChart
//                   height="300px"
//                   color={[
//                     theme.palette.primary.dark,
//                     theme.palette.primary.main,
//                     theme.palette.primary.light
//                   ]}
//                 />
//               </Card>

//               <UpgradeCard />

//               <Campaigns />
//             </Grid>
//           </Grid>
//         </div>
//       </Fragment>
//     );
//   }
// }

// export default withStyles({}, { withTheme: true })(Dashboard2);

import { withStyles } from "@material-ui/styles";
import React, { Component } from "react";
import CanvasJSReact from './canvasjs.stock.react';
import {axios} from 'axios'
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSStockChart = CanvasJSReact.CanvasJSStockChart;
 
class App2 extends Component {
  constructor(props) {
    super(props);
    this.state = { dataPoints1: [], dataPoints2: [], dataPoints3: [], isLoaded: false };
  }
 
  componentDidMount() {
    //Reference: https://reactjs.org/docs/faq-ajax.html#example-using-ajax-results-to-set-local-state
    fetch("https://canvasjs.com/data/docs/ltcusd2018.json")
      .then(res => res.json())
      .then(
        (data) => {
          var dps1 = [], dps2 = [], dps3 = [];
          for (var i = 0; i < data.length; i++) {
            dps1.push({
              x: new Date(data[i].date),
              y: [
                Number(data[i].open),
                Number(data[i].high),
                Number(data[i].low),
                Number(data[i].close)
              ]
            });
            dps2.push({x: new Date(data[i].date), y: Number(data[i].volume_usd)});
            dps3.push({x: new Date(data[i].date), y: Number(data[i].close)});
          }
          this.setState({
            isLoaded: true,
            dataPoints1: dps1,
            dataPoints2: dps2,
            dataPoints3: dps3
          });
        }
      )
  }
 
  render() {
    const options = {
      theme: "light2",
      title:{
        text:"React StockChart with Date-Time Axis"
      },
      subtitles: [{
        text: "Price-Volume Trend"
      }],
      charts: [{
        axisX: {
          lineThickness: 5,
          tickLength: 0,
          labelFormatter: function(e) {
            return "";
          },
          crosshair: {
            enabled: true,
            snapToDataPoint: true,
            labelFormatter: function(e) {
              return "";
            }
          }
        },
        axisY: {
          title: "Litecoin Price",
          prefix: "$",
          tickLength: 0
        },
        toolTip: {
          shared: true
        },
        data: [{
          name: "Price (in USD)",
          yValueFormatString: "$#,###.##",
          type: "candlestick",
          dataPoints : this.state.dataPoints1
        }]
      },{
        height: 100,
        axisX: {
          crosshair: {
            enabled: true,
            snapToDataPoint: true
          }
        },
        axisY: {
          title: "Volume",
          prefix: "$",
          tickLength: 0
        },
        toolTip: {
          shared: true
        },
        data: [{
          name: "Volume",
          yValueFormatString: "$#,###.##",
          type: "column",
          dataPoints : this.state.dataPoints2
        }]
      }],
      navigator: {
        data: [{
          dataPoints: this.state.dataPoints3
        }],
        slider: {
          minimum: new Date("2018-05-01"),
          maximum: new Date("2018-07-01")
        }
      }
    };
    const containerProps = {
      width: "100%",
      height: "450px",
      margin: "auto"
    };
    return (
      <div> 
        <div>
          {
            // Reference: https://reactjs.org/docs/conditional-rendering.html#inline-if-with-logical--operator
            this.state.isLoaded && 
            <CanvasJSStockChart containerProps={containerProps} options = {options}
              /* onRef = {ref => this.chart = ref} */
            />
          }
        </div>
      </div>
    );
  }
}
export default App2; 
