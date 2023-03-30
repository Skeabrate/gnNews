import { useAppDispatch } from '../../redux-tk/hooks';
import { changeActiveView } from '../../redux-tk/slices/activeView';
import { NEWS_VIEWS } from '../../utils/newsViews';
import Template from './Template';

const ViewSelectBox = () => {
  const dispatch = useAppDispatch();

  return (
    <Template
      items={NEWS_VIEWS}
      onChange={(selectedItem) => dispatch(changeActiveView(selectedItem))}
    />
  );
};

export default ViewSelectBox;
