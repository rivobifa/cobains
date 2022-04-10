import { RegularText } from '../../components/body/SectionGenerator';
import DataAbout from '../../data/pages/DataAbout';

const PageAbout = () => {
  const data = DataAbout.section[0];

  return (
    <div className="body-page">
      <div className="page-container page-about">
        <section className="section-main">
          <div className="content-container">
            <RegularText data={data} />
          </div>
          <div className="circle-container">
            <div className="circle" />
            <div className="circle" />
            <div className="circle" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default PageAbout;
