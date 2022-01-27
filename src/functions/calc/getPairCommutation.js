const getPairCommutation = ({ commutation, user }) => {
  // Set the index of commutation using user input of age
  const a = parseInt(user.age);
  const period_n = parseInt(user.period);
  // const installment_m = !user.installment ? 1 : parseInt(user.installment);
  const installment_m = parseInt(user.installment);

  // Set the pair of commutation that equal to user input
  const x = Object.assign({}, ...commutation.slice(a, a + 1));
  const x_1 = Object.assign({}, ...commutation.slice(a + 1, a + 1 + 1));
  const x_n = Object.assign(
    {},
    ...commutation.slice(a + period_n, a + period_n + 1),
  );
  const x_m = Object.assign(
    {},
    ...commutation.slice(a + installment_m, a + installment_m + 1),
  );
  const x_m_1 = Object.assign(
    {},
    ...commutation.slice(a + installment_m + 1, a + installment_m + 1 + 1),
  );

  // Set pair commutation
  const pairCommutation = {
    x,
    x_1,
    x_n,
    x_m,
    x_m_1,
  };

  return pairCommutation;
};

export default getPairCommutation;
