import { DataResultCalc as form } from '../../data/DataCalcLifeIns';

const TableBi7drr = ({ iSeries }) => {
  return (
    <div className='table-container table-bi7drr'>
      <table>
        <thead>
          <tr>
            {form.bi7drr.table.header.map((value, i) => {
              return <th key={i}>{value}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {iSeries.map((value, i) => {
            let rate = +parseFloat(value.interest.toFixed(4) * 100).toFixed(4);
            return (
              <tr key={i}>
                <td>{value.date}</td>
                <td>{rate}%</td>
                <td>
                  <a href={value.url}>visit</a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableBi7drr;
