import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import thunk from 'redux-thunk';
import rootReducer from '../../redux/reducers';
import App from '../../App';

const renderWithRouterAndRedux = (
  component = <App />,
  {
    initialState = {},
    initialEntries = ['/'],
    store = createStore(rootReducer, initialState, applyMiddleware(thunk)),
    history = createMemoryHistory({ initialEntries }),
  } = {},
) => (
  {
    ...render(
      <Router
        history={ history }
      >
        <Provider
          store={ store }
        >
          {component}
        </Provider>
      </Router>,
    ),
    store,
    history,
  });
export default renderWithRouterAndRedux;
