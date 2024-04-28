import { useEffect, useState } from "react"
import dynamic from 'next/dynamic'

interface ApexChartProps {
  options: any,
  series: any[],
  height: number | string
  type: string
}

function ApexChart(props: ApexChartProps) {
  const [Chart, setChart] = useState<any>(null)

  useEffect(() => {
    createComponent()  
  }, [])
  
  async function createComponent() {
    const Chart = dynamic(() => import('react-apexcharts'))
    setChart(Chart)
  }

  return (
    <>
      {Chart && props.options && props.series &&
        <Chart
          options={props.options}
          series={props.series}
          height={props.height}
          type={props.type}
        ></Chart>
      }
      </>
  )
}

export {
  ApexChart
}