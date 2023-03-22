import { useState } from 'react';
import { useSelect } from 'downshift';
import cx from 'classnames';
import { NEWS_VIEWS, TNewsView } from '../utils/newsViews';
import { useAppDispatch } from '../Redux/hooks';
import { changeActiveView } from '../Redux/activeViewSlice';

const ChangeView = () => {
  const dispatch = useAppDispatch();

  const [selectedItem, setSelectedItem] = useState<TNewsView>(NEWS_VIEWS[0]);
  const { isOpen, getToggleButtonProps, getMenuProps, highlightedIndex, getItemProps } = useSelect({
    items: NEWS_VIEWS,
    itemToString: (item) => item?.value || '',
    selectedItem,
    onSelectedItemChange: ({ selectedItem: newSelectedItem }) => {
      if (newSelectedItem) {
        setSelectedItem(newSelectedItem);
        dispatch(changeActiveView(newSelectedItem.value));
      }
    },
  });

  return (
    <div>
      <div className='w-28 flex flex-col gap-1 border border-gray-300'>
        <div
          className='p-2 bg-white flex justify-between cursor-pointer'
          {...getToggleButtonProps()}
        >
          <div className='grid grid-cols-2 items-center'>{selectedItem.label}</div>
          <span className='px-2'>{isOpen ? <>&#8593;</> : <>&#8595;</>}</span>
        </div>
      </div>
      <ul
        className={`absolute w-28 bg-white mt-1 shadow-md p-0 border${!isOpen && 'hidden'}`}
        {...getMenuProps()}
      >
        {isOpen &&
          NEWS_VIEWS.map((item, index) => (
            <li
              className={cx(
                highlightedIndex === index && 'bg-blue-200',
                selectedItem === item && 'font-bold',
                'py-2 px-3 shadow-sm flex cursor-pointer'
              )}
              key={`${item.value}${index}`}
              {...getItemProps({ item, index })}
            >
              <div className='grid grid-cols-2 items-center'>{item.label}</div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ChangeView;
