import { useState, useEffect } from 'react';
import { IconContext } from 'react-icons';
import * as AiIcons from 'react-icons/ai';
// import { Link } from 'react-router-dom';
import { DataLoader } from '../../data/DataLoader';

const Loader = ({ path }) => {
  const loader = React.createRef();
  const loaderTitle = React.createRef();
  const failed = React.createRef();

  const [titleText, setTitleText] = useState(DataLoader.title.loader[0]);

  useEffect(() => {
    const changeText1 = setTimeout(
      () => setTitleText(DataLoader.title.loader[1]),
      1500,
    );
    const changeText2 = setTimeout(
      () => setTitleText(DataLoader.title.loader[2]),
      1700,
    );
    const changeText3 = setTimeout(
      () => setTitleText(DataLoader.title.loader[3]),
      2000,
    );
    const changeText4 = setTimeout(
      () => setTitleText(DataLoader.title.loader[4]),
      3000,
    );

    const clear = () => {
      clearTimeout(changeText1);
      clearTimeout(changeText2);
      clearTimeout(changeText3);
      clearTimeout(changeText4);
    };

    return () => clear();
  }, []);

  const init = () =>
    setTimeout(() => {
      if (loader.current && loaderTitle.current && failed.current) {
        failed.current.style.display = 'flex';
        loader.current.style.display = 'none';
        loaderTitle.current.style.display = 'none';
        console.log('failed to display data');
      }
    }, 4000);

  init();

  clearTimeout(init);

  return (
    <div className='loader-overlay'>
      <div className='loader-container'>
        <div ref={loader} className='loader' />
        <p ref={loaderTitle} className='loader-title'>
          {titleText}
        </p>
      </div>
      <div ref={failed} className='loader-container-failed'>
        <p className='loader-title'>
          <IconContext.Provider value={{ className: 'loader-failed-icon' }}>
            <AiIcons.AiFillCloseCircle />
          </IconContext.Provider>
          <small>{DataLoader.title.failed.text}</small>
        </p>
        <a href={path || '/'}>{DataLoader.title.failed.link}</a>
      </div>
    </div>
  );
};

export default Loader;
