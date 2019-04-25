/* eslint-disable import/prefer-default-export */
import axios from 'axios';

import { GET_OPTIONS } from './types';

const getOptions = () => async (dispatch) => {
  axios('/api/v2/getoptions').then((result) => {
    const { data } = result;
    dispatch({ type: GET_OPTIONS, payload: data });
  }).catch((error) => {
    dispatch({ type: GET_OPTIONS, payload: [] });
  });
};

export default getOptions;
