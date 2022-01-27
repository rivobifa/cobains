import {
  DataWholeLifeIns,
  DataPreviewSideContent,
} from '../../data/DataEduWholeLifeIns';
import Disclaimer from '../../components/body/Disclaimer';
import SideContent from '../../components/body/SideContent';
import { RegularText } from '../../components/body/SectionGenerator';

const WholeLifeIns = () => {
  return (
    <div className='body-page'>
      <div className='page-container page-education-item page-wholelifeins'>
        <section className='section-main'>
          <article className='content-container'>
            <RegularText
              data={DataWholeLifeIns.section[0]}
              dataChild={DataWholeLifeIns.section.slice(1, 3)}
            />
            <div className='content-container-conclusion'>
              <RegularText data={DataWholeLifeIns.conclusion[0]} />
            </div>
            <Disclaimer />
          </article>
        </section>
      </div>
      <SideContent socmed reverse previewData={DataPreviewSideContent} />
    </div>
  );
};

export default WholeLifeIns;
