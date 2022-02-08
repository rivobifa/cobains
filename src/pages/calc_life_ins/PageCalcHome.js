import React, { useRef } from 'react';
import { DataIllustration as illustration } from '../../data/DataAssets';
import { DataHomeCalc } from '../../data/DataCalcLifeIns';
import { RegularText } from '../../components/body/SectionGenerator';
import { Button } from '../../components/body/Button';
import { IconContext } from 'react-icons';
import useWindowDimension from '../../functions/useWindowDimension';
import { DataBreakpoint } from '../../data/DataBreakpoint';
import SwiperCustom from '../../components/body/SwiperCustom';
import { SwiperSlide } from 'swiper/react';

const PageCalcHome = () => {
  const { screenWidth } = useWindowDimension();
  const breakpoint = DataBreakpoint;

  const sectionSecond = useRef(null);
  const scrollToSectionSecond = () => sectionSecond.current.scrollIntoView();

  const cardLevel_1 = DataHomeCalc.card.slice(0, 3);
  const cardLevel_2 = DataHomeCalc.card.slice(3, 5);

  const card = [cardLevel_1, cardLevel_2];

  return (
    <div className='page-container page-calc-home'>
      <section className='section-main'>
        <div className='content-container'>
          <RegularText data={DataHomeCalc.section[0]} />
          <Button
            regular={DataHomeCalc.section[0].button.regular}
            pathRegular={DataHomeCalc.section[0].button.pathRegular}
            complementary={DataHomeCalc.section[0].button.complementary}
            refComplementary={scrollToSectionSecond}
          />
        </div>
        {illustration.gadget}
      </section>
      <section ref={sectionSecond} className='section-second'>
        <RegularText data={DataHomeCalc.section[1]} />
        <div className='content-container-level'>
          {screenWidth < breakpoint.large ? (
            <SwiperCustom
              pagination
              centeredSlides
              grabCursor
              children={DataHomeCalc.card.map((val, i) => {
                return (
                  <SwiperSlide key={i}>
                    <CardBox value={val} />
                  </SwiperSlide>
                );
              })}
            />
          ) : (
            card.map((val, i) => {
              return (
                <div key={i} className='content-level'>
                  {val.map((val, i) => {
                    return <CardBox key={i} value={val} />;
                  })}
                </div>
              );
            })
          )}
        </div>
      </section>
      <section className='section-main section-third'>
        <div className='content-container'>
          <RegularText data={DataHomeCalc.section[2]} />
          <Button
            regular={DataHomeCalc.section[2].button.regular}
            pathRegular={DataHomeCalc.section[2].button.pathRegular}
          />
        </div>
        {illustration.research1}
      </section>
    </div>
  );
};

export default PageCalcHome;

export const CardBox = ({ value }) => {
  return (
    <div className='content-box'>
      <div className='content-icon'>
        <IconContext.Provider value={{ className: 'icon' }}>
          {value.icon}
        </IconContext.Provider>
      </div>
      <div className='content-item'>
        <h3 className='box-title'>{value.title}</h3>
        <p className='box-desc'>
          <span>{value.desc}</span>
        </p>
      </div>
    </div>
  );
};
