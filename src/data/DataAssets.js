import React from 'react';
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

export const Wrapper = (data) => {
  return (
    <div className='illustration' title='Powered by getIllustrations'>
      {data}
    </div>
  );
};

export const DataIllustration = {
  research1: Wrapper(<IllustrationResearch1 />),
  research2: Wrapper(<IllustrationResearch2 />),
  pageNotFound: Wrapper(<IllustrationPageNotFound />),
  elderly: Wrapper(<IllustrationElderly />),
  umbrella: Wrapper(<IllustrationUmbrella />),
  sport: Wrapper(<IllustrationSport />),
  success: Wrapper(<IllustrationSuccess />),
  fast: Wrapper(<IllustrationFast />),
  gadget: Wrapper(<IllustrationGadget />),
  packageBundle: Wrapper(<IllustrationPackageBundle />),
  packageIndividual: Wrapper(<IllustrationPackageIndividual />),
};

export const DataIconSocMed = {
  linkedin: (
    <a href='https://www.linkedin.com/in/rivobifa'>
      <IconLinkedin />
    </a>
  ),
  instagram: (
    <a href='https://www.instagram.com/anotherbeef'>
      <IconInstagram />
    </a>
  ),
  twitter: (
    <a href='https://www.twitter.com/rbifa_'>
      <IconTwitter />
    </a>
  ),
};
