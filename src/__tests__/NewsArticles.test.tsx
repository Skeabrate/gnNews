import { renderWithProviders } from '../utils/test-utils';
import { fireEvent, screen } from '@testing-library/react';
import { TArticle } from '../types/article';
import NewsArticles from '../components/NewsArticles';
import ViewSelectBox from '../components/SelectBoxes/ViewSelectBox';

const fakeData: TArticle[] = [
  {
    title: 'Article 1',
    description: 'Description 1',
    publishedAt: '29.03.2023',
    source: {
      url: '...',
      name: 'source 1',
    },
    url: '...',
  },
  {
    title: 'Article 2',
    description: 'Description 2',
    publishedAt: '30.03.2023',
    source: {
      url: '...',
      name: 'source 2',
    },
    url: '...',
  },
];

describe('News Articles', () => {
  it('Check if user can change view from tiles to list using selectbox', () => {
    renderWithProviders(
      <>
        <ViewSelectBox />
        <NewsArticles
          country={'Test Country'}
          articles={fakeData}
          isLoading={false}
          isError={false}
        />
      </>
    );

    expect(screen.getByTestId('tiles-view'));

    fireEvent.click(screen.getByTestId('select-box-toggle'));
    fireEvent.click(screen.getByTestId(`list-item-list`));

    expect(screen.getByTestId('list-view'));
  });
});
