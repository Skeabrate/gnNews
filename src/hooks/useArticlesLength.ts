import { useEffect } from 'react';
import { useAppDispatch } from '../Redux/hooks';
import { updateArticlesCount } from '../Redux/slices/articlesCount';

export const useArticlesLength = (dataLength?: number) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (dataLength) dispatch(updateArticlesCount(dataLength));
  }, [dataLength]);
};
