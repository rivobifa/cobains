import { DataLinkPage } from '../DataLink';
import * as BsIcons from 'react-icons/bs';

export const DataHome = {
  section: [
    {
      title: [
        {
          text: 'Persiapan yang baik adalah ',
        },
        {
          text: 'kunci',
          type: 'bold',
        },
        {
          text: ' dalam berasuransi',
        },
      ],
      content: [
        {
          paragraph: [
            [
              {
                text: 'Gunakan kesempatanmu untuk hidup yang lebih mudah.',
              },
            ],
          ],
        },
      ],
      button: {
        icon: <BsIcons.BsChevronDown />,
      },
    },
    {
      title: [
        {
          text: 'Apa itu asuransi?',
        },
      ],
      content: [
        {
          paragraph: [
            [
              {
                text: 'Pelajari asuransi dari dasarnya dengan bahasa yang ringan dan ',
              },
              {
                text: 'friendly',
                type: 'italic',
              },
              {
                text: ' tentunya.',
              },
            ],
          ],
        },
      ],
      button: {
        regular: 'Pelajari Asuransi',
        pathRegular: DataLinkPage.edu_home,
        complementary: 'Lihat Lainnya',
      },
    },
    {
      title: [
        {
          text: 'Hitung cepat ',
        },
        {
          text: 'premi neto',
          type: 'bold',
        },
        {
          text: ' asuransi',
        },
      ],
      content: [
        {
          paragraph: [
            [
              {
                text: 'Jangan galau, jangan risau. Biar kami yang urus, kamu tinggal pantau.',
              },
            ],
          ],
        },
      ],
      button: {
        regular: 'Lihat Detail',
        pathRegular: DataLinkPage.calc_home,
      },
    },
  ],
};
