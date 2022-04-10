import { DataLifeIns } from '../../data/pages/calc/DataLifeIns';

const getCommutation = ({ mortality, discountFactor }) => {
  const radix = DataLifeIns.radix; // Radix
  const K = radix;
  const v = discountFactor;
  // const v = 1 / (1 + interest); // Discount factor

  let commutation = [];

  for (let i = 0; i < mortality.length; i++) {
    if (i === 0) {
      commutation.push({
        x: mortality[i].x, // age => when age = 0
        qx: mortality[i].qx, // probability of death => when age = 0
        px: 1 - mortality[i].qx, // probability of survival => when age = 0
        lx: K, // survival amount => when age = 0
      });
    } else {
      commutation.push({
        x: mortality[i].x, // age => when age != 0
        qx: mortality[i].qx, // probability of death => when age != 0
        px: 1 - mortality[i].qx, // probability of survival => when age != 0
        lx: commutation[i - 1].lx * (1 - commutation[i - 1].qx), // survival amount => when age != 0
      });
    }
  }

  commutation = commutation.map(({ lx, ...rest }, i, arr) => {
    return {
      ...rest, // x, qx, px
      lx: lx,
      dx: arr[i].lx * arr[i].qx, // death amount
      Dx: Math.pow(v, arr[i].x) * arr[i].lx, // commutation Dx
    };
  });

  commutation = commutation.map(({ ...rest }, i, arr) => {
    return {
      ...rest, // x, qx, px, lx, dx, Dx
      Nx: arr.slice(i, arr.length).reduce((a, b) => a + b.Dx, 0), // commutation Nx
      Cx: Math.pow(v, arr[i].x + 1) * arr[i].dx, // commutation Cx
    };
  });

  commutation = commutation.map(({ ...rest }, i, arr) => {
    return {
      ...rest, // x, qx, px, lx, dx, Dx, Nx, Cx
      Sx: arr.slice(i, arr.length).reduce((a, b) => a + b.Nx, 0), // commutation Sx
      Mx: arr.slice(i, arr.length).reduce((a, b) => a + b.Cx, 0), // commutation Mx
    };
  });

  commutation = commutation.map(({ ...rest }, i, arr) => {
    return {
      ...rest, // x, qx, px, lx, dx, Dx, Nx, Sx, Cx, Mx
      Rx: arr.slice(i, arr.length).reduce((a, b) => a + b.Mx, 0), // commutation Rx
    };
  });

  return { radix, commutation }; // x, qx, px, lx, dx, Dx, Nx, Sx, Cx, Mx, Rx
};

export default getCommutation;
