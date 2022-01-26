import React from 'react';
import { useDispatch } from 'react-redux';
import { selectedGlobalStats } from '../redux/actions/actions';
import axios from 'axios';

const cryptoApi = async () => {
  const dispatch = useDispatch();
  const response = await axios
    .get('http://localhost:3050/data')
    .catch((err) => {
      console.log('Err: ', err);
    });
  dispatch(selectedGlobalStats(response.data));
  return `{response.data}`;
};

export default cryptoApi;
