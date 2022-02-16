import ArticleGenerator from './ArticleGenerator';
import {
  DPA_ApaItuBottomryRespondia,
  DPA_JenisProdukAsuransiJiwa,
  DPA_MengenalLebihDalamWholeLifeInsurance,
} from '../../data/education/DataPreviewArticle';
import DataEduMengenalLebihDalamWholeLifeInsurance, {
  DataPreviewSideContent as DPSC_MengenalLebihDalamWholeLifeInsurance,
} from '../../data/education/DataEduMengenalLebihDalamWholeLifeInsurance';
import DataEduJenisProdukAsuransiJiwa, {
  DataPreviewSideContent as DPSC_JenisProdukAsuransiJiwa,
} from '../../data/education/DataEduJenisProdukAsuransiJiwa';
import DataEduApaItuBottomryRespondia, {
  DataPreviewSideContent as DPSC_ApaItuBottomryRespondia,
} from '../../data/education/DataEduApaItuBottomryRespondia';

export const MengenalLebihDalamWholeLifeInsurance = () => {
  const DataArticle = DataEduMengenalLebihDalamWholeLifeInsurance;
  const DPA = DPA_MengenalLebihDalamWholeLifeInsurance;
  const DPSC = DPSC_MengenalLebihDalamWholeLifeInsurance;

  return (
    <ArticleGenerator
      data={DPA.section[0]}
      dataChild={DataArticle.section.slice(0, 1)}
      dataConclusion={DataArticle.conclusion[0]}
      DataPreviewSideContent={DPSC}
      className='page-mengenalLebihDalamWholeLifeInsurance'
    />
  );
};

export const JenisProdukAsuransiJiwa = () => {
  const DataArticle = DataEduJenisProdukAsuransiJiwa;
  const DPA = DPA_JenisProdukAsuransiJiwa;
  const DPSC = DPSC_JenisProdukAsuransiJiwa;

  return (
    <ArticleGenerator
      data={DPA.section[0]}
      dataChild={DataArticle.section.slice(0, 4)}
      dataConclusion={DataArticle.conclusion[0]}
      DataPreviewSideContent={DPSC}
      className='page-jenisProdukAsuransiJiwa'
    />
  );
};

export const ApaItuBottomryRespondia = () => {
  const DataArticle = DataEduApaItuBottomryRespondia;
  const DPA = DPA_ApaItuBottomryRespondia;
  const DPSC = DPSC_ApaItuBottomryRespondia;

  return (
    <ArticleGenerator
      data={DPA.section[0]}
      dataChild={DataArticle.section.slice(0, 5)}
      dataConclusion={DataArticle.conclusion[0]}
      DataPreviewSideContent={DPSC}
      className='page-apaItuBottomryRespondia'
    />
  );
};
