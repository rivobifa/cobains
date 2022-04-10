import { removeCommaSeparator } from '../FormatNumber';
import { DataFormInput as form } from '../../data/pages/calc/DataCalcLifeIns';

const getDataUser = ({ user }) => {
  // Fix the format number
  user.age = parseInt(user.age);
  if (user.period) {
    user.period = parseInt(user.period);
  }

  if (user.tsi) {
    user.tsi = removeCommaSeparator(user.tsi);
  }

  if (user.premium) {
    user.premium = removeCommaSeparator(user.premium);
  }

  if (user.product === form.product.options[1]) {
    user.tbp = '';
  } else if (user.product === form.product.options[3]) {
    user.period = '';
  }

  if (user.calc === form.calc.options[1]) {
    user.premium = '';
    user.aPremium = false;

    if (!user.toggleAdv) {
      user.installment = user.period || 111 - user.age;
    } else {
      if (user.installment) {
        user.installment = parseInt(user.installment);
      } else {
        user.installment = user.period || 111 - user.age;
      }
    }
  } else {
    user.tsi = '';

    if (user.aPremium === true) {
      if (user.installment) {
        user.installment = parseInt(user.installment);
      } else {
        user.installment = user.period || 111 - user.age;
      }
    } else {
      user.aPremium = false;

      if (!user.toggleAdv) {
        user.installment = user.period || 111 - user.age;
      } else {
        if (user.installment) {
          user.installment = parseInt(user.installment);
        } else {
          user.installment = user.period || 111 - user.age;
        }
      }
    }
  }

  if (!user.toggleAdv) {
    user.interest = '';
    user.tbp = form.tbp.options[2];
    user.mortality = '';
    user.annuity = '';
    user.customMortality = '';
  } else {
    if (user.interest) {
      user.interest = parseFloat(user.interest) / 100;
    }

    if (!user.tbp) {
      user.tbp = form.tbp.options[2];
    }

    if (user.mortality === form.mortality.options[3]) {
      if (!user.customMortality) {
        user.mortality = '';
      }
    }

    if (
      user.annuity === form.annuity.options[2] &&
      user.installment + user.age + 1 > 111
    ) {
      user.installment = user.installment - 1;
    }
  }

  return user;
};

export default getDataUser;
