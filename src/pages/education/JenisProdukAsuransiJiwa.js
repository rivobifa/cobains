import DataArticle, {
  DataPreviewSideContent,
} from '../../data/education/DataEduJenisProdukAsuransiJiwa';
import Disclaimer from './Disclaimer';
import SideContent from '../../components/body/SideContent';
import { RegularText } from '../../components/body/SectionGenerator';

const Article = () => {
  return (
    <div className='body-page'>
      <div className='page-container page-education-item page-wholelifeins'>
        <section className='section-main'>
          <article className='content-container'>
            <RegularText
              data={DataArticle.section[0]}
              dataChild={DataArticle.section.slice(1, 5)}
            />
            <div className='content-container-conclusion'>
              <RegularText data={DataArticle.conclusion[0]} />
            </div>
            <Disclaimer />
          </article>
        </section>
      </div>
      <SideContent socmed reverse previewData={DataPreviewSideContent} />
    </div>
  );
};

export default Article;
