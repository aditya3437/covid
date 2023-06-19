import React, { useState, useEffect } from 'react';
import { NativeSelect ,FormControl } from '@mui/material';

import { fetchData } from '../../api';

import styles from './Countrypicker.module.css';

const Countrypicker = ({ handleCountryChange }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setCountries(await  fetchData ());
    };

    fetchAPI();
  }, []);

  return (
    <FormControl className={styles.formControl}>
   
      <NativeSelect className={styles.form} defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
        <option value="">Covid-19</option>
        <option value="">cases</option>
        <option value="">recovered</option>
        <option value="">deaths</option>
        <option value="">Active cases</option>
        {((fetchData, i) => <option key={i} value={fetchData}>{fetchData}</option>)}
      </NativeSelect>
      
    </FormControl>
  );
};

export default Countrypicker;