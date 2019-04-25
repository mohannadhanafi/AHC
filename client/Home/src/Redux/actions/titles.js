/* eslint-disable import/prefer-default-export */
import axios from 'axios';

import { GET_TITLES } from './types';

const getTitles = () => async (dispatch) => {
  axios.get('/api/v2/getTitle').then((result) => {
    const { data } = result;
    dispatch({ type: GET_TITLES, payload: data });
  }).catch((error) => {
    dispatch({ type: GET_TITLES, payload: [] });
  });
};

export default getTitles;
