import Chart from 'react-apexcharts';
import { DataLifeIns } from '../../data/DataLifeIns';
import { DataFormInput as form } from '../../data/DataCalcLifeIns';

const ChartMortality = ({ mortality, user }) => {
  const custom = form.mortality.options[3];

  let ageUser = mortality.map(({ x }) => x);
  let rateUser = mortality.map(({ qx }) => qx);

  let rateCompare = [];
  let rateCompareName = '';

  if (user.mortality === custom) {
    if (user.gender === form.gender.options[1]) {
      rateCompare = DataLifeIns.imt4.male.map(({ qx }) => qx);
      rateCompareName = form.mortality.options[1];
    } else if (user.gender === form.gender.options[2]) {
      rateCompare = DataLifeIns.imt4.female.map(({ qx }) => qx);
      rateCompareName = form.mortality.options[1];
    }
  } else {
    if (
      user.gender === form.gender.options[1] &&
      (!user.mortality || user.mortality === form.mortality.options[1])
    ) {
      rateCompare = DataLifeIns.imt3.male.map(({ qx }) => qx);
      rateCompareName = form.mortality.options[2];
    } else if (
      user.gender === form.gender.options[2] &&
      (!user.mortality || user.mortality === form.mortality.options[1])
    ) {
      rateCompare = DataLifeIns.imt3.female.map(({ qx }) => qx);
      rateCompareName = form.mortality.options[2];
    }
    if (
      user.gender === form.gender.options[1] &&
      user.mortality === form.mortality.options[2]
    ) {
      rateCompare = DataLifeIns.imt4.male.map(({ qx }) => qx);
      rateCompareName = form.mortality.options[1];
    } else if (
      user.gender === form.gender.options[2] &&
      user.mortality === form.mortality.options[2]
    ) {
      rateCompare = DataLifeIns.imt4.female.map(({ qx }) => qx);
      rateCompareName = form.mortality.options[1];
    }
  }

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
    xaxis: {
      categories: ageUser,
      labels: {
        rotate: 0,
        rotateAlways: false,
        hideOverLappingLabels: true,
        trim: true,
      },
    },
    yaxis: {
      min: 0,
      max: 1,
    },
    stroke: {
      curve: 'straight',
      width: 2,
      dashArray: [0, 4],
    },
    colors: ['hsl(171, 100%, 38%)', 'hsl(266, 45%, 64%)'],
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
      name: 'User Input Mortality',
      data: rateUser,
    },
    {
      name: rateCompareName,
      data: rateCompare,
    },
  ];

  return (
    <Chart
      options={options}
      series={series}
      type='line'
      height='300'
      width='100%'
    />
  );
};

export default ChartMortality;
