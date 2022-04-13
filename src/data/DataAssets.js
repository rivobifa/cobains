import { DataSocmed } from './DataLink';

import {
  WrapperImage,
  WrapperIllustration,
  WrapperIconSocmed,
} from './DataAssetsWrapper';

import { ReactComponent as IconGithubWhite } from '../assets/icon/github-white.svg';
import { ReactComponent as IconLinkedinWhite } from '../assets/icon/linkedin-white.svg';
import { ReactComponent as IconTwitterWhite } from '../assets/icon/twitter-white.svg';

import { ReactComponent as Logo } from '../assets/logo/logo_light.svg';

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

import { ReactComponent as MetaApaItuBottomryRespondia } from '../assets/meta/meta_apa-itu-bottomry-respondia.svg';
import { ReactComponent as MetaMengenalLebihDalamWholeLifeInsurance } from '../assets/meta/meta_mengenal-lebih-dalam-whole-life-insurance.svg';

import MMBagaimanaKontrakBottomryDijalankan from '../assets/image/mind-map/bagaimana-kontrak-bottomry-dijalankan.png';
import MMPerbandinganBottomryRespondiaDenganAsuransiModern from '../assets/image/mind-map/perbandingan-bottomry-respondia-dengan-asuransi-modern.png';

import MesopotamiaShip from '../assets/image/mesopotamia-ship.png';
import ArabianCaravan from '../assets/image/arabian-caravan.jpg';
import AncientGreekPirates from '../assets/image/acient-greek-pirates.jpg';
import PersonalLiability from '../assets/image/personal-liability.jpg';
import StormAtSea from '../assets/image/storm-at-sea.jpg';
import GoodsRespondia from '../assets/image/goods-respondentia.png';
import CodeTabletHammurabi from '../assets/image/law-code-tablet-of-king-hammurabi-from-nippur.jpg';

export const DataImageMindMap = {
  bagaimanaKontrakBottomryDijalankan: (
    <WrapperImage
      data={MMBagaimanaKontrakBottomryDijalankan}
      className="bagaimana-kontrak-bottomry-dijalankan"
      caption={
        <>
          Bagaimana Kontrak <i>Bottomry</i> Dijalankan
        </>
      }
      title="Bagaimana Kontrak Bottomry Dijalankan"
      original
    />
  ),
  perbandinganBottomryRespondiaDenganAsuransiModern: (
    <WrapperImage
      data={MMPerbandinganBottomryRespondiaDenganAsuransiModern}
      className="perbandingan-bottomry-respondia-dengan-asuransi-modern"
      caption={
        <>
          Perbandingan <i>Bottomry Respondia</i> dengan Asuransi Modern
        </>
      }
      title="Perbandingan Bottomry Respondia dengan Asuransi Modern"
      original
    />
  ),
};

export const DataImage = {
  mesopotamiaShip: (
    <WrapperImage
      data={MesopotamiaShip}
      className="mesopotamia-ship"
      captionIllustration
      caption="Kapal Kuno"
      source="Ekspedisi Tigris - Untuk Membuktikan Kemungkinan Kontak Lintas Samudera Kuno"
    />
  ),
  arabianCaravan: (
    <WrapperImage
      data={ArabianCaravan}
      className="arabian-caravan"
      captionIllustration
      caption="Karavan Arab"
      source="Joseph Austin Banwell - Orientalist Painting"
    />
  ),
  ancientGreekPirates: (
    <WrapperImage
      data={AncientGreekPirates}
      className="acient-greek-pirates"
      captionIllustration
      caption={<i>Perils on The Sea (War)</i>}
      title="Perils on The Sea (War)"
    />
  ),
  personalLiability: (
    <WrapperImage
      data={PersonalLiability}
      className="personal-liability"
      captionIllustration
      caption={<i>Personal Liability</i>}
      title="Personal Liability"
    />
  ),
  stormAtSea: (
    <WrapperImage
      data={StormAtSea}
      className="storm-at-sea"
      captionIllustration
      caption={<i>Perils of The Sea (Sea Storm)</i>}
      title="Perils of The Sea (Sea Storm)"
      source="Miguel Angel Estevez"
    />
  ),
  goodsRespondia: (
    <WrapperImage
      data={GoodsRespondia}
      className="goods-respondentia"
      captionIllustration
      caption="Barang Dagangan Respondia"
    />
  ),
  codeTabletHammurabi: (
    <WrapperImage
      data={CodeTabletHammurabi}
      className="code-tablet-hammurabi"
      caption={<i>Law Code Tablet of King Hammurabi from Nippur</i>}
      title="Law Code Tablet of King Hammurabi from Nippur"
      source="Osama Shukir Muhammed Amin (CC BY-NC-SA)"
    />
  ),
};

export const DataPreviewArticleImage = {
  apaItuBottomryRespondia: <MetaApaItuBottomryRespondia />,
  mengenalLebihDalamWholeLifeInsurance: (
    <MetaMengenalLebihDalamWholeLifeInsurance />
  ),
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

export const DataLogo = <Logo />;

export const DataIconSocMed = {
  githubWhite: WrapperIconSocmed(
    <IconGithubWhite />,
    DataSocmed.cobains.github
  ),
  linkedinWhite: WrapperIconSocmed(
    <IconLinkedinWhite />,
    DataSocmed.cobains.linkedin
  ),
  twitterWhite: WrapperIconSocmed(
    <IconTwitterWhite />,
    DataSocmed.author.rivoBifa.twitter
  ),
};
