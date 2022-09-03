// import React from 'react';
// import DonutChart from "react-donut-chart";

// const reactDonutChartdata = [
//   {
//     label: "NDC",
//     value: 25,
//     color: "#00E396"
//   },
//   {
//     label: "RDC",
//     value: 65,
//     color: "#FEB019"
//   },
//   {
//     label: "STOCKIST",
//     value: 100,
//     color: "#FF4560"
//   },
//   {
//     label: "HOSPITAL",
//     value: 15,
//     color: "#775DD0"
//   }
// ];
// const reactDonutChartBackgroundColor = [
//   "#00E396",
//   "#FEB019",
//   "#FF4560",
//   "#775DD0"
// ];
// const reactDonutChartInnerRadius = 0.5;
// const reactDonutChartSelectedOffset = 0.04;
// const reactDonutChartHandleClick = (item, toggled) => {
//   if (toggled) {
//     console.log(item);
//   }
// };
// let reactDonutChartStrokeColor = "#FFFFFF";
// const reactDonutChartOnMouseEnter = (item) => {
//   let color = reactDonutChartdata.find((q) => q.label === item.label).color;
//   reactDonutChartStrokeColor = color;
// };

// export default function App() {
//   return (
//     <div className="App">
//       <DonutChart
//         width={500}
//         onMouseEnter={(item) => reactDonutChartOnMouseEnter(item)}
//         strokeColor={reactDonutChartStrokeColor}
//         data={reactDonutChartdata}
//         colors={reactDonutChartBackgroundColor}
//         innerRadius={reactDonutChartInnerRadius}
//         selectedOffset={reactDonutChartSelectedOffset}
//         onClick={(item, toggled) => reactDonutChartHandleClick(item, toggled)}
//       />
//     </div>
//   );
// }


// import React from "react";
// import { FC } from "react";
// import Chart from "react-apexcharts";
// import { ApexOptions } from "apexcharts";
// import "./TopCustomerCountriesData.css";

// interface DonutChartProps {
//   series?: number[];
// }
// const App: FC<DonutChartProps> = ({ series }) => {
//   const matchesMobile = false;

//   const options: ApexOptions = {
//     states: {
//       hover: {
//         filter: {
//           type: "none"
//         }
//       }
//     },

//     labels: ["mimariofis HW", "google.com", "bathroom.com", "other"],
//     colors: ["#C56E4F", "#424242", "#798897", "#ECECEC"],

//     chart: {
//       offsetX: matchesMobile ? -20 : -90,
//       offsetY: matchesMobile ? 10 : -50,
//       stacked: true,
//       stackType: "100%",
//       toolbar: {
//         show: false
//       },
//       events: {
//         animationEnd: function (ctx: any) {
//           ctx.toggleDataPointSelection(2);
//         }
//       }
//     },
//     plotOptions: {
//       pie: {
//         customScale: matchesMobile ? 1 : 0.6,
//         donut: {
//           size: "65%",
//           labels: {
//             show: true,
//             name: {},
//             value: {
//               fontSize: "30px"
//             },
//             total: {
//               show: true,
//               showAlways: true,
//               label: "Total",
//               fontSize: "42px",
//               color: "#fff",
//               formatter: function (w: any) {
//                 return w.globals.seriesTotals.reduce((a: number, b: number) => {
//                   return a + b;
//                 }, 0);
//               }
//             }
//           }
//         }
//       }
//     },
//     dataLabels: {
//       enabled: true,
//       style: {
//         fontSize: "34px"
//       },
//       formatter: function (val: number, opts: any) {
//         return `${Math.floor(val)}%`;
//       },
//       dropShadow: {
//         enabled: true
//       }
//     },
//     stroke: {
//       width: 0
//     },
//     xaxis: {
//       categories: ["Fav Color"],
//       labels: {
//         show: false
//       },
//       axisBorder: {
//         show: false
//       },
//       axisTicks: {
//         show: false
//       }
//     },
//     legend: {
//       show: matchesMobile ? false : true,
//       showForSingleSeries: false,
//       showForNullSeries: true,
//       showForZeroSeries: true,
//       position: "right",
//       horizontalAlign: "center",
//       floating: false,
//       inverseOrder: false,
//       width: undefined,
//       height: undefined,
//       tooltipHoverFormatter: undefined,
//       customLegendItems: [],
//       offsetX: 50,
//       offsetY: 150,
//       labels: {
//         colors: undefined,
//         useSeriesColors: false
//       },
//       itemMargin: {
//         horizontal: 0,
//         vertical: 10
//       },
//       markers: {
//         width: 12,
//         height: 12,
//         strokeWidth: 0,
//         strokeColor: "#fff",
//         fillColors: undefined,
//         radius: 12,
//         customHTML: undefined,
//         onClick: undefined,
//         offsetX: 0,
//         offsetY: 0
//       }
//     }
//   };

