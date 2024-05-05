import { ApexChart } from "../ApexChart/ApexChart";

export default function ExemploGrafico() {
  const DEFAULT_CHART_HEIGHT = 350
  const chartOptions = {
    chart: {
      type: 'bar',
      height: DEFAULT_CHART_HEIGHT,
      bakground: '#f7f7f7'
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded',
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May'], // Categorias para o eixo X
    },
    yaxis: {
      title: {
        text: 'Total de Avaliações',
      },
    },
  };

  // Dados fictícios para series
  const seriesChatBotEventFeedbackByDateIntervalChart = [100, 120, 90, 150, 110]; // Dados da série
  return (
    <ApexChart
      options={chartOptions}
      series={[{ name: 'teste Analytics', data: seriesChatBotEventFeedbackByDateIntervalChart }]}
      height={DEFAULT_CHART_HEIGHT}
      type={'bar'}
    />
  )
}