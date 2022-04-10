import { DataResultCalc as form } from '../../data/pages/calc/DataCalcLifeIns';

const TableCommutation = ({ user, pairCommutation, installmentCard }) => {
  return (
    <div className="table-container table-commutation">
      <table>
        <thead>
          <tr>
            {form.commutation.table.header.map((value, i) => {
              return (
                <th key={i}>
                  {value}
                  {i !== 0 && <small className="subscript">x</small>}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>x</td>
            <td>{pairCommutation.x.px}</td>
            <td>{pairCommutation.x.qx}</td>
            <td>{Math.round(pairCommutation.x.lx)}</td>
            <td>{Math.round(pairCommutation.x.dx)}</td>
            <td>{pairCommutation.x.Dx.toFixed(4)}</td>
            <td>{pairCommutation.x.Nx.toFixed(4)}</td>
            <td>{pairCommutation.x.Sx.toFixed(4)}</td>
            <td>{pairCommutation.x.Cx.toFixed(4)}</td>
            <td>{pairCommutation.x.Mx.toFixed(4)}</td>
            <td>{pairCommutation.x.Rx.toFixed(4)}</td>
          </tr>
          <tr>
            <td>x+1</td>
            <td>{pairCommutation.x_1.px}</td>
            <td>{pairCommutation.x_1.qx}</td>
            <td>{Math.round(pairCommutation.x_1.lx)}</td>
            <td>{Math.round(pairCommutation.x_1.dx)}</td>
            <td>{pairCommutation.x_1.Dx.toFixed(4)}</td>
            <td>{pairCommutation.x_1.Nx.toFixed(4)}</td>
            <td>{pairCommutation.x_1.Sx.toFixed(4)}</td>
            <td>{pairCommutation.x_1.Cx.toFixed(4)}</td>
            <td>{pairCommutation.x_1.Mx.toFixed(4)}</td>
            <td>{pairCommutation.x_1.Rx.toFixed(4)}</td>
          </tr>
          {user.period && (
            <tr>
              <td>x+n</td>
              <td>{pairCommutation.x_n.px}</td>
              <td>{pairCommutation.x_n.qx}</td>
              <td>{Math.round(pairCommutation.x_n.lx)}</td>
              <td>{Math.round(pairCommutation.x_n.dx)}</td>
              <td>{pairCommutation.x_n.Dx.toFixed(4)}</td>
              <td>{pairCommutation.x_n.Nx.toFixed(4)}</td>
              <td>{pairCommutation.x_n.Sx.toFixed(4)}</td>
              <td>{pairCommutation.x_n.Cx.toFixed(4)}</td>
              <td>{pairCommutation.x_n.Mx.toFixed(4)}</td>
              <td>{pairCommutation.x_n.Rx.toFixed(4)}</td>
            </tr>
          )}
          {(user.toggleAdv || installmentCard) && (
            <tr>
              <td>x+m</td>
              <td>{pairCommutation.x_m.px}</td>
              <td>{pairCommutation.x_m.qx}</td>
              <td>{Math.round(pairCommutation.x_m.lx)}</td>
              <td>{Math.round(pairCommutation.x_m.dx)}</td>
              <td>{pairCommutation.x_m.Dx.toFixed(4)}</td>
              <td>{pairCommutation.x_m.Nx.toFixed(4)}</td>
              <td>{pairCommutation.x_m.Sx.toFixed(4)}</td>
              <td>{pairCommutation.x_m.Cx.toFixed(4)}</td>
              <td>{pairCommutation.x_m.Mx.toFixed(4)}</td>
              <td>{pairCommutation.x_m.Rx.toFixed(4)}</td>
            </tr>
          )}
          {(user.toggleAdv || installmentCard) &&
            user.installment + user.age + 1 <= 111 && (
              <tr>
                <td>x+m+1</td>
                <td>{pairCommutation.x_m_1.px}</td>
                <td>{pairCommutation.x_m_1.qx}</td>
                <td>{Math.round(pairCommutation.x_m_1.lx)}</td>
                <td>{Math.round(pairCommutation.x_m_1.dx)}</td>
                <td>{pairCommutation.x_m_1.Dx.toFixed(4)}</td>
                <td>{pairCommutation.x_m_1.Nx.toFixed(4)}</td>
                <td>{pairCommutation.x_m_1.Sx.toFixed(4)}</td>
                <td>{pairCommutation.x_m_1.Cx.toFixed(4)}</td>
                <td>{pairCommutation.x_m_1.Mx.toFixed(4)}</td>
                <td>{pairCommutation.x_m_1.Rx.toFixed(4)}</td>
              </tr>
            )}
        </tbody>
      </table>
    </div>
  );
};

export default TableCommutation;
