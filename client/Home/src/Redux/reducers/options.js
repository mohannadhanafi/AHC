import { GET_OPTIONS } from '../actions/types';

const initialState = {
  options: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_OPTIONS:
      return {
        ...state,
        options: payload,
      };
    default:
      return state;
  }
}
