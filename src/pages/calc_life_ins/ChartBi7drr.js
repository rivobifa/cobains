import Chart from 'react-apexcharts';
import { DataLifeIns } from '../../data/DataLifeIns';

const ChartMortality = () => {
  let yaxis = DataLifeIns.bi7drr.map(({ interest }) => interest);
  let xaxis = DataLifeIns.bi7drr.map(({ date }) => date);

  const options = {
    chart: {
      background: '#ffffff',
      foreColor: '#333',
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 90, 100],
      },
    },
    xaxis: {
      categories: xaxis,
      labels: {
        rotate: 0,
        rotateAlways: false,
        hideOverLappingLabels: true,
        trim: true,
      },
    },
    yaxis: {
      min: 0,
      max: 0.1,
    },
    stroke: {
      curve: 'smooth',
      width: 2,
    },
    colors: ['hsl(266, 45%, 64%)'],
    plotOptions: {
      bar: {
        horizontal: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    title: {
      show: false,
    },
  };

  const series = [
    {
      name: 'BI 7-Day (Reverse) Repo Rate',
      data: yaxis,
    },
  ];

  return (
    <Chart
      options={options}
      series={series}
      type='area'
      height='300'
      width='100%'
    />
  );
};

export default ChartMortality;
