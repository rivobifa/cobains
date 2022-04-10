import { DataFormInput as form } from '../../data/pages/calc/DataCalcLifeIns';

const getCost = ({ pairProduct, user }) => {
  // Set data from server
  const findPremium = form.calc.options[1];
  const findTsi = form.calc.options[2];

  let cost = {};

  if (user.calc === findPremium) {
    cost = {
      apv: user.tsi * pairProduct.apv,
      nap: user.tsi * pairProduct.nap,
    };
  } else if (user.calc === findTsi && user.aPremium === false) {
    cost = {
      apv: user.premium / pairProduct.apv,
      nap: (user.premium / pairProduct.apv) * pairProduct.nap,
    };
  } else if (user.calc === findTsi && user.aPremium === true) {
    cost = {
      apv: (user.premium * pairProduct.apv) / pairProduct.nap,
      nap: user.premium / pairProduct.nap,
    };
  }

  return cost;
};

export default getCost;
