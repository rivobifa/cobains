import * as GoIcons from 'react-icons/go';
// import ApaItuBottomryRespondia from './DataEduApaItuBottomryRespondia';
import JenisProdukAsuransiJiwa from './DataEduJenisProdukAsuransiJiwa';
import MengenalLebihDalamWholeLifeInsurance from './DataEduMengenalLebihDalamWholeLifeInsurance';

const DataEdu = {
  banner: {
    title: [
      {
        text: 'Asuransi tidak se-',
      },
      {
        text: 'membosankan',
        type: 'bold',
      },
      {
        text: ' itu kok!',
      },
    ],
  },
  section: {
    title: [
      {
        text: 'Perluas Wawasan',
      },
    ],
  },
  button: {
    icon: <GoIcons.GoTriangleRight />,
    text: 'Baca Selengkapnya',
  },
  article: [
    // apaItuBottomryRespondia: {
    //   path: ApaItuBottomryRespondia.path,
    //   content: ApaItuBottomryRespondia.section[0],
    // },
    {
      path: JenisProdukAsuransiJiwa.path,
      content: JenisProdukAsuransiJiwa.section[0],
    },
    {
      path: MengenalLebihDalamWholeLifeInsurance.path,
      content: MengenalLebihDalamWholeLifeInsurance.section[0],
    },
  ],
};

export default DataEdu;
