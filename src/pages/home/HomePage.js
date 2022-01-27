import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { DataIllustration as illustration } from '../../data/DataAssets';
import { DataHome } from '../../data/DataHome';
import { RegularText } from '../../components/body/SectionGenerator';
import { Button } from '../../components/body/Button';

const HomePage = () => {
  const sectionSecond = useRef(null);
  const scrollToSectionSecond = () => sectionSecond.current.scrollIntoView();

  const sectionThird = useRef(null);
  const scrollToSectionThird = () => sectionThird.current.scrollIntoView();

  return (
    <div className='page-container page-home'>
      <section className='section-main'>
        <div className='content-container'>
          <RegularText data={DataHome.section[0]} />
          <Link
            to='#'
            onClick={scrollToSectionSecond}
            className='bullet-button'
          >
            <IconContext.Provider value={{ className: 'icon' }}>
              {DataHome.section[0].button.icon}
            </IconContext.Provider>
          </Link>
        </div>
        {illustration.research2}
      </section>
      <section ref={sectionSecond} className='section-second'>
        <div className='content-container'>
          <RegularText data={DataHome.section[1]} />
          <Button
            regular={DataHome.section[1].button.regular}
            pathRegular={DataHome.section[1].button.pathRegular}
            complementary={DataHome.section[1].button.complementary}
            refComplementary={scrollToSectionThird}
          />
        </div>
      </section>
      <section ref={sectionThird} className='section-main section-third'>
        <div className='content-container'>
          <RegularText data={DataHome.section[2]} />
          <Button
            regular={DataHome.section[2].button.regular}
            pathRegular={DataHome.section[2].button.pathRegular}
          />
        </div>
        {illustration.fast}
      </section>
    </div>
  );
};

export default HomePage;
