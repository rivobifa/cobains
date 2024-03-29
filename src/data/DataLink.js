import * as MdIcons from 'react-icons/md';
import * as RiIcons from 'react-icons/ri';

export const DataLinkPage = {
  home: '/',
  about: '/tentang-kami',
  author_rivoBifa: '/author/rivo-bifa',
  404: '/page-not-found',
  calc_home: '/kalkulator-asuransi',
  calc_lifeIns_input: '/kalkulator-asuransi/jiwa/input',
  calc_lifeIns_result: '/kalkulator-asuransi/jiwa/hasil',
  edu_home: '/edukasi',
  edu_apaItuBottomryRespondia: '/edukasi/apa-itu-bottomry-respondia',
  edu_jenisProdukAsuransiJiwa: '/edukasi/jenis-produk-asuransi-jiwa',
  edu_mengenalLebihDalamWholeLifeInsurance:
    '/edukasi/mengenal-lebih-dalam-whole-life-insurance',
  edu_definisiManajemenRisiko: '/edukasi/definisi-manajemen-risiko',
  edu_endowmentInsuranceVsWholeLifeInsurance:
    '/edukasi/endowment-insurance-vs-whole-life-insurance',
  edu_endowmentinsuranceVsPureEndowment: '/Edukasi/endowment-vs-pure-endowment',
  edu_netoVsBruto: '/Edukasi/NetoVsBruto',
  edu_createAssumption: '/Edukasi/MembuatAsumsiAkturiaAsuransiJiwa',
  edu_mengenalLebihDalamSejarahAsuransi:
    '/edukasi/mengenal-lebih-dalam-sejarah-asuransi',
  edu_mengapaHalamanPolisSangatBanyak:
    '/edukasi/mengapa-halaman-polis-sangat-banyak',
};

export const DataNav = [
  {
    title: 'Home',
    path: DataLinkPage.home,
    class: 'nav-home',
    icon: <RiIcons.RiHomeLine />,
  },
  {
    title: 'Kalkulator Asuransi',
    path: DataLinkPage.calc_home,
    class: 'nav-calc',
    icon: <RiIcons.RiCalculatorLine />,
  },
  {
    title: 'Edukasi',
    path: DataLinkPage.edu_home,
    class: 'nav-education',
    icon: <MdIcons.MdOutlineSchool />,
  },
];

export const DataSocmed = {
  cobains: {
    github: 'https://www.github.com/rivobifa/cobains/',
    linkedin: 'https://www.linkedin.com/company/cobains-id/',
  },
  author: {
    rivoBifa: {
      github: 'https://www.github.com/rivobifa/',
      linkedin: 'https://www.linkedin.com/in/rivobifa/',
      medium: 'https://www.medium.com/@rivobifa',
      instagram: 'https://www.instagram.com/anotherbeef/',
      facebook: 'https://www.facebook.com/rivobifa/',
      twitter: 'https://www.twitter.com/rivobifa/',
      youtube: 'https://www.youtube.com/rivobifa/',
    },
  },
};
