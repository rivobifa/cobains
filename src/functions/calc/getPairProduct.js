import { DataFormInput as form } from '../../data/DataCalcLifeIns';

const getPairProduct = ({
  pairCommutation,
  interest,
  forceOfInterest,
  user,
}) => {
  // Rename property
  const pureEndowment = form.product.options[1];
  const termLifeInsurance = form.product.options[2];
  const wholeLifeInsurance = form.product.options[3];
  const endowmentInsurance = form.product.options[4];
  const EYD = form.tbp.options[1];
  const MD = form.tbp.options[2];
  const annuityDue = form.annuity.options[1];
  const ordinaryAnnuity = form.annuity.options[2];

  // Set the interest & force of interest
  const i = interest;
  const foi = forceOfInterest;
  // const foi = Math.log(1 + interest); // Force of interest

  // const x = parseInt(pairCommutation.x.x); // uncomment this in need
  // const qx = parseFloat(pairCommutation.x.qx); // uncomment this in need
  // const px = parseFloat(pairCommutation.x.px); // uncomment this in need
  // const lx = parseFloat(pairCommutation.x.lx); // uncomment this in need
  // const dx = parseFloat(pairCommutation.x.dx); // uncomment this in need
  const Dx = parseFloat(pairCommutation.x.Dx); // uncomment this in need
  const Nx = parseFloat(pairCommutation.x.Nx); // uncomment this in need
  // const Sx = parseFloat(pairCommutation.x.Sx); // uncomment this in need
  // const Cx = parseFloat(pairCommutation.x.Cx); // uncomment this in need
  const Mx = parseFloat(pairCommutation.x.Mx); // uncomment this in need
  // const Rx = parseFloat(pairCommutation.x.Rx); // uncomment this in need
  const Nx_1 = parseFloat(pairCommutation.x_1.Nx); // uncomment this in need
  const Dx_n = parseFloat(pairCommutation.x_n.Dx); // uncomment this in need
  const Mx_n = parseFloat(pairCommutation.x_n.Mx); // uncomment this in need
  const Nx_m = parseFloat(pairCommutation.x_m.Nx); // uncomment this in need
  const Nx_m_1 = parseFloat(pairCommutation.x_m_1.Nx); // uncomment this in need

  // LIFE ANNUITY
  const dAnnuity = (Nx - Nx_m) / Dx; // Annuity due
  const oAnnuity = (Nx_1 - Nx_m_1) / Dx; // Ordinary annuity

  // ACTUARIAL PRESENT VALUE
  const apv_PE = Dx_n / Dx; // Pure Endowment
  // At The End of The Year of Death
  const apv_TLI_EYD = (Mx - Mx_n) / Dx; // Term Life Insurance
  const apv_WLI_EYD = Mx / Dx; // Whole Life Insurance
  const apv_EI_EYD = (Mx - Mx_n + Dx_n) / Dx; // Endowment Insurance
  // At The Moment of Death
  const apv_TLI_MD = (i / foi) * apv_TLI_EYD; // Term Life Insurance
  const apv_WLI_MD = (i / foi) * apv_WLI_EYD; // Whole Life Insurance
  const apv_EI_MD = (i / foi) * apv_TLI_EYD + apv_PE; // Endowment Insurance

  // NET ANNUAL PREMIUM && Annuity Due
  const nap_PE_DA = apv_PE / dAnnuity; // Pure Endowment
  // At The End of The Year of Death
  const nap_TLI_EYD_DA = apv_TLI_EYD / dAnnuity; // Term Life Insurance
  const nap_WLI_EYD_DA = apv_WLI_EYD / dAnnuity; // Whole Life Insurance
  const nap_EI_EYD_DA = apv_EI_EYD / dAnnuity; // Endowment Insurance
  // At The Moment of Death
  const nap_TLI_MD_DA = apv_TLI_MD / dAnnuity; // Term Life Insurance
  const nap_WLI_MD_DA = apv_WLI_MD / dAnnuity; // Whole Life Insurance
  const nap_EI_MD_DA = apv_EI_MD / dAnnuity; // Endowment Insurance

  // NET ANNUAL PREMIUM && Ordinary Annuity
  const nap_PE_OA = apv_PE / oAnnuity; // Pure Endowment
  // At The End of The Year of Death
  const nap_TLI_EYD_OA = apv_TLI_EYD / oAnnuity; // Term Life Insurance
  const nap_WLI_EYD_OA = apv_WLI_EYD / oAnnuity; // Whole Life Insurance
  const nap_EI_EYD_OA = apv_EI_EYD / oAnnuity; // Endowment Insurance
  // At The Moment of Death
  const nap_TLI_MD_OA = apv_TLI_MD / oAnnuity; // Term Life Insurance
  const nap_WLI_MD_OA = apv_WLI_MD / oAnnuity; // Whole Life Insurance
  const nap_EI_MD_OA = apv_EI_MD / oAnnuity; // Endowment Insurance

  let product = {};

  if (user.product === pureEndowment) {
    if (!user.annuity || user.annuity === annuityDue) {
      product = {
        apv: apv_PE,
        nap: nap_PE_DA,
      };
    } else if (user.annuity === ordinaryAnnuity) {
      product = {
        apv: apv_PE,
        nap: nap_PE_OA,
      };
    }
  }
  if (user.product === termLifeInsurance) {
    if (user.tbp === EYD) {
      if (!user.annuity || user.annuity === annuityDue) {
        product = {
          apv: apv_TLI_EYD,
          nap: nap_TLI_EYD_DA,
        };
      } else if (user.annuity === ordinaryAnnuity) {
        product = {
          apv: apv_TLI_EYD,
          nap: nap_TLI_EYD_OA,
        };
      }
    } else if (user.tbp === MD) {
      if (!user.annuity || user.annuity === annuityDue) {
        product = {
          apv: apv_TLI_MD,
          nap: nap_TLI_MD_DA,
        };
      } else if (user.annuity === ordinaryAnnuity) {
        product = {
          apv: apv_TLI_MD,
          nap: nap_TLI_MD_OA,
        };
      }
    }
  }
  if (user.product === wholeLifeInsurance) {
    if (!user.tbp) {
      alert('Wah masih ada kolom yang kosong nih, diisi ya!');
      return;
    }
    if (user.tbp === EYD) {
      if (!user.annuity || user.annuity === annuityDue) {
        product = {
          apv: apv_WLI_EYD,
          nap: nap_WLI_EYD_DA,
        };
      } else if (user.annuity === ordinaryAnnuity) {
        product = {
          apv: apv_WLI_EYD,
          nap: nap_WLI_EYD_OA,
        };
      }
    } else if (user.tbp === MD) {
      if (!user.annuity || user.annuity === annuityDue) {
        product = {
          apv: apv_WLI_MD,
          nap: nap_WLI_MD_DA,
        };
      } else if (user.annuity === ordinaryAnnuity) {
        product = {
          apv: apv_WLI_MD,
          nap: nap_WLI_MD_OA,
        };
      }
    }
  }
  if (user.product === endowmentInsurance) {
    if (user.tbp === EYD) {
      if (!user.annuity || user.annuity === annuityDue) {
        product = {
          apv: apv_EI_EYD,
          nap: nap_EI_EYD_DA,
        };
      } else if (user.annuity === ordinaryAnnuity) {
        product = {
          apv: apv_EI_EYD,
          nap: nap_EI_EYD_OA,
        };
      }
    } else if (user.tbp === MD) {
      if (!user.annuity || user.annuity === annuityDue) {
        product = {
          apv: apv_EI_MD,
          nap: nap_EI_MD_DA,
        };
      } else if (user.annuity === ordinaryAnnuity) {
        product = {
          apv: apv_EI_MD,
          nap: nap_EI_MD_OA,
        };
      }
    }
  }

  return product;
};

export default getPairProduct;
