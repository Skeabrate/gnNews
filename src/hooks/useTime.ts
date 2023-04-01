import { useEffect, useState } from 'react';

export const useTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const updateDate = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(updateDate);
    };
  }, [currentTime]);

  return { currentTime };
};
