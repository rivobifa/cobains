import ArticleGenerator from './ArticleGenerator';

import DataEduJenisProdukAsuransiJiwa, {
  DataPreviewSideContent as DPSC_JenisProdukAsuransiJiwa,
} from '../../data/education/DataEduJenisProdukAsuransiJiwa';

import DataEduMengenalLebihDalamWholeLifeInsurance, {
  DataPreviewSideContent as DPSC_MengenalLebihDalamWholeLifeInsurance,
} from '../../data/education/DataEduMengenalLebihDalamWholeLifeInsurance';

export const JenisProdukAsuransiJiwa = () => {
  const DataArticle = DataEduJenisProdukAsuransiJiwa;
  const DPSC = DPSC_JenisProdukAsuransiJiwa;

  return (
    <ArticleGenerator
      data={DataArticle.section[0]}
      dataChild={DataArticle.section.slice(1, 5)}
      dataConclusion={DataArticle.conclusion[0]}
      DataPreviewSideContent={DPSC}
      className='page-jenisProdukAsuransiJiwa'
    />
  );
};

export const MengenalLebihDalamWholeLifeInsurance = () => {
  const DataArticle = DataEduMengenalLebihDalamWholeLifeInsurance;
  const DPSC = DPSC_MengenalLebihDalamWholeLifeInsurance;

  return (
    <ArticleGenerator
      data={DataArticle.section[0]}
      dataChild={DataArticle.section.slice(1, 2)}
      dataConclusion={DataArticle.conclusion[0]}
      DataPreviewSideContent={DPSC}
      className='page-mengenalLebihDalamWholeLifeInsurance'
    />
  );
};
