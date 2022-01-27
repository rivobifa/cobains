import { useEffect, useState } from 'react';

const useWindowDimension = () => {
  const getWindowDimensions = () => {
    const { innerWidth: screenWidth, innerHeight: screenHeight } = window;

    return {
      screenWidth,
      screenHeight,
    };
  };

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions(),
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
};

export default useWindowDimension;
