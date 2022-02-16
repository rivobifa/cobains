import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import * as VscIcons from 'react-icons/vsc';
import { DataIconSocMed } from '../../data/DataAssets';
import { FormatText } from '../../functions/FormatText';
import { Content } from '../../components/body/SectionGenerator';

const SideContent = ({
  reverse,
  sideInfoData,
  socmed,
  previewData,
  normalLinkInfo,
}) => {
  return (
    <section className={`side-content ${reverse ? 'reverse' : ''}`}>
      {sideInfoData && (
        <div className='side-content-box side-info-container'>
          <h3 className='side-info-title'>
            {sideInfoData.title.map((text, i) => FormatText({ text, i }))}
          </h3>
          <p className='side-info-text'>
            <span>
              {sideInfoData.content.map((text, i) => FormatText({ text, i }))}
            </span>
          </p>
          {normalLinkInfo ? (
            <a
              className='button-regular'
              href={sideInfoData.button.path}
              target='_blank'
              rel='noreferrer'
            >
              {sideInfoData.button.text}
            </a>
          ) : (
            <Link className='button-regular' to={sideInfoData.button.path}>
              {sideInfoData.button.text}
            </Link>
          )}
        </div>
      )}
      {socmed && (
        <div className='side-content-box socmed-container'>
          <h4 className='socmed-text'>Mari menjalin relasi!</h4>
          <div className='socmed-icon'>
            {Object.keys(DataIconSocMed).map((key) => (
              <div key={key}>{DataIconSocMed[key]}</div>
            ))}
          </div>
        </div>
      )}
      {previewData && (
        <div className='side-content-box preview-container'>
          <h4 className='preview-title'>
            {previewData.title.map((text, i) => FormatText({ text, i }))}
          </h4>
          {previewData.content.map((val, i) => {
            const data = val.content;
            const path = val.path;

            return (
              <div key={i} className='preview-content'>
                <div className='preview-content-box'>
                  <h5 className='preview-content-title'>
                    {data.title.map((text, i) => FormatText({ text, i }))}
                  </h5>
                  <Content
                    data={data.content}
                    className='preview-content-text'
                  />
                </div>
                <Link to={path}>
                  <IconContext.Provider
                    value={{ className: 'preview-content-icon' }}
                  >
                    <VscIcons.VscTriangleRight />
                  </IconContext.Provider>
                  {previewData.button.text}
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default SideContent;
