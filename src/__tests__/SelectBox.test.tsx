import { fireEvent, render, screen } from '@testing-library/react';
import SelectBoxTemplate, { TSelectItem } from '../components/SelectBoxes/Template';

const items: TSelectItem[] = [
  {
    id: 'item1',
    label: <>Item 1</>,
  },
  {
    id: 'item2',
    label: <>Item 2</>,
  },
  {
    id: 'item3',
    label: <>Item 3</>,
  },
];

const TestSelectBox = ({
  items,
  initialItem,
}: {
  items: TSelectItem[];
  initialItem?: TSelectItem;
}) => {
  return (
    <SelectBoxTemplate
      items={items}
      initialItem={initialItem}
      onChange={() => null}
    />
  );
};

describe('SelectBox', () => {
  it('Should display first item as a label by default', () => {
    render(<TestSelectBox items={items} />);

    expect(screen.getByTestId(items[0].id));
  });

  it('Should display initial item as label if its passed as props', () => {
    const initialItem = items[1];

    render(
      <TestSelectBox
        items={items}
        initialItem={initialItem}
      />
    );

    expect(screen.getByTestId(initialItem.id));
  });

  it('Should open list dropdown when user clicks on label, after that when user clicks on any item it should be set as a new label and close dropdown.', () => {
    const newItemId = items[2].id;

    render(<TestSelectBox items={items} />);

    fireEvent.click(screen.getByTestId('select-box-toggle'));
    fireEvent.click(screen.getByTestId(`list-item-${newItemId}`));
    expect(screen.queryByTestId(`list-item-${newItemId}`)).toBeNull();
    expect(screen.getByTestId(newItemId));
  });
});