//   return (
//     <>
//       <Chart series={[31, 55, 41, 55]} options={options} type="donut" />
//     </>
//   );
// };
// export default App;



// import React from 'react';
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
// import { Doughnut } from 'react-chartjs-2';
// import "./TopCustomerCountriesData.css";

// ChartJS.register(ArcElement, Tooltip, Legend);

// export const data = {
//   labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//   datasets: [
//     {
//       label: '# of Votes',
//       data: [12, 19, 3, 5, 2, 3],
  
//       backgroundColor: [
//         'rgba(255, 99, 132, 0.2)',
//         'rgba(54, 162, 235, 0.2)',
//         'rgba(255, 206, 86, 0.2)',
//         'rgba(75, 192, 192, 0.2)',
//         'rgba(153, 102, 255, 0.2)',
//         'rgba(255, 159, 64, 0.2)',
//       ],
//       borderColor: [
//         'rgba(255, 99, 132, 1)',
//         'rgba(54, 162, 235, 1)',
//         'rgba(255, 206, 86, 1)',
//         'rgba(75, 192, 192, 1)',
//         'rgba(153, 102, 255, 1)',
//         'rgba(255, 159, 64, 1)',
//       ],
//       borderWidth: 1,
//     },
//   ],
// };

// export default function TopCustomerCountriesData() {
//   return <Doughnut data={data} />;
// }

// import React from 'react';
// import "./TopCustomerCountriesData.css";
// import { Doughnut } from "react-chartjs-2";
// import {Chart, ArcElement} from 'chart.js'
// Chart.register(ArcElement);

// const data = {
//   labels: ["Pickup", "Delivery", "Ship to Home"],
//   datasets: [
//     {
//       data: [2, 3, 5],
//       backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
//       hoverBackgroundColor: ["red", "#36A2EB", "#FFCE56"],
//       borderWidth: 1
//     }
//   ]
//   // text: "25%"
// };
// const plugins = [
//   {
//     beforeDraw: function (chart) {
//       var width = chart.width,
//         height = chart.height,
//         ctx = chart.ctx;
//       ctx.restore();
//       var fontSize = (height / 160).toFixed(2);
//       ctx.font = fontSize + "em sans-serif";
//       ctx.textBaseline = "top";
//       var text = "Foo-bar",
//         textX = Math.round((width - ctx.measureText(text).width) / 2),
//         textY = height / 2;
//       ctx.fillText(text, textX, textY);
//       ctx.save();
//     }
//   }
// ];

// const options1 = {
//   responsive: true,
//   cutoutPercentage: 85,
//   maintainAspectRatio: false,
//   legend: {
//     display: true,
//     position: "bottom",
//     usePointStyle: "true",
//     labels: {
//       fontSize: 12,
//       padding: 25,
//       fontColor: "#6D7278",
//       fontFamily: "kanit light"
//     }
//   }
// };

