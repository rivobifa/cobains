import { DataLifeIns } from '../../data/DataLifeIns';

const getInterest = ({ user }) => {
  // Set database
  const bi7drr = DataLifeIns.bi7drr;

  // Set the time series of average
  const iSeries = bi7drr.slice(0, 36);

  let interest = [];

  // Set the interest
  if (!user.interest) {
    // Calculate the average 36 months for assumption
    interest =
      iSeries.reduce((sum, curr) => sum + curr.interest, 0) / iSeries.length;
  } else {
    interest = user.interest;
  }

  const discountFactor = 1 / (1 + interest); // Discount factor
  const forceOfInterest = Math.log(1 + interest); // Force of interest

  return { iSeries, interest, discountFactor, forceOfInterest };
};

export default getInterest;
