import { useState, useEffect } from 'react';

function getWindowDimensions() {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
}

export default function useWindowDimensions() {
  const [isServer, setIsServer] = useState(typeof window === 'undefined');
  const [windowDimensions, setWindowDimensions] = useState(!isServer ? getWindowDimensions() : { width: 0, height: 0 });

  useEffect(() => {
    setIsServer(typeof window === 'undefined');
    function handleResize() {
      const result = getWindowDimensions();
      if (result.width != 0 && result.height != 0) {
        setWindowDimensions(result);
      }
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}
