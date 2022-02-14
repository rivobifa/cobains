import ArticleGenerator from './ArticleGenerator';
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

export const ApaItuBottomryRespondia = () => {
  const DataArticle = DataEduApaItuBottomryRespondia;
  const DPSC = DPSC_ApaItuBottomryRespondia;

  return (
    <ArticleGenerator
      data={DataArticle.section[0]}
      dataChild={DataArticle.section.slice(1, 6)}
      dataConclusion={DataArticle.conclusion[0]}
      DataPreviewSideContent={DPSC}
      className='page-apaItuBottomryRespondia'
    />
  );
};
