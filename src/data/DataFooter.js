import { DataLinkPage } from './DataLink';
import getDate from '../functions/getDate';

export const DataFooter = [
  [
    {
      text: 'Tentang Kami',
      type: 'link-page',
      path: DataLinkPage.about,
    },
  ],
  [
    {
      text: <>Copyright &copy; {getDate().year} BIFA Group</>,
    },
  ],
];
