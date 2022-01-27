import { DataWholeLifeIns } from './DataEduWholeLifeIns';
import * as GoIcons from 'react-icons/go';

export const DataEducation = {
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
  article: {
    wholeLifeIns: {
      path: DataWholeLifeIns.path,
      content: DataWholeLifeIns.section[0],
    },
  },
};
