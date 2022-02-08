import { IconContext } from 'react-icons';
import * as IoIcons from 'react-icons/io';
import {
  DataResultCalc,
  DataAdornment as adornment,
  DataLabel as label,
} from '../../data/DataCalcLifeIns';
import { DataIllustration as illustration } from '../../data/DataAssets';
import { getCommaSeparator } from '../../functions/FormatNumber';

export const ButtonCard = ({ toggleButton }) => {
  const form = DataResultCalc.card;

  return (
    <div className='add-container'>
      <button
        className='button-regular button-complementary'
        onClick={toggleButton}
      >
        <IconContext.Provider value={{ className: 'button-add-icon' }}>
          <IoIcons.IoIosAddCircle />
        </IconContext.Provider>
        {form.buttonCard.add}
      </button>
    </div>
  );
};

export const Card = ({ cost, user, installment, toggleButton }) => {
  const form = DataResultCalc.card;

  return (
    <div
      className={`content-box ${cost.apv && 'result-apv'} ${
        cost.nap && 'result-nap'
      }`}
    >
      <div className='installment'>
        <p>
          <small className='count'>
            {installment || 1}
            {adornment.period}{' '}
          </small>
          <small>{form.installmentText}</small>
        </p>
      </div>
      {!installment
        ? illustration.packageBundle
        : illustration.packageIndividual}
      <div className={`content-text ${user.premium && 'flex-reverse'}`}>
        <div className={`premium ${!user.premium && 'active'}`}>
          <small>{label.premium}</small>
          <p>
            <small>{adornment.currency}</small>{' '}
            <span className='nominal'>
              {user.premium
                ? installment
                  ? user.aPremium === true
                    ? getCommaSeparator(user.premium)
                    : getCommaSeparator(cost.nap)
                  : user.aPremium === true
                  ? getCommaSeparator(cost.apv)
                  : getCommaSeparator(user.premium)
                : installment
                ? getCommaSeparator(cost.nap)
                : getCommaSeparator(cost.apv)}
            </span>
          </p>
        </div>
        <div className={`tsi ${!user.tsi && 'active'}`}>
          <small>{label.tsi}</small>
          <p>
            <small>{adornment.currency}</small>{' '}
            <span className='nominal'>
              {user.tsi
                ? getCommaSeparator(user.tsi)
                : installment
                ? user.aPremium === true
                  ? getCommaSeparator(cost.nap)
                  : getCommaSeparator(cost.apv)
                : user.aPremium === true
                ? getCommaSeparator(cost.nap)
                : getCommaSeparator(cost.apv)}
            </span>
          </p>
        </div>
      </div>
      {/* <div className='content-box-footer'>
        <button className='button-card button-detail'>
          {form.buttonCard.detailButton}
        </button>
        {toggleButton && (
          <button className='button-card button-close' onClick={toggleButton}>
            {form.buttonCard.closeButton}
          </button>
        )}
      </div> */}
    </div>
  );
};