// export default function App() {
//   return (
//     <>
//       <Doughnut
//         data={data}
//         options={options1}
//         height={250}
//         plugins={plugins}
//         // width={800}
//       />
//     </>
//   );
// }



// import React from "react";
// import { Chart } from "react-google-charts";

// export const data = [
//   ["Language", "Speakers (in millions)"],
//   ["Assamese", 13],
//   ["Bengali", 83],
//   ["Bodo", 1.4],
//   ["Dogri", 2.3],
//   ["Gujarati", 46],
//   ["Hindi", 300],
//   ["Kannada", 38],
//   ["Kashmiri", 5.5],
//   ["Konkani", 5],
//   ["Maithili", 20],
//   ["Malayalam", 33],
//   ["Manipuri", 1.5],
//   ["Marathi", 72],
//   ["Nepali", 2.9],
//   ["Oriya", 33],
//   ["Punjabi", 29],
//   ["Sanskrit", 0.01],
//   ["Santhali", 6.5],
//   ["Sindhi", 2.5],
//   ["Tamil", 61],
//   ["Telugu", 74],
//   ["Urdu", 52],
// ];

// export const options = {
//   title: "Indian Language Use",
//   legend: "none",
//   pieSliceText: "label",
//   slices: {
//     4: { offset: 0.2 },
//     12: { offset: 0.3 },
//     14: { offset: 0.4 },
//     15: { offset: 0.5 },
//   },
// };

// export function App() {
//   return (
//     <Chart
//       chartType="PieChart"
//       data={data}
//       options={options}
//       width={"100%"}
//       height={"100%"}
//       backgroundColor='#fff'
//     />
//   );
// }
// export default App;



// import React from "react";
// import { Chart } from "react-google-charts";

// export const data = [
//   ["Task", "Hours per Day"],
//   ["Work", 11],
//   ["Eat", 2],
//   ["Commute", 2],
//   ["Watch TV", 2],
//   ["Sleep", 7], // CSS-style declaration
// ];

// export const options = {
//   title: "My Daily Activities",
//   pieHole: 0.4,
//   is3D: false,
// };

// export function App() {
//   return (
//     <Chart
//       chartType="PieChart"
//       width="100%"
//       height="100%"
//       data={data}
//       options={options}
//     />
//   );
// }
// export default App;



// import React from "react";
// import { Doughnut } from "react-chartjs-2";
// import {Chart, ArcElement} from 'chart.js'
// Chart.register(ArcElement);



import React from "react";
import { Doughnut } from "react-chartjs-2";
import 'chart.js/auto'

const data = {
  labels: ["USA", "BELGIUM", "UK", "FRANCE"],
  datasets: [
    {
      data: [500, 500, 500, 500],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      borderWidth: 2
    }
  ],
  options: {
    plugins: {
      legend: {
        labels: {
          color: 'red'
        }
      }
    }
  }
};
export default function App() {
  return <Doughnut data={data} />;
}



// import React from "react";
// import { Doughnut } from "react-chartjs-2";
// import 'chart.js/auto'


// const data = {
//   labels: ["Pickup", "Delivery", "Ship to Home"],
//   datasets: [
//     {
//       data: [20, 30, 50],
//       backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
//       hoverBackgroundColor: ["red", "#36A2EB", "#FFCE56"],
//       borderWidth: 1
//     }
//   ],
//   text: "25%"
// };

// const options1 = {
//   responsive: true,
//   cutoutPercentage: 85,
//   maintainAspectRatio: false,
//   legend: {
//     display: true,
//     position: "bottom",
//     usePointStyle: "true",
//     labels: {
//       fontSize: 12,
//       padding: 25,
//       fontColor: "#6D7278",
//       fontFamily: "kanit light"
//     }
//   }
// };

// export default function App() {
//   return (
//     <>
//       <Doughnut
//         data={data}
//         options={options1}
//         height={350}
//         // width={800}
//       />
//     </>
//   );
// }
