import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { DataLinkPage } from '../../data/DataLink';
import Footer from './Footer';
import ScrollToTop from '../../functions/useScrollToTop';

import PageNotFound from '../../pages/page_not_found/PageNotFound';
import PageHome from '../../pages/home/HomePage';

import PageCalcHome from '../../pages/calc_life_ins/PageCalcHome';
import PageCalcInput from '../../pages/calc_life_ins/PageCalcInput';
import PageCalcResult from '../../pages/calc_life_ins/PageCalcResult';

import PageEducation from '../../pages/education/HomePage';
// import PureEndowment from '../../pages/education/PureEndowment';
import WholeLifeIns from '../../pages/education/WholeLifeIns';
// import TermLifeIns from '../../pages/education/TermLifeIns';
// import EndowmentIns from '../../pages/education/EndowmentIns';

const Body = () => {
  const [userData, setUserData] = useState({});

  return (
    <div className='body'>
      <ScrollToTop />
      <Routes>
        <Route path={DataLinkPage.home} exact element={<PageHome />} />
        <Route path={DataLinkPage.calc_home} element={<PageCalcHome />} />
        <Route
          path={DataLinkPage.calc_input}
          element={<PageCalcInput setUserData={setUserData} />}
        />
        <Route
          path={DataLinkPage.calc_result}
          element={<PageCalcResult userData={userData} />}
        />
        <Route path={DataLinkPage.edu} element={<PageEducation />} />
        {/* <Route
          path={DataLinkPage.edu_WholeLifeIns}
          element={<PureEndowment />}
        /> */}
        <Route
          path={DataLinkPage.edu_WholeLifeIns}
          element={<WholeLifeIns />}
        />
        {/* <Route
          path={DataLinkPage.edu_WholeLifeIns}
          element={<TermLifeIns />}
        />
        <Route
          path={DataLinkPage.edu_WholeLifeIns}
          element={<EndowmentIns />}
        /> */}
        <Route path='*' exact element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default Body;
