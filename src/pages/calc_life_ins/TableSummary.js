import {
  DataResultCalc as form,
  DataFormInput as formInput,
  DataAdornment as adornment,
} from '../../data/DataCalcLifeIns';
import { getCommaSeparator } from '../../functions/FormatNumber';

const TableSummary = ({ user }) => {
  return (
    <div className='table-container table-summary'>
      <table>
        <thead>
          <tr>
            {form.summary.table.header.map((value, i) => {
              return <th key={i}>{value}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{form.summary.table.content.gender}</td>
            <td>{user.gender}</td>
          </tr>
          <tr>
            <td>{form.summary.table.content.age}</td>
            <td>
              {user.age} {adornment.year}
            </td>
          </tr>
          <tr>
            <td>{form.summary.table.content.product}</td>
            <td>{user.product}</td>
          </tr>
          {(user.product === formInput.product.options[1] ||
            user.product === formInput.product.options[2] ||
            user.product === formInput.product.options[4]) && (
            <tr>
              <td>{form.summary.table.content.period}</td>
              <td>
                {user.period} {adornment.year}
              </td>
            </tr>
          )}
          {(user.product === formInput.product.options[2] ||
            user.product === formInput.product.options[3] ||
            user.product === formInput.product.options[4]) && (
            <tr>
              <td>{form.summary.table.content.tbp}</td>
              <td>{user.tbp}</td>
            </tr>
          )}
          <tr>
            <td>{form.summary.table.content.calc}</td>
            <td>{user.calc}</td>
          </tr>
          {user.calc === formInput.calc.options[1] && (
            <tr>
              <td>{form.summary.table.content.tsi}</td>
              <td>
                {adornment.currency}
                {getCommaSeparator(user.tsi)}
              </td>
            </tr>
          )}
          {user.calc === formInput.calc.options[2] && (
            <>
              <tr>
                <td>
                  {user.aPremium === true
                    ? formInput.premium.label[1]
                    : formInput.premium.label[0]}
                </td>
                <td>
                  {adornment.currency}
                  {getCommaSeparator(user.premium)}
                  {user.aPremium === true && `/ ${adornment.year}`}
                </td>
              </tr>
              {user.aPremium === true && (
                <tr>
                  <td>{form.summary.table.content.installment}</td>
                  <td>
                    {user.installment} {adornment.year}
                  </td>
                </tr>
              )}
            </>
          )}
          {user.toggleAdv && (
            <>
              {user.interest && (
                <tr>
                  <td>{form.summary.table.content.interest}</td>
                  <td>
                    {user.interest * 100}
                    {adornment.percentage}
                  </td>
                </tr>
              )}
              {(user.calc === formInput.calc.options[1] ||
                (user.calc === formInput.calc.options[2] &&
                  user.aPremium !== true)) && (
                <tr>
                  <td>{form.summary.table.content.installment}</td>
                  <td>
                    {user.installment} {adornment.year}
                  </td>
                </tr>
              )}
              {user.mortality && (
                <tr>
                  <td>{form.summary.table.content.mortality}</td>
                  <td>{user.mortality}</td>
                </tr>
              )}
              {user.annuity && (
                <tr>
                  <td>{form.summary.table.content.annuity}</td>
                  <td>{user.annuity}</td>
                </tr>
              )}
            </>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TableSummary;
