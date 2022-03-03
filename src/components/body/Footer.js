import { FormatText } from '../../functions/FormatText';
import { DataFooter } from '../../data/DataFooter';
import { DataLogo, DataIconSocMed } from '../../data/DataAssets';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='footer-text about'>
          <p>
            {DataFooter[0].map((text, i) => (
              <FormatText key={i} text={text} i={i} />
            ))}
          </p>
        </div>
        <div className='footer-socmed'>
          {DataIconSocMed.githubWhite}
          {DataIconSocMed.twitterWhite}
          {DataIconSocMed.linkedinWhite}
        </div>
        <div className='footer-logo'>{DataLogo}</div>
        <div className='footer-text copyright'>
          <p>
            {DataFooter[1].map((text, i) => (
              <FormatText key={i} text={text} i={i} />
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
