// /* eslint-disable */
// "use client";
// import React, { useState } from 'react';
// import ReactApexChart from 'react-apexcharts';

// function PresentsPerArea() {
//   const [chartData] = useState({
//     series: [{
//       name: 'Presentes',
//       data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
//     }, {
//       name: 'Ausentes',
//       data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
//     }, {
//       name: 'Falta justificada',
//       data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
//     }],
//     options: {
//       chart: {
//         type: 'bar' as 'bar', // Definindo o tipo explicitamente como 'bar'
//         height: 350
//       },
//       plotOptions: {
//         bar: {
//           horizontal: false,
//           columnWidth: '55%',
//           endingShape: 'rounded'
//         },
//       },
//       dataLabels: {
//         enabled: false
//       },
//       stroke: {
//         show: true,
//         width: 2,
//         colors: ['transparent']
//       },
//       xaxis: {
//         categories: ['A 49', 'A 45', 'A 37', 'A 32', 'A 55', 'A 04', 'A 40', 'A 65', 'A 12'],
//       },
//       yaxis: {
//         title: {
//           text: ' (quantidade de componentes)'
//         }
//       },
//       fill: {
//         opacity: 1
//       },
//       tooltip: {
//         y: {
//           formatter: function (val: any) {
//             return "" + val + " componentes"
//           }
//         }
//       }
//     },
//   });

//   return (
//     <div>
//       {
//         (typeof window !== 'undefined') &&
//         (
//           <>
//             <div id="chart">
//               <ReactApexChart options={chartData.options} series={chartData.series} type="bar" height={350} />
//             </div>
//             <div id="html-dist"></div>

//           </>
//         )
//       }
//     </div>
//   );
// }
// /* eslint-enable */
// export default PresentsPerArea;
