// import * as AiIcons from 'react-icons/ai';
import * as MdIcons from 'react-icons/md';
import * as RiIcons from 'react-icons/ri';

export const DataLinkPage = {
  home: '/',
  calc_home: '/KalkulatorAsuransiJiwa',
  calc_input: '/KalkulatorAsuransiJiwa/Input',
  calc_result: '/KalkulatorAsuransiJiwa/Hasil',
  edu: '/Edukasi',
  edu_PureEndowment: '/Edukasi/PureEndowment',
  edu_WholeLifeIns: '/Edukasi/WholeLifeInsurance',
  edu_TermLifeIns: '/Edukasi/TermLifeInsurance',
  edu_EndowmentIns: '/Edukasi/EndowmentInsurance',
  edu_EndowmentVsPureEndowment: '/Edukasi/EndowmentVsPureEndowment',
  edu_netoVsBruto: '/Edukasi/NetoVsBruto',
  edu_createAssumption: '/Edukasi/MembuatAsumsiAkturiaAsuransiJiwa',
  about: '/TentangKami',
  author_Rivo: '/Author/RivoBifa',
  404: '/PageNotFound',
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
    path: DataLinkPage.edu,
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
