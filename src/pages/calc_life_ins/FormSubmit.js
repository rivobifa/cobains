import { DataFormInput } from '../../data/pages/calc/DataCalcLifeIns';

const FormSubmit = ({ dependence }) => {
  return (
    <input
      className="input-submit button-regular"
      type="submit"
      value={!dependence ? DataFormInput.calc.options[1] : dependence}
    />
  );
};

export default FormSubmit;
