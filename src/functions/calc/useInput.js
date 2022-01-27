import { useNavigate } from 'react-router-dom';
import getDataUser from './getDataUser';
import getCalcLifeIns from './getCalcLifeIns';
import { DataFormInput as form } from '../../data/DataCalcLifeIns';

const useInput = ({ reset, user, setUserData }) => {
  // // Post data to server
  // const addUserData = async (value) => {
  //   const res = await fetch('http://localhost:5000/userData', {
  //     method: 'POST',
  //     headers: { 'Content-type': 'application/json' },
  //     body: JSON.stringify(value),
  //   });

  //   const data = await res.json();
  //   console.log(data);
  //   // setUserData(data);
  // };

  // // Post data to server
  // const addResultCalcLifeIns = async (value) => {
  //   const res = await fetch('http://localhost:5000/resultCalcLifeIns', {
  //     method: 'POST',
  //     headers: { 'Content-type': 'application/json' },
  //     body: JSON.stringify(value),
  //   });

  //   const data = await res.json();
  //   console.log(data);
  //   // setResultCalcLifeIns(data);
  // };

  let navigation = useNavigate();

  const onSubmit = (e) => {
    // e.preventDefault();

    const userData = getDataUser({ user });

    const {
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
    } = getCalcLifeIns({ userData });

    // // Post data to server
    // addUserData(user);
    // addResultCalcLifeIns(result)

    // Save data
    setUserData({
      user,
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
    });

    // Reset input field
    reset();

    // Go to result page
    navigation(form.add.path);
  };

  return { onSubmit };
};

export default useInput;
