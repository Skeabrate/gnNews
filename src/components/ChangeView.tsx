import { useState } from 'react';
import { useSelect } from 'downshift';
import cx from 'classnames';

type TView = {
  value: string;
  label: JSX.Element;
};

const views = [
  {
    value: 'tiles',
    label: (
      <>
        <svg
          shapeRendering='geometricPrecision'
          textRendering='geometricPrecision'
          imageRendering='optimizeQuality'
          fillRule='evenodd'
          clipRule='evenodd'
          viewBox='0 0 512 511.97'
          width={20}
          height={20}
        >
          <path
            fillRule='nonzero'
            d='M23.77 0h185.92c13.09 0 23.77 10.69 23.77 23.77v185.92c0 13.02-10.75 23.77-23.77 23.77H23.77C10.72 233.46 0 222.74 0 209.69V23.77C0 10.65 10.65 0 23.77 0zM302.3 278.5h185.93c13.02 0 23.77 10.75 23.77 23.77V488.2c0 13-10.78 23.77-23.77 23.77H302.3c-6.5 0-12.45-2.69-16.75-6.97-4.33-4.37-7.02-10.31-7.02-16.8V302.27c0-13.12 10.65-23.77 23.77-23.77zm181.91 27.78h-177.9v177.9h177.9v-177.9zM302.3 0h185.93C501.25 0 512 10.75 512 23.77v185.92c0 13.02-10.75 23.77-23.77 23.77H302.3c-13.05 0-23.77-10.72-23.77-23.77V23.77C278.53 10.65 289.18 0 302.3 0zm181.91 27.79h-177.9v177.88h177.9V27.79zM23.77 278.5h185.92c13.09 0 23.77 10.68 23.77 23.77V488.2c0 13.01-10.75 23.77-23.77 23.77H23.77C10.75 511.97 0 501.21 0 488.2V302.27c0-13.12 10.65-23.77 23.77-23.77zm181.9 27.78H27.79v177.9h177.88v-177.9zm0-278.49H27.79v177.88h177.88V27.79z'
          />
        </svg>
        Tiles
      </>
    ),
  },
  {
    value: 'list',
    label: (
      <>
        <svg
          clipRule='evenodd'
          fillRule='evenodd'
          strokeLinejoin='round'
          strokeMiterlimit='2'
          viewBox='0 0 24 24'
          width={20}
          height={20}
          xmlns='http://www.w3.org/2000/svg'
          className='mr-3'
        >
          <path
            d='m3.3 15.4c.717 0 1.3.583 1.3 1.3s-.583 1.3-1.3 1.3-1.3-.583-1.3-1.3.583-1.3 1.3-1.3zm2.7 1.85c0-.414.336-.75.75-.75h14.5c.414 0 .75.336.75.75s-.336.75-.75.75h-14.5c-.414 0-.75-.336-.75-.75zm-2.7-6.55c.717 0 1.3.583 1.3 1.3s-.583 1.3-1.3 1.3-1.3-.583-1.3-1.3.583-1.3 1.3-1.3zm2.7 1.3c0-.414.336-.75.75-.75h14.5c.414 0 .75.336.75.75s-.336.75-.75.75h-14.5c-.414 0-.75-.336-.75-.75zm-2.7-6c.717 0 1.3.583 1.3 1.3s-.583 1.3-1.3 1.3-1.3-.583-1.3-1.3.583-1.3 1.3-1.3zm2.7.75c0-.414.336-.75.75-.75h14.5c.414 0 .75.336.75.75s-.336.75-.75.75h-14.5c-.414 0-.75-.336-.75-.75z'
            fillRule='nonzero'
          />
        </svg>
        List
      </>
    ),
  },
];

const ChangeView = () => {
  function itemToString(item: any) {
    return item ? item.value : '';
  }

  const [selectedItem, setSelectedItem] = useState<TView>(views[0]);
  const { isOpen, getToggleButtonProps, getMenuProps, highlightedIndex, getItemProps } = useSelect({
    items: views,
    itemToString,
    selectedItem,
    onSelectedItemChange: ({ selectedItem: newSelectedItem }) =>
      setSelectedItem(newSelectedItem as TView),
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
          views.map((item, index) => (
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
