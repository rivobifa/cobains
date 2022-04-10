import { DataFormInput as form } from '../../data/pages/calc/DataCalcLifeIns';
import { DataLifeIns } from '../../data/pages/calc/DataLifeIns';

const getMortality = ({ user }) => {
  // Set database
  const male = form.gender.options[1];
  const female = form.gender.options[2];
  const imt4 = form.mortality.options[1];
  const imt3 = form.mortality.options[2];
  const custom = form.mortality.options[3];
  const c_imt4 = form.customMortality.template.imt4.id;
  const c_imt3 = form.customMortality.template.imt3.id;
  const c_male = form.customMortality.template.male.id;
  const c_female = form.customMortality.template.female.id;
  const imt4Male = DataLifeIns.imt4.male;
  const imt4Female = DataLifeIns.imt4.female;
  const imt3Male = DataLifeIns.imt3.male;
  const imt3Female = DataLifeIns.imt3.female;

  let mortality = [];
  let customMortality = [];

  const checkCustomMortality = () => {
    for (let i = 0; i <= 111; i++) {
      if (user.customMortality[i]) {
        customMortality.push({
          x: i,
          qx: (user.customMortality[i] = parseFloat(user.customMortality[i])),
        });
      } else {
        if (user.toggleTemplate) {
          if (
            user.toggleTemplate.mortality === c_imt4 &&
            user.toggleTemplate.gender === c_male
          ) {
            customMortality.push({
              x: i,
              qx: (user.customMortality[i] = parseFloat(imt4Male[i].qx)),
            });
          } else if (
            user.toggleTemplate.mortality === c_imt4 &&
            user.toggleTemplate.gender === c_female
          ) {
            customMortality.push({
              x: i,
              qx: (user.customMortality[i] = parseFloat(imt4Female[i].qx)),
            });
          } else if (
            user.toggleTemplate.mortality === c_imt3 &&
            user.toggleTemplate.gender === c_male
          ) {
            customMortality.push({
              x: i,
              qx: (user.customMortality[i] = parseFloat(imt3Male[i].qx)),
            });
          } else if (
            user.toggleTemplate.mortality === c_imt3 &&
            user.toggleTemplate.gender === c_female
          ) {
            customMortality.push({
              x: i,
              qx: (user.customMortality[i] = parseFloat(imt3Female[i].qx)),
            });
          } else {
            customMortality.push({
              x: i,
              qx: (user.customMortality[i] = 0),
            });
          }
        } else {
          customMortality.push({
            x: i,
            qx: (user.customMortality[i] = 0),
          });
        }
      }
    }

    return customMortality;
  };

  if (user.mortality === custom) {
    mortality = checkCustomMortality();
  } else {
    if (user.gender === male) {
      if (!user.mortality || user.mortality === imt4) {
        mortality = imt4Male;
      } else if (user.mortality === imt3) {
        mortality = imt3Male;
      }
    } else if (user.gender === female) {
      if (!user.mortality || user.mortality === imt4) {
        mortality = imt4Female;
      } else if (user.mortality === imt3) {
        mortality = imt3Female;
      }
    }
  }

  return mortality;
};

export default getMortality;
