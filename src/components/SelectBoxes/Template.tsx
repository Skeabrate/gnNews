import React, { useState } from 'react';
import { useSelect } from 'downshift';
import cx from 'classnames';

type TSelectItem = { id: string; label: React.ReactNode | string };

const Template = ({
  items,
  initialItem,
  onChange,
}: {
  items: TSelectItem[];
  initialItem?: TSelectItem;
  onChange: (selectedItem: TSelectItem['id']) => void;
}) => {
  const [selectedItem, setSelectedItem] = useState(initialItem || items[0]);
  const { isOpen, getToggleButtonProps, getMenuProps, highlightedIndex, getItemProps } = useSelect({
    items,
    itemToString: (item) => item.id,
    selectedItem,
    onSelectedItemChange: ({ selectedItem: newSelectedItem }) => {
      if (newSelectedItem) {
        setSelectedItem(newSelectedItem);
        onChange(newSelectedItem.id);
      }
    },
  });

  return (
    <div>
      <div className='relative flex h-12 min-w-[100px] flex-col justify-center gap-1 border border-gray-300'>
        <div
          className='flex cursor-pointer justify-between h-full'
          {...getToggleButtonProps()}
        >
          <div className='flex items-center gap-2 px-2 md:px-3'>{selectedItem.label}</div>
          <span className='flex items-center justify-center px-2'>
            {isOpen ? <>&#8593;</> : <>&#8595;</>}
          </span>
        </div>
      </div>
      <ul
        className={cx(
          'absolute z-10 mt-2 w-32 bg-white dark:bg-zinc-900 p-0 shadow-md border border-gray-300',
          !isOpen && 'hidden'
        )}
        {...getMenuProps()}
      >
        {isOpen &&
          items.map((item, index) => (
            <li
              className={cx(
                highlightedIndex === index && 'bg-blue-200 dark:bg-black',
                selectedItem === item && 'font-bold',
                'flex cursor-pointer h-12 px-2 shadow-sm'
              )}
              key={`${item.id}${index}`}
              {...getItemProps({ item, index })}
            >
              <div className='flex items-center gap-2'>{item.label}</div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Template;
