import React, { useRef } from 'react';
import { DataIllustration as illustration } from '../../data/DataAssets';
import { DataHomeCalc } from '../../data/DataCalcLifeIns';
import { RegularText } from '../../components/body/SectionGenerator';
import { Button } from '../../components/body/Button';
import { IconContext } from 'react-icons';

const PageCalcHome = () => {
  const sectionSecond = useRef(null);
  const scrollToSectionSecond = () => sectionSecond.current.scrollIntoView();

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
        <Button
          regular={DataHomeCalc.section[0].button.regular}
          pathRegular={DataHomeCalc.section[0].button.pathRegular}
          complementary={DataHomeCalc.section[0].button.complementary}
          refComplementary={scrollToSectionSecond}
        />
      </section>
      <section ref={sectionSecond} className='section-second'>
        <RegularText data={DataHomeCalc.section[1]} />
        <div className='content-container-level'>
          {DataHomeCalc.card.map((val, i) => {
            return (
              <div key={i} className='content-level'>
                {val.map((val, j) => {
                  return (
                    <div key={j} className='content-box'>
                      <div className='content-icon'>
                        <IconContext.Provider value={{ className: 'icon' }}>
                          {val.icon}
                        </IconContext.Provider>
                      </div>
                      <div className='content-item'>
                        <h3 className='box-title'>{val.title}</h3>
                        <p className='box-desc'>
                          <span>{val.desc}</span>
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
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
        {illustration.research}
        <Button
          regular={DataHomeCalc.section[2].button.regular}
          pathRegular={DataHomeCalc.section[2].button.pathRegular}
        />
      </section>
    </div>
  );
};

export default PageCalcHome;
