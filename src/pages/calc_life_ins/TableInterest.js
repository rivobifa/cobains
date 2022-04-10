import { DataResultCalc as form } from '../../data/pages/calc/DataCalcLifeIns';

const TableInterest = ({ user, interest, discountFactor, forceOfInterest }) => {
  return (
    <div className="table-container table-interest">
      <table>
        <thead>
          <tr>
            {form.interest.table.header.map((value, i) => {
              return <th key={i}>{value}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{form.interest.table.content[0]}</td>
            <td>
              {user.interest
                ? user.interest.toFixed(4) * 100
                : interest.toFixed(4) * 100}
              %
            </td>
          </tr>
          <tr>
            <td>{form.interest.table.content[1]}</td>
            <td>{discountFactor.toFixed(4) * 100}%</td>
          </tr>
          <tr>
            <td>{form.interest.table.content[2]}</td>
            <td>{forceOfInterest.toFixed(4) * 100}%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableInterest;
