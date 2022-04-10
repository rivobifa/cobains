import ArticleGenerator from './ArticleGenerator';

import DataEduDefinisiManajemenRisiko from '../../data/pages/education/DataEduDefinisiManajemenRisiko';
import DataEduMengenalLebihDalamWholeLifeInsurance from '../../data/pages/education/DataEduMengenalLebihDalamWholeLifeInsurance';
import DataEduJenisProdukAsuransiJiwa from '../../data/pages/education/DataEduJenisProdukAsuransiJiwa';
import DataEduApaItuBottomryRespondia from '../../data/pages/education/DataEduApaItuBottomryRespondia';

export const DefinisiManajemenRisiko = () => {
  const DataArticle = DataEduDefinisiManajemenRisiko;
  const DPSC = [
    {
      path: DataEduMengenalLebihDalamWholeLifeInsurance.path,
      content: DataEduMengenalLebihDalamWholeLifeInsurance.preview,
    },
    {
      path: DataEduApaItuBottomryRespondia.path,
      content: DataEduApaItuBottomryRespondia.preview,
    },
  ];

  return (
    <ArticleGenerator
      data={DataArticle.preview}
      dataChild={DataArticle.section}
      dataConclusion={DataArticle.conclusion}
      DataPreviewSideContent={DPSC}
      className="page-definisiManajemenRisiko"
    />
  );
};

export const MengenalLebihDalamWholeLifeInsurance = () => {
  const DataArticle = DataEduMengenalLebihDalamWholeLifeInsurance;
  const DPSC = [
    {
      path: DataEduApaItuBottomryRespondia.path,
      content: DataEduApaItuBottomryRespondia.preview,
    },
    {
      path: DataEduJenisProdukAsuransiJiwa.path,
      content: DataEduJenisProdukAsuransiJiwa.preview,
    },
  ];

  return (
    <ArticleGenerator
      data={DataArticle.preview}
      dataChild={DataArticle.section}
      dataConclusion={DataArticle.conclusion}
      DataPreviewSideContent={DPSC}
      className="page-mengenalLebihDalamWholeLifeInsurance"
    />
  );
};

export const JenisProdukAsuransiJiwa = () => {
  const DataArticle = DataEduJenisProdukAsuransiJiwa;
  const DPSC = [
    {
      path: DataEduMengenalLebihDalamWholeLifeInsurance.path,
      content: DataEduMengenalLebihDalamWholeLifeInsurance.preview,
    },
    {
      path: DataEduApaItuBottomryRespondia.path,
      content: DataEduApaItuBottomryRespondia.preview,
    },
  ];

  return (
    <ArticleGenerator
      data={DataArticle.preview}
      dataChild={DataArticle.section}
      dataConclusion={DataArticle.conclusion}
      DataPreviewSideContent={DPSC}
      className="page-jenisProdukAsuransiJiwa"
    />
  );
};

export const ApaItuBottomryRespondia = () => {
  const DataArticle = DataEduApaItuBottomryRespondia;
  const DPSC = [
    {
      path: DataEduMengenalLebihDalamWholeLifeInsurance.path,
      content: DataEduMengenalLebihDalamWholeLifeInsurance.preview,
    },
    {
      path: DataEduJenisProdukAsuransiJiwa.path,
      content: DataEduJenisProdukAsuransiJiwa.preview,
    },
  ];

  return (
    <ArticleGenerator
      data={DataArticle.preview}
      dataChild={DataArticle.section}
      dataConclusion={DataArticle.conclusion}
      DataPreviewSideContent={DPSC}
      className="page-apaItuBottomryRespondia"
    />
  );
};
