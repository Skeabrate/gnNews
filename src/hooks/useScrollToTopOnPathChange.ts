import { useEffect } from 'react';
import { useLocation } from 'react-router';

export const useScrollToTopOnPathChange = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
};
