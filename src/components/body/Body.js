import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { DataLinkPage } from '../../data/DataLink';
import Footer from './Footer';
import ScrollToTop from '../../functions/useScrollToTop';

import PageNotFound from '../../pages/page_not_found/PageNotFound';
import PageAbout from '../../pages/about/PageAbout';
import PageHome from '../../pages/home/PageHome';

import PageCalcHome from '../../pages/calc_life_ins/PageCalcHome';
import PageCalcInput from '../../pages/calc_life_ins/PageCalcInput';
import PageCalcResult from '../../pages/calc_life_ins/PageCalcResult';

import PageEducation from '../../pages/education/PageEduHome';
import {
  MengenalLebihDalamWholeLifeInsurance,
  JenisProdukAsuransiJiwa,
  ApaItuBottomryRespondia,
} from '../../pages/education/ArticlePage';

const Body = () => {
  const [userData, setUserData] = useState({});

  return (
    <div className='body'>
      <ScrollToTop />
      <Routes>
        <Route path='*' exact element={<PageNotFound />} />
        <Route path={DataLinkPage.about} exact element={<PageAbout />} />
        <Route path={DataLinkPage.home} exact element={<PageHome />} />
        <Route path={DataLinkPage.calc_home} element={<PageCalcHome />} />
        <Route
          path={DataLinkPage.calc_lifeIns_input}
          element={<PageCalcInput setUserData={setUserData} />}
        />
        <Route
          path={DataLinkPage.calc_lifeIns_result}
          element={<PageCalcResult userData={userData} />}
        />
        <Route path={DataLinkPage.edu_home} element={<PageEducation />} />
        <Route
          path={DataLinkPage.edu_mengenalLebihDalamWholeLifeInsurance}
          element={<MengenalLebihDalamWholeLifeInsurance />}
        />
        <Route
          path={DataLinkPage.edu_jenisProdukAsuransiJiwa}
          element={<JenisProdukAsuransiJiwa />}
        />
        <Route
          path={DataLinkPage.edu_apaItuBottomryRespondia}
          element={<ApaItuBottomryRespondia />}
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default Body;
