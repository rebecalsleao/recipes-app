import { screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import renderWithRouterAndRedux from './helpers/renderWithRouterAndRedux';
// import userEvent from '@testing-library/user-event';
// import App from '../App';

describe('Header', () => {
  test('Testa o titulo da pagina em todas as rotas', () => {
    const { history } = renderWithRouterAndRedux();

    const routs = ['/', '/profile', '/meals', '/drinks', '/done-recipes'];
    const titles = ['Login', 'Profile', 'Meals', 'Drinks', 'Done Recipes', 'Favorite Recipes'];

    routs.forEach((rout, index) => {
      act(() => {
        history.push(rout);
      });
      const title = screen.getByTestId('page-title');
      expect(title).toHaveTextContent(titles[index]);
    });
  });
});
