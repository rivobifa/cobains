import { useState } from 'react';
import { IconContext } from 'react-icons';
import * as BiIcons from 'react-icons/bi';

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

import MMBagaimanaKontrakBottomryDijalankan from '../assets/image/mind-map/bagaimana-kontrak-bottomry-dijalankan.png';
import MMPerbandinganBottomryRespondiaDenganAsuransiModern from '../assets/image/mind-map/perbandingan-bottomry-respondia-dengan-asuransi-modern.png';

import MesopotamiaShip from '../assets/image/mesopotamia-ship.png';
import ArabianCaravan from '../assets/image/arabian-caravan.jpg';
import AncientGreekPirates from '../assets/image/acient-greek-pirates.jpg';
import PersonalLiability from '../assets/image/personal-liability.jpg';
import StormAtSea from '../assets/image/storm-at-sea.jpg';
import GoodsRespondia from '../assets/image/goods-respondentia.png';

export const WrapperImage = ({
  data,
  className,
  title,
  caption,
  captionIllustration,
  source,
  original,
}) => {
  const [imageOverlay, setImageOverlay] = useState(false);
  const toggleImageOverlay = () => {
    setImageOverlay((show) => !show);
  };

  return (
    <div
      title={title || caption}
      className={`image-wrapper image-mind-map ${className} ${
        imageOverlay ? 'overlay' : ''
      }`}
    >
      <img className='image' src={data} alt={title || caption} />
      <button className='image-button' onClick={toggleImageOverlay}>
        <IconContext.Provider value={{ className: 'icon' }}>
          {imageOverlay ? (
            <BiIcons.BiExitFullscreen />
          ) : (
            <BiIcons.BiFullscreen />
          )}
        </IconContext.Provider>
      </button>
      <div className='image-text'>
        <div className='image-ornament'></div>
        <h3 className='image-caption'>
          {captionIllustration ? <>Ilustrasi {caption}</> : caption}
        </h3>
        <small className='image-source'>
          Sumber: <b>{source || (original && 'cobains.id') || '-'}</b>
        </small>
      </div>
    </div>
  );
};

export const DataImageMindMap = {
  bagaimanaKontrakBottomryDijalankan: (
    <WrapperImage
      data={MMBagaimanaKontrakBottomryDijalankan}
      className='bagaimana-kontrak-bottomry-dijalankan'
      caption={
        <>
          Bagaimana Kontrak <i>Bottomry</i> Dijalankan
        </>
      }
      title='Bagaimana Kontrak Bottomry Dijalankan'
      original
    />
  ),
  perbandinganBottomryRespondiaDenganAsuransiModern: (
    <WrapperImage
      data={MMPerbandinganBottomryRespondiaDenganAsuransiModern}
      className='perbandingan-bottomry-respondia-dengan-asuransi-modern'
      caption={
        <>
          Perbandingan <i>Bottomry Respondia</i> dengan Asuransi Modern
        </>
      }
      title='Perbandingan Bottomry Respondia dengan Asuransi Modern'
      original
    />
  ),
};

export const DataImage = {
  mesopotamiaShip: (
    <WrapperImage
      data={MesopotamiaShip}
      className='mesopotamia-ship'
      captionIllustration
      caption='Kapal Kuno'
      source='Ekspedisi Tigris - Untuk Membuktikan Kemungkinan Kontak Lintas Samudera Kuno'
    />
  ),
  arabianCaravan: (
    <WrapperImage
      data={ArabianCaravan}
      className='arabian-caravan'
      captionIllustration
      caption='Karavan Arab'
      source='Joseph Austin Banwell - Orientalist Painting'
    />
  ),
  ancientGreekPirates: (
    <WrapperImage
      data={AncientGreekPirates}
      className='acient-greek-pirates'
      captionIllustration
      caption={<i>Perils on The Sea (War)</i>}
      title='Perils on The Sea (War)'
    />
  ),
  personalLiability: (
    <WrapperImage
      data={PersonalLiability}
      className='personal-liability'
      captionIllustration
      caption={<i>Personal Liability</i>}
      title='Personal Liability'
    />
  ),
  stormAtSea: (
    <WrapperImage
      data={StormAtSea}
      className='storm-at-sea'
      captionIllustration
      caption={<i>Perils on The Sea (Sea Storm)</i>}
      title='Perils on The Sea (Sea Storm)'
      source='Miguel Angel Estevez'
    />
  ),
  goodsRespondia: (
    <WrapperImage
      data={GoodsRespondia}
      className='goods-respondentia'
      captionIllustration
      caption='Barang Dagangan Respondia'
    />
  ),
};

export const DataPreviewArticle = {
  apaItuBottomryRespondia: <PAApaItuBottomryRespondia />,
  mengenalLebihDalamWholeLifeInsurance: (
    <PAMengenalLebihDalamWholeLifeInsurance />
  ),
};

export const WrapperIllustration = ({ data }) => {
  return (
    <div title='Powered by getIllustrations' className='illustration'>
      {data}
    </div>
  );
};

export const DataIllustration = {
  sport: <WrapperIllustration data={<IllustrationSport />} />,
  success: <WrapperIllustration data={<IllustrationSuccess />} />,
  fast: <WrapperIllustration data={<IllustrationFast />} />,
  gadget: <WrapperIllustration data={<IllustrationGadget />} />,
  research1: <WrapperIllustration data={<IllustrationResearch1 />} />,
  research2: <WrapperIllustration data={<IllustrationResearch2 />} />,
  pageNotFound: <WrapperIllustration data={<IllustrationPageNotFound />} />,
  elderly: <WrapperIllustration data={<IllustrationElderly />} />,
  umbrella: <WrapperIllustration data={<IllustrationUmbrella />} />,
  packageBundle: <WrapperIllustration data={<IllustrationPackageBundle />} />,
  packageIndividual: (
    <WrapperIllustration data={<IllustrationPackageIndividual />} />
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
