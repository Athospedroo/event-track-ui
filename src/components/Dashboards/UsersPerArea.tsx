// /* eslint-disable */
// "use client";
// import React, { useState } from 'react';
// import ReactApexChart from 'react-apexcharts';

// function UsersPerArea() {
//   const [chartData] = useState({
//     series: [44, 55, 13, 43],
//     options: {
//       chart: {
//         width: 380,
//         type: 'pie' as 'pie', // Definindo o tipo explicitamente como 'pie'
//       },
//       labels: ['Soprano', 'Tenor', 'Contralto', 'Baixo',],
//       dataLabels: {
//         formatter: function (val: any, opts: any) {
//           return val.toFixed(0)
//         },
//       },
//       responsive: [{
//         breakpoint: 480,
//         options: {
//           chart: {
//             width: 200
//           },
//           legend: {
//             position: 'bottom'
//           }
//         }
//       }]
//     },
//   });

//   return (
//     <div>

//       {
//         (typeof window !== 'undefined') &&

//         (<>

//           <div id="chart">
//             <ReactApexChart options={chartData.options} series={chartData.series} type="pie" width={380} />
//           </div>
//           <div id="html-dist"></div>

//         </>)
//       }
//     </div>
//   );
// }
// /* eslint-enable */
// export default UsersPerArea;
