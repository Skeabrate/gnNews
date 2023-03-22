import { useState } from 'react';
import { useSelect } from 'downshift';
import cx from 'classnames';
import { NEWS_VIEWS, TNewsView } from '../utils/newsViews';
import { useAppDispatch } from '../Redux/hooks';
import { changeActiveView } from '../Redux/slices/activeViewSlice';

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
      <div className='flex w-28 flex-col gap-1 border border-gray-300'>
        <div
          className='flex cursor-pointer justify-between bg-white p-2'
          {...getToggleButtonProps()}
        >
          <div className='grid grid-cols-2 items-center'>{selectedItem.label}</div>
          <span className='px-2'>{isOpen ? <>&#8593;</> : <>&#8595;</>}</span>
        </div>
      </div>
      <ul
        className={`absolute z-10 mt-1 w-28 bg-white p-0 shadow-md border${!isOpen && 'hidden'}`}
        {...getMenuProps()}
      >
        {isOpen &&
          NEWS_VIEWS.map((item, index) => (
            <li
              className={cx(
                highlightedIndex === index && 'bg-blue-200',
                selectedItem === item && 'font-bold',
                'flex cursor-pointer py-2 px-3 shadow-sm'
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
