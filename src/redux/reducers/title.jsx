import { CHANGE_TITLE } from '../actions';

const initialState = {
  title: 'Login',
};

const title = (state = initialState, { type, payload }) => {
  switch (type) {
  case CHANGE_TITLE:
    return { title: payload };

  default:
    return state;
  }
};

export default title;
