import { FormatText } from '../../functions/FormatText';
import { DataFooter } from '../../data/DataFooter';
import Logo from '../Logo';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='footer-box'>
          <Logo />
          <span className='footer-text'>
            {DataFooter[0].map((text, i) => FormatText({ text, i }))}
          </span>
        </div>
        <div className='footer-box'>
          {DataFooter.slice(1, 3).map((val, i) => (
            <span key={i} className='footer-text'>
              {val.map((text, i) => FormatText({ text, i }))}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
