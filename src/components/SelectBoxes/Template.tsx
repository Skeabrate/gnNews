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
      <div className='flex h-full min-w-[100px] flex-col justify-center gap-1 border border-gray-400'>
        <div
          className='flex cursor-pointer justify-between bg-white py-1 px-2'
          {...getToggleButtonProps()}
        >
          <div className='flex items-center gap-2'>{selectedItem.label}</div>
          <span className='flex items-center justify-center px-2'>
            {isOpen ? <>&#8593;</> : <>&#8595;</>}
          </span>
        </div>
      </div>
      <ul
        className={`absolute z-10 mt-1 w-28 bg-white p-0 shadow-md border${!isOpen && 'hidden'}`}
        {...getMenuProps()}
      >
        {isOpen &&
          items.map((item, index) => (
            <li
              className={cx(
                highlightedIndex === index && 'bg-blue-200',
                selectedItem === item && 'font-bold',
                'flex cursor-pointer py-2 px-2 shadow-sm'
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
