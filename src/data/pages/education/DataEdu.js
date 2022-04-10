import * as GoIcons from 'react-icons/go';
import DataEduDefinisiManajemenRisiko from './DataEduDefinisiManajemenRisiko';
import DataEduMengenalLebihDalamWholeLifeInsurance from './DataEduMengenalLebihDalamWholeLifeInsurance';
import DataEduJenisProdukAsuransiJiwa from './DataEduJenisProdukAsuransiJiwa';
import DataEduApaItuBottomryRespondia from './DataEduApaItuBottomryRespondia';

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
    {
      path: DataEduDefinisiManajemenRisiko.path,
      content: DataEduDefinisiManajemenRisiko.preview,
    },
    {
      path: DataEduMengenalLebihDalamWholeLifeInsurance.path,
      content: DataEduMengenalLebihDalamWholeLifeInsurance.preview,
    },
    {
      path: DataEduJenisProdukAsuransiJiwa.path,
      content: DataEduJenisProdukAsuransiJiwa.preview,
    },
    {
      path: DataEduApaItuBottomryRespondia.path,
      content: DataEduApaItuBottomryRespondia.preview,
    },
  ],
  disclaimer: {
    title: 'Catatan',
    content: [
      {
        text: 'Artikel ini dibuat berdasarkan data yang terbatas. Namun, tetap relevan dengan topik yang bersumber baik dari dalam negeri maupun luar negeri.',
      },
    ],
  },
};

export default DataEdu;
