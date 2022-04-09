import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import DataEdu from '../../data/pages/education/DataEdu';
import {
  RegularText,
  Title,
  SubInfo,
  Content,
} from '../../components/body/SectionGenerator';

const HomePage = () => {
  const article = DataEdu.article;

  return (
    <div className='page-container page-education'>
      <section className='section-main'>
        <div className='banner-container'>
          <RegularText data={DataEdu.banner} />
        </div>
      </section>
      <section className='section-second'>
        <div className='content-container'>
          <div className='content-box'>
            <div className='heading'>
              <RegularText data={DataEdu.section} />
            </div>
            {article.map((val, i) => {
              return (
                <div key={i} className='article-container'>
                  <ArticleBox data={val.content} link={val.path} />
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <div className='white-space top' />
      <div className='white-space bottom' />
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
  const button = DataEdu.button;

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
