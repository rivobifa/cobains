import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { DataEducation } from '../../data/DataEducation';
import {
  RegularText,
  Title,
  SubInfo,
  Content,
} from '../../components/body/SectionGenerator';

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
    <div className='article-box'>
      <Link to={link} className='link-title'>
        <Title data={data.title} />
      </Link>
      <SubInfo data={data.subInfo} />
      <Link to={link} className='link-content'>
        <Content data={data.content} />
      </Link>
      <ArticleLink link={link} />
    </div>
  );
};

export const ArticleLink = ({ link, data }) => {
  const button = DataEducation.button;

  return (
    <div className='article-link'>
      <Link className='link' to={link}>
        <IconContext.Provider value={{ className: 'icon' }}>
          {button.icon}
        </IconContext.Provider>
        {data || button.text}
      </Link>
    </div>
  );
};

export default HomePage;
