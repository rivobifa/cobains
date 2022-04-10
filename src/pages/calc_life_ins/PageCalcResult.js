import { useState } from 'react';
import { Card, ButtonCard } from './Card';
import TableSummary from './TableSummary';
import TableInterest from './TableInterest';
import TableBi7drr from './TableBi7drr';
import TableCommutation from './TableCommutation';
import ChartBi7drr from './ChartBi7drr';
import ChartMortality from './ChartMortality';
import useWindowDimension from '../../functions/useWindowDimension';
import { DataBreakpoint } from '../../data/DataBreakpoint';
import { DataResultCalc as form } from '../../data/pages/calc/DataCalcLifeIns';
import { Button } from '../../components/body/Button';
import Loader from '../../components/body/Loader';
import SwiperCustom from '../../components/body/SwiperCustom';
import { SwiperSlide } from 'swiper/react';
// import useResultCalcLifeIns from '../../functions/useResultCalcLifeIns';
// import useUserData from '../../functions/useUserData';

const PageCalcResult = ({ userData }) => {
  const { screenWidth } = useWindowDimension();
  const breakpoint = DataBreakpoint;

  const {
    user,
    iSeries,
    interest,
    discountFactor,
    forceOfInterest,
    mortality,
    // radix,
    // commutation,
    pairCommutation,
    // pairProduct,
    cost,
  } = userData;

  const [installmentCard, setInstallmentCard] = useState(false);
  const toggleInstallmentCard = () => {
    setInstallmentCard((show) => !show);
  };

  const [summaryDisplay, setSummaryDisplay] = useState(true);
  const toggleSummaryDisplay = () => {
    setSummaryDisplay((show) => !show);
  };

  const [interestDisplay, setInterestDisplay] = useState(true);
  const toggleInterestDisplay = () => {
    setInterestDisplay((show) => !show);
  };

  const [bi7drrChartDisplay, setBi7drrChartDisplay] = useState(true);
  const toggleBi7drrChartDisplay = () => {
    setBi7drrChartDisplay((show) => !show);
  };

  const [bi7drrTableDisplay, setBi7drrTableDisplay] = useState(false);
  const toggleBi7drrTableDisplay = () => {
    setBi7drrTableDisplay((show) => !show);
  };

  const [mortalityDisplay, setMortalityDisplay] = useState(true);
  const toggleMortalityDisplay = () => {
    setMortalityDisplay((show) => !show);
  };

  const [commutationDisplay, setCommutationDisplay] = useState(true);
  const toggleCommutationDisplay = () => {
    setCommutationDisplay((show) => !show);
  };

  // const { resultCalcLifeIns } = useResultCalcLifeIns();
  // const { userData } = useUserData();

  console.log(userData);

  if (!user) {
    console.log('fetching data...');
    return (
      <div className="page-container page-calc-result fullHeight">
        <Loader path={form.path} />
      </div>
    );
  }

  return (
    <div className="page-container page-calc-result">
      <section className="section-result">
        <div className="title-box">
          <h1 className="result-title title">
            {!user.premium && form.findPremium.title}
            {!user.tsi && form.findTsi.title}
          </h1>
          <small className="result-sub-title sub-title">
            <span>
              {!user.premium && form.findPremium.subTitle}
              {!user.tsi && form.findTsi.subTitle}{' '}
              <span className="dependence product">{user.product}</span>
            </span>
          </small>
        </div>
        <div className="content-container">
          <SwiperCustom
            pagination={screenWidth < breakpoint.medium}
            centeredSlides={screenWidth < breakpoint.medium}
            spaceBetween={screenWidth < breakpoint.medium ? 80 : 0}
            grabCursor={screenWidth < breakpoint.medium}
            className="slider-container"
            // className={`slider-container ${
            //   user.aPremium === true ? 'flex-reverse' : ''
            // }`}
          >
            <SwiperSlide>
              {(user.tsi && <Card cost={cost} user={user} />) ||
                (user.premium && <Card cost={cost} user={user} />)}
            </SwiperSlide>
            <SwiperSlide>
              {user.aPremium === true || user.toggleAdv ? (
                (user.tsi && (
                  <Card
                    cost={cost}
                    user={user}
                    installment={user.installment}
                  />
                )) ||
                (user.premium && (
                  <Card
                    cost={cost}
                    user={user}
                    installment={user.installment}
                  />
                ))
              ) : !installmentCard ? (
                <ButtonCard toggleButton={toggleInstallmentCard} />
              ) : (
                (user.tsi && (
                  <Card
                    toggleButton={toggleInstallmentCard}
                    cost={cost}
                    user={user}
                    installment={user.installment}
                  />
                )) ||
                (user.premium && (
                  <Card
                    toggleButton={toggleInstallmentCard}
                    cost={cost}
                    user={user}
                    installment={user.installment}
                  />
                ))
              )}
            </SwiperSlide>
          </SwiperCustom>
        </div>
      </section>
      <section className="section-summary">
        <div className="title-box">
          <h1 className="result-title title">{form.summary.title}</h1>
          <small className="result-sub-title sub-title">
            <span>{form.summary.subTitle}</span>
          </small>
        </div>
        <div className="button-toggle-container button-commutation-container">
          <div>{form.toggleButton.table}</div>
          <button
            onClick={toggleSummaryDisplay}
            className={`${summaryDisplay && 'show'}`}
          ></button>
        </div>
        {summaryDisplay && <TableSummary user={user} />}
      </section>
      <section className="section-interest">
        <div className="title-box">
          <h1 className="result-title title">{form.interest.title}</h1>
          <small className="result-sub-title sub-title">
            <span>
              {user.interest ? (
                <>
                  {form.interest.subTitle.user[0]}{' '}
                  <span className="dependence interest">
                    {form.interest.subTitle.user[1]}
                  </span>
                </>
              ) : (
                <>
                  {form.interest.subTitle.bi7drr[0]}{' '}
                  <span className="dependence interest">
                    {form.interest.subTitle.bi7drr[1]}
                  </span>
                </>
              )}
            </span>
          </small>
        </div>
        <div className="button-toggle-container button-interest-container">
          <div>{form.toggleButton.table}</div>
          <button
            onClick={toggleInterestDisplay}
            className={`${interestDisplay && 'show'}`}
          ></button>
        </div>
        {interestDisplay && (
          <TableInterest
            user={user}
            iSeries={iSeries}
            interest={interest}
            discountFactor={discountFactor}
            forceOfInterest={forceOfInterest}
          />
        )}
      </section>
      {!user.interest && (
        <section className="section-bi7drr">
          <div className="title-box">
            <h1 className="result-title title">{form.bi7drr.title}</h1>
            <small className="result-sub-title sub-title">
              <span>{form.bi7drr.subTitle}</span>
            </small>
          </div>
          <div className="button-toggle-container button-bi7drr-container">
            <div>{form.toggleButton.chart}</div>
            <button
              onClick={toggleBi7drrChartDisplay}
              className={`${bi7drrChartDisplay && 'show'}`}
            ></button>
          </div>
          <div className="button-toggle-container button-bi7drr-container">
            <div>{form.toggleButton.table}</div>
            <button
              onClick={toggleBi7drrTableDisplay}
              className={`${bi7drrTableDisplay && 'show'}`}
            ></button>
          </div>
          {bi7drrChartDisplay && (
            <div className="chart-container chart-bi7drr">
              <div className="chart-box">
                <ChartBi7drr />
              </div>
            </div>
          )}
          {bi7drrTableDisplay && <TableBi7drr iSeries={iSeries} />}
        </section>
      )}
      <section className="section-chart">
        <div className="title-box">
          <h1 className="result-title title">{form.chart.title}</h1>
          <small className="result-sub-title sub-title">
            <span>
              {form.chart.subTitle}{' '}
              <span className="dependence gender">{user.gender}</span>
            </span>
          </small>
        </div>
        <div className="button-toggle-container button-mortality-container">
          <div>{form.toggleButton.chart}</div>
          <button
            onClick={toggleMortalityDisplay}
            className={`${mortalityDisplay && 'show'}`}
          ></button>
        </div>
        {mortalityDisplay && (
          <div className="chart-container chart-mortality">
            <div className="chart-box">
              <ChartMortality mortality={mortality} user={user} />
            </div>
          </div>
        )}
      </section>
      <section className="section-commutation">
        <div className="title-box">
          <h1 className="result-title title">{form.commutation.title}</h1>
          <small className="result-sub-title sub-title">
            <span>
              {form.commutation.subTitle[0]}{' '}
              <span className="dependence notation">(x={user.age})</span>
              {user.period && (
                <>
                  , {form.commutation.subTitle[1]}{' '}
                  <span className="dependence notation">(n={user.period})</span>
                </>
              )}
              {(user.toggleAdv || installmentCard) && (
                <>
                  , {form.commutation.subTitle[2]}{' '}
                  <span className="dependence notation">
                    (m={user.installment})
                  </span>
                </>
              )}
            </span>
          </small>
        </div>
        <div className="button-toggle-container button-commutation-container">
          <div>{form.toggleButton.table}</div>
          <button
            onClick={toggleCommutationDisplay}
            className={`${commutationDisplay && 'show'}`}
          ></button>
        </div>
        {commutationDisplay && (
          <TableCommutation
            user={user}
            pairCommutation={pairCommutation}
            installmentCard={installmentCard}
          />
        )}
      </section>
      <section className="section-link">
        <div className="title-box">
          <h1 className="result-title title">{form.link.title}</h1>
          <small className="result-sub-title sub-title">
            {user.installment ? (
              <span>{form.link.subTitle.advEnable}</span>
            ) : (
              <span>{form.link.subTitle.advDisable}</span>
            )}
          </small>
        </div>
        <Button
          regular={form.link.goCalc.text}
          pathRegular={form.link.goCalc.path}
          complementary={form.link.goEdu.text}
          pathComplementary={form.link.goEdu.path}
        />
      </section>
    </div>
  );
};

export default PageCalcResult;
