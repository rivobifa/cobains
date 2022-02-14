import { ReactComponent as IconLinkedin } from '../assets/icon/linkedin.svg';
import { ReactComponent as IconInstagram } from '../assets/icon/instagram.svg';
import { ReactComponent as IconTwitter } from '../assets/icon/twitter.svg';

import { ReactComponent as IllustrationPageNotFound } from '../assets/illustration/theme-1/exhaustedMan.svg';
import { ReactComponent as IllustrationElderly } from '../assets/illustration/theme-1/elderly.svg';
import { ReactComponent as IllustrationUmbrella } from '../assets/illustration/theme-1/umbrella.svg';
import { ReactComponent as IllustrationSport } from '../assets/illustration/theme-1/tennis.svg';
import { ReactComponent as IllustrationSuccess } from '../assets/illustration/theme-1/success.svg';
import { ReactComponent as IllustrationResearch1 } from '../assets/illustration/theme-1/analytics-1.svg';
import { ReactComponent as IllustrationResearch2 } from '../assets/illustration/theme-1/analytics-2.svg';
import { ReactComponent as IllustrationFast } from '../assets/illustration/theme-1/bicycle.svg';
import { ReactComponent as IllustrationGadget } from '../assets/illustration/theme-1/gadgetMan-2.svg';
import { ReactComponent as IllustrationPackageBundle } from '../assets/illustration/theme-1/analytics-3.svg';
import { ReactComponent as IllustrationPackageIndividual } from '../assets/illustration/theme-1/shoppingWoman.svg';

import { ReactComponent as PAApaItuBottomryRespondia } from '../assets/preview-article/pa_apa-itu-bottomry-respondia.svg';
import { ReactComponent as PAMengenalLebihDalamWholeLifeInsurance } from '../assets/preview-article/pa_mengenal-lebih-dalam-whole-life-insurance.svg';

export const DataPreviewArticle = {
  apaItuBottomryRespondia: (
    <PAApaItuBottomryRespondia />
  ),
  mengenalLebihDalamWholeLifeInsurance: (
    <PAMengenalLebihDalamWholeLifeInsurance />
  ),
};

export const Wrapper = ({ data, illustration, previewArticle }) => {
  return (
    <div
      title={`${illustration && 'Powered by getIllustrations'}`}
      className={`${illustration ? 'illustration' : ''}`}
    >
      {data}
    </div>
  );
};

export const DataIllustration = {
  research1: <Wrapper illustration data={<IllustrationResearch1 />} />,
  research2: <Wrapper illustration data={<IllustrationResearch2 />} />,
  pageNotFound: <Wrapper illustration data={<IllustrationPageNotFound />} />,
  elderly: <Wrapper illustration data={<IllustrationElderly />} />,
  umbrella: <Wrapper illustration data={<IllustrationUmbrella />} />,
  sport: <Wrapper illustration data={<IllustrationSport />} />,
  success: <Wrapper illustration data={<IllustrationSuccess />} />,
  fast: <Wrapper illustration data={<IllustrationFast />} />,
  gadget: <Wrapper illustration data={<IllustrationGadget />} />,
  packageBundle: <Wrapper illustration data={<IllustrationPackageBundle />} />,
  packageIndividual: (
    <Wrapper illustration data={<IllustrationPackageIndividual />} />
  ),
};

export const WrapperIconSocmed = (data, href) => {
  return <a href={href}>{data}</a>;
};

export const DataIconSocMed = {
  linkedin: WrapperIconSocmed(
    <IconLinkedin />,
    'https://www.linkedin.com/in/rivobifa',
  ),
  instagram: WrapperIconSocmed(
    <IconInstagram />,
    'https://www.instagram.com/anotherbeef',
  ),
  twitter: WrapperIconSocmed(<IconTwitter />, 'https://www.twitter.com/rbifa_'),
};
