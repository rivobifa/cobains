import getInterest from './getInterest';
import getMortality from './getMortality';
import getCommutation from './getCommutation';
import getPairCommutation from './getPairCommutation';
import getPairProduct from './getPairProduct';
import getCost from './getCost';

const getCalcLifeIns = ({ userData }) => {
  const user = userData;
  // Interest (average of 36 months of BI7DRR)
  const { iSeries, interest, discountFactor, forceOfInterest } = getInterest({
    user,
  });

  // Type of Mortality
  const mortality = getMortality({
    user,
  });

  // Full of data of commutation
  const { radix, commutation } = getCommutation({
    discountFactor,
    mortality,
  });

  // Pairing commutation a.k.a equal to user input
  const pairCommutation = getPairCommutation({
    commutation,
    user,
  });

  // Pairing product
  const pairProduct = getPairProduct({
    pairCommutation,
    interest,
    forceOfInterest,
    user,
  });

  const cost = getCost({
    pairProduct,
    user,
  });

  return {
    iSeries,
    interest,
    discountFactor,
    forceOfInterest,
    mortality,
    radix,
    commutation,
    pairCommutation,
    pairProduct,
    cost,
  };
};

export default getCalcLifeIns;
