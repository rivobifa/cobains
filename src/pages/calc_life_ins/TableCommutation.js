import { DataResultCalc as form } from '../../data/DataCalcLifeIns';

const TableCommutation = ({ user, pairCommutation, installmentCard }) => {
  return (
    <table>
      <thead>
        <tr>
          {user.toggleAdv || installmentCard ? (
            user.period ? (
              <>
                {form.commutation.table.header.slice(0, 5).map((value, i) => {
                  return <th key={i}>{value}</th>;
                })}
                {user.installment + user.age + 1 <= 111 &&
                  form.commutation.table.header.slice(5, 6).map((value, i) => {
                    return <th key={i}>{value}</th>;
                  })}
              </>
            ) : (
              <>
                {form.commutation.table.header.slice(0, 3).map((value, i) => {
                  return <th key={i}>{value}</th>;
                })}
                {form.commutation.table.header.slice(4, 5).map((value, i) => {
                  return <th key={i}>{value}</th>;
                })}
                {user.installment + user.age + 1 <= 111 &&
                  form.commutation.table.header.slice(5, 6).map((value, i) => {
                    return <th key={i}>{value}</th>;
                  })}
              </>
            )
          ) : user.period ? (
            form.commutation.table.header.slice(0, 4).map((value, i) => {
              return <th key={i}>{value}</th>;
            })
          ) : (
            form.commutation.table.header.slice(0, 3).map((value, i) => {
              return <th key={i}>{value}</th>;
            })
          )}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            q<small className='subscript'>x</small>
          </td>
          <td>{pairCommutation.x.qx}</td>
          <td>{pairCommutation.x_1.qx}</td>
          {user.period && <td>{pairCommutation.x_n.qx}</td>}
          {(user.toggleAdv || installmentCard) && (
            <>
              <td>{pairCommutation.x_m.qx}</td>
              {user.installment + user.age + 1 <= 111 && (
                <td>{pairCommutation.x_m_1.qx}</td>
              )}
            </>
          )}
        </tr>
        <tr>
          <td>
            p<small className='subscript'>x</small>
          </td>
          <td>{pairCommutation.x.px}</td>
          <td>{pairCommutation.x_1.px}</td>
          {user.period && <td>{pairCommutation.x_n.px}</td>}
          {(user.toggleAdv || installmentCard) && (
            <>
              <td>{pairCommutation.x_m.px}</td>
              {user.installment + user.age + 1 <= 111 && (
                <td>{pairCommutation.x_m_1.px}</td>
              )}
            </>
          )}
        </tr>
        <tr>
          <td>
            l<small className='subscript'>x</small>
          </td>
          <td>{Math.round(pairCommutation.x.lx)}</td>
          <td>{Math.round(pairCommutation.x_1.lx)}</td>
          {user.period && <td>{Math.round(pairCommutation.x_n.lx)}</td>}
          {(user.toggleAdv || installmentCard) && (
            <>
              <td>{Math.round(pairCommutation.x_m.lx)}</td>
              {user.installment + user.age + 1 <= 111 && (
                <td>{Math.round(pairCommutation.x_m_1.lx)}</td>
              )}
            </>
          )}
        </tr>
        <tr>
          <td>
            d<small className='subscript'>x</small>
          </td>
          <td>{Math.round(pairCommutation.x.dx)}</td>
          <td>{Math.round(pairCommutation.x_1.dx)}</td>
          {user.period && <td>{Math.round(pairCommutation.x_n.dx)}</td>}
          {(user.toggleAdv || installmentCard) && (
            <>
              <td>{Math.round(pairCommutation.x_m.dx)}</td>
              {user.installment + user.age + 1 <= 111 && (
                <td>{Math.round(pairCommutation.x_m_1.dx)}</td>
              )}
            </>
          )}
        </tr>
        <tr>
          <td>
            D<small className='subscript'>x</small>
          </td>
          <td>{pairCommutation.x.Dx.toFixed(4)}</td>
          <td>{pairCommutation.x_1.Dx.toFixed(4)}</td>
          {user.period && <td>{pairCommutation.x_n.Dx.toFixed(4)}</td>}
          {(user.toggleAdv || installmentCard) && (
            <>
              <td>{pairCommutation.x_m.Dx.toFixed(4)}</td>
              {user.installment + user.age + 1 <= 111 && (
                <td>{pairCommutation.x_m_1.Dx.toFixed(4)}</td>
              )}
            </>
          )}
        </tr>
        <tr>
          <td>
            N<small className='subscript'>x</small>
          </td>
          <td>{pairCommutation.x.Nx.toFixed(4)}</td>
          <td>{pairCommutation.x_1.Nx.toFixed(4)}</td>
          {user.period && <td>{pairCommutation.x_n.Nx.toFixed(4)}</td>}
          {(user.toggleAdv || installmentCard) && (
            <>
              <td>{pairCommutation.x_m.Nx.toFixed(4)}</td>
              {user.installment + user.age + 1 <= 111 && (
                <td>{pairCommutation.x_m_1.Nx.toFixed(4)}</td>
              )}
            </>
          )}
        </tr>
        <tr>
          <td>
            S<small className='subscript'>x</small>
          </td>
          <td>{pairCommutation.x.Sx.toFixed(4)}</td>
          <td>{pairCommutation.x_1.Sx.toFixed(4)}</td>
          {user.period && <td>{pairCommutation.x_n.Sx.toFixed(4)}</td>}
          {(user.toggleAdv || installmentCard) && (
            <>
              <td>{pairCommutation.x_m.Sx.toFixed(4)}</td>
              {user.installment + user.age + 1 <= 111 && (
                <td>{pairCommutation.x_m_1.Sx.toFixed(4)}</td>
              )}
            </>
          )}
        </tr>
        <tr>
          <td>
            C<small className='subscript'>x</small>
          </td>
          <td>{pairCommutation.x.Cx.toFixed(4)}</td>
          <td>{pairCommutation.x_1.Cx.toFixed(4)}</td>
          {user.period && <td>{pairCommutation.x_n.Cx.toFixed(4)}</td>}
          {(user.toggleAdv || installmentCard) && (
            <>
              <td>{pairCommutation.x_m.Cx.toFixed(4)}</td>
              {user.installment + user.age + 1 <= 111 && (
                <td>{pairCommutation.x_m_1.Cx.toFixed(4)}</td>
              )}
            </>
          )}
        </tr>
        <tr>
          <td>
            M<small className='subscript'>x</small>
          </td>
          <td>{pairCommutation.x.Mx.toFixed(4)}</td>
          <td>{pairCommutation.x_1.Mx.toFixed(4)}</td>
          {user.period && <td>{pairCommutation.x_n.Mx.toFixed(4)}</td>}
          {(user.toggleAdv || installmentCard) && (
            <>
              <td>{pairCommutation.x_m.Mx.toFixed(4)}</td>
              {user.installment + user.age + 1 <= 111 && (
                <td>{pairCommutation.x_m_1.Mx.toFixed(4)}</td>
              )}
            </>
          )}
        </tr>
        <tr>
          <td>
            R<small className='subscript'>x</small>
          </td>
          <td>{pairCommutation.x.Rx.toFixed(4)}</td>
          <td>{pairCommutation.x_1.Rx.toFixed(4)}</td>
          {user.period && <td>{pairCommutation.x_n.Rx.toFixed(4)}</td>}
          {(user.toggleAdv || installmentCard) && (
            <>
              <td>{pairCommutation.x_m.Rx.toFixed(4)}</td>
              {user.installment + user.age + 1 <= 111 && (
                <td>{pairCommutation.x_m_1.Rx.toFixed(4)}</td>
              )}
            </>
          )}
        </tr>
      </tbody>
    </table>
  );
};

export default TableCommutation;
