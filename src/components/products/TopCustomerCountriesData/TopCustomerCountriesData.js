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


import React from "react";
import { FC } from "react";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import "./TopCustomerCountriesData.css";

// import DonutChart from "react-donut-chart";
// import { Donut } from "britecharts-react";

interface DonutChartProps {
  series?: number[];
}
const App: FC<DonutChartProps> = ({ series }) => {
  const matchesMobile = false;

  const options: ApexOptions = {
    states: {
      hover: {
        filter: {
          type: "none"
        }
      }
    },

    labels: ["mimariofis HW", "google.com", "bathroom.com", "other"],
    colors: ["#C56E4F", "#424242", "#798897", "#ECECEC"],

    chart: {
      offsetX: matchesMobile ? -20 : -90,
      offsetY: matchesMobile ? 10 : -50,
      stacked: true,
      stackType: "100%",
      toolbar: {
        show: false
      },
      events: {
        animationEnd: function (ctx: any) {
          ctx.toggleDataPointSelection(2);
        }
      }
    },
    plotOptions: {
      pie: {
        customScale: matchesMobile ? 1 : 0.6,
        donut: {
          size: "65%",
          labels: {
            show: true,
            name: {},
            value: {
              fontSize: "30px"
            },
            total: {
              show: true,
              showAlways: true,
              label: "Total",
              fontSize: "42px",
              color: "#fff",
              formatter: function (w: any) {
                return w.globals.seriesTotals.reduce((a: number, b: number) => {
                  return a + b;
                }, 0);
              }
            }
          }
        }
      }
    },
    dataLabels: {
      enabled: true,
      style: {
        fontSize: "34px"
      },
      formatter: function (val: number, opts: any) {
        return `${Math.floor(val)}%`;
      },
      dropShadow: {
        enabled: true
      }
    },
    stroke: {
      width: 0
    },
    xaxis: {
      categories: ["Fav Color"],
      labels: {
        show: false
      },
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      }
    },
    legend: {
      show: matchesMobile ? false : true,
      showForSingleSeries: false,
      showForNullSeries: true,
      showForZeroSeries: true,
      position: "right",
      horizontalAlign: "center",
      floating: false,
      inverseOrder: false,
      width: undefined,
      height: undefined,
      tooltipHoverFormatter: undefined,
      customLegendItems: [],
      offsetX: 50,
      offsetY: 150,
      labels: {
        colors: undefined,
        useSeriesColors: false
      },
      itemMargin: {
        horizontal: 0,
        vertical: 10
      },
      markers: {
        width: 12,
        height: 12,
        strokeWidth: 0,
        strokeColor: "#fff",
        fillColors: undefined,
        radius: 12,
        customHTML: undefined,
        onClick: undefined,
        offsetX: 0,
        offsetY: 0
      }
    }
  };

  return (
    <>
      <Chart series={[31, 55, 41, 55]} options={options} type="donut" />
    </>
  );
};
export default App;
