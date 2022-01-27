import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { DataEducation } from '../../data/DataEducation';
import { RegularText } from '../../components/body/SectionGenerator';

const HomePage = () => {
  const article = DataEducation.article;

  return (
    <div className='page-container page-education'>
      <section className='section-main'>
        <div className='banner-container'>
          <RegularText data={DataEducation.banner} />
        </div>
      </section>
      <section className='section-second'>
        <div className='content-container'>
          <div className='content-box'>
            <div className='heading'>
              <RegularText data={DataEducation.section} />
            </div>
            <div className='article-container'>
              <ArticleBox
                data={article.wholeLifeIns.content}
                link={article.wholeLifeIns.path}
              />
            </div>
          </div>
        </div>
      </section>
      <div className='white-space' />
    </div>
  );
};

export const ArticleBox = ({ data, link }) => {
  return (
    <Link className='article-box' to={link}>
      <RegularText data={data} />
      <ArticleLink link={link} />
    </Link>
  );
};

export const ArticleLink = ({ link, data }) => {
  const button = DataEducation.button;

  return (
    <div className='article-link'>
      <span className='link'>
        <IconContext.Provider value={{ className: 'icon' }}>
          {button.icon}
        </IconContext.Provider>
        {data || button.text}
      </span>
    </div>
  );
};

export default HomePage;
