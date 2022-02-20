import { useRef } from 'react';
import SideContent from '../../components/body/SideContent';
import { RegularText } from '../../components/body/SectionGenerator';
import DataEdu from '../../data/education/DataEdu';
import { FormatText } from '../../functions/FormatText';

const ArticleGenerator = ({
  data,
  dataChild,
  dataConclusion,
  DataPreviewSideContent,
  className,
  children,
}) => {
  const conclusion = useRef(null);
  const scrollToConclusion = () => conclusion.current.scrollIntoView();

  return (
    <div className='body-page'>
      <div className={`page-container page-education-item ${className}`}>
        <section className='section-main'>
          <article className='content-container'>
            <RegularText
              data={data}
              dataChild={dataChild}
              previewArticle
              scrollToConclusion={scrollToConclusion}
            />
            {dataConclusion && (
              <div ref={conclusion} className='conclusion-container'>
                <RegularText data={dataConclusion} />
              </div>
            )}
            {children}
            <Disclaimer />
          </article>
        </section>
      </div>
      <SideContent
        // socmed
        reverse
        previewData={DataPreviewSideContent}
      />
    </div>
  );
};

export default ArticleGenerator;

export const Disclaimer = ({ data }) => {
  const disclaimer = DataEdu.disclaimer;

  return (
    <div className='disclaimer'>
      <h5 className='disclaimer-title'>
        {data ? data.title : disclaimer.title}
      </h5>
      <p className='disclaimer-content'>
        <small>
          {data
            ? data.content.map((text, i) => FormatText({ text, i }))
            : disclaimer.content.map((text, i) => FormatText({ text, i }))}
        </small>
      </p>
    </div>
  );
};
