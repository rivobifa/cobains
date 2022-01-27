import { DataLinkPage } from './DataLink';
import getDate from '../functions/getDate';

export const DataFooter = [
  [
    {
      text: `${getDate().year} All Rights Reserved`,
    },
  ],
  [
    {
      text: 'A member of  ',
    },
    {
      text: 'BIFA Group',
      type: 'bold',
    },
  ],
  [
    {
      text: 'Tentang Kami',
      type: 'link-page',
      path: DataLinkPage.about,
    },
  ],
];
