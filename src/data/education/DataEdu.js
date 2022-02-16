import * as GoIcons from 'react-icons/go';
import {
  DPA_ApaItuBottomryRespondia,
  DPA_JenisProdukAsuransiJiwa,
  DPA_MengenalLebihDalamWholeLifeInsurance,
} from './DataPreviewArticle';

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
      path: DPA_MengenalLebihDalamWholeLifeInsurance.path,
      content: DPA_MengenalLebihDalamWholeLifeInsurance.section[0],
    },
    {
      path: DPA_JenisProdukAsuransiJiwa.path,
      content: DPA_JenisProdukAsuransiJiwa.section[0],
    },
    {
      path: DPA_ApaItuBottomryRespondia.path,
      content: DPA_ApaItuBottomryRespondia.section[0],
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
