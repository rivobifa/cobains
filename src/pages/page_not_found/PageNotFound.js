import { DataIllustration as illustration } from '../../data/DataAssets';
import { DataLinkPage as link } from '../../data/DataLink';
import { DataSection } from '../../data/DataPageNotFound';
import { RegularText } from '../../components/body/SectionGenerator';
import { Button } from '../../components/body/Button';

const PageNotFound = () => {
  return (
    <div className='page-container page-404'>
      <section className='section-content'>
        <div className='content-container'>
          <RegularText data={DataSection[0]} />
          <Button regular='Kembali' pathRegular={link.home} normalLinkRegular />
        </div>
        {illustration.pageNotFound}
        <Button regular='Kembali' pathRegular={link.home} normalLinkRegular />
      </section>
    </div>
  );
};

export default PageNotFound;
