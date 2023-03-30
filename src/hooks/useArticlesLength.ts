import { useEffect } from 'react';
import { useAppDispatch } from '../redux/hooks';
import { updateArticlesCount } from '../redux/slices/articlesCount';

export const useArticlesLength = (dataLength?: number) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (dataLength >= 0) dispatch(updateArticlesCount(dataLength));
  }, [dataLength, dispatch]);
};
