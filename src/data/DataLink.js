// import * as AiIcons from 'react-icons/ai';
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
  edu_endowmentInsuranceVsWholeLifeInsurance:
    '/edukasi/endowment-insurance-vs-whole-life-insurance',
  edu_endowmentinsuranceVsPureEndowment: '/Edukasi/endowment-vs-pure-endowment',
  edu_netoVsBruto: '/Edukasi/NetoVsBruto',
  edu_createAssumption: '/Edukasi/MembuatAsumsiAkturiaAsuransiJiwa',
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
    // iconClosed: <RiIcons.RiArrowDownSFill />,
    // iconOpened: <RiIcons.RiArrowUpSFill />,
    // subNav: [
    //   {
    //     title: 'Asuransi Jiwa',
    //     path: '/kalkulatorAsuransi-asuransiJiwa',
    //   },
    //   {
    //     title: 'Asuransi Umum',
    //     path: '/kalkulatorAsuransi-asuransiUmum',
    //   },
    // ],
  },
  {
    title: 'Edukasi',
    path: DataLinkPage.edu_home,
    class: 'nav-education',
    icon: <MdIcons.MdOutlineSchool />,
    // iconClosed: <RiIcons.RiArrowDownSFill />,
    // iconOpened: <RiIcons.RiArrowUpSFill />,
    // subNav: [
    //   {
    //     title: 'Asuransi Jiwa',
    //     path: '/edukasiAsuransi-asuransiJiwa',
    //   },
    //   {
    //     title: 'Asuransi Umum',
    //     path: '/edukasiAsuransi-asuransiUmum',
    //   },
    // ],
  },
];
