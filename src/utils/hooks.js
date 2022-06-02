import { useState, useEffect } from 'react';

const getWindowDimensions = () => ({
  windowWidth: window.innerWidth,
  windowHeight: window.innerHeight,
});

export const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState({});

  useEffect(() => {
    setWindowDimensions(getWindowDimensions());
    const handleResize = () => setWindowDimensions(getWindowDimensions());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}
