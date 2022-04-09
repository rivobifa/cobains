import { useState } from 'react';
import { IconContext } from 'react-icons';
import * as BiIcons from 'react-icons/bi';
import useScrollBlock from '../functions/useScrollBlock';

export const WrapperImage = ({
  data,
  className,
  title,
  caption,
  captionIllustration,
  source,
  original,
}) => {
  const [blockScroll, allowScroll] = useScrollBlock();
  const [imageOverlay, setImageOverlay] = useState(false);
  const toggleImageOverlay = () => {
    setImageOverlay((show) => !show);
  };

  const illustration = 'Ilustrasi';

  if (imageOverlay) {
    blockScroll();
  } else {
    allowScroll();
  }

  return (
    <div
      title={
        captionIllustration
          ? `${illustration} ${title || caption}`
          : title || caption
      }
      className={`image-wrapper image-mind-map ${className} ${
        imageOverlay ? 'overlay' : ''
      }`}
    >
      <img
        className="image"
        src={data}
        alt={
          captionIllustration
            ? `${illustration} ${title || caption}`
            : title || caption
        }
      />
      <button className="image-button" onClick={toggleImageOverlay}>
        <IconContext.Provider value={{ className: 'icon' }}>
          {imageOverlay ? (
            <BiIcons.BiExitFullscreen />
          ) : (
            <BiIcons.BiFullscreen />
          )}
        </IconContext.Provider>
      </button>
      <div className="image-text">
        <div className="image-ornament"></div>
        <h3 className="image-caption">
          {captionIllustration ? (
            <>
              {illustration} {caption}
            </>
          ) : (
            caption
          )}
        </h3>
        <small className="image-source">
          Sumber: <b>{source || (original && 'cobains.id') || '-'}</b>
        </small>
      </div>
    </div>
  );
};

export const WrapperIllustration = ({ data }) => {
  return (
    <div title="Powered by getIllustrations" className="illustration">
      {data}
    </div>
  );
};

export const WrapperIconSocmed = (data, href) => {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      {data}
    </a>
  );
};
