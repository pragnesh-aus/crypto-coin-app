import { makeStyles } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { TrendingCoins } from '../../config/api';
import { CryptoState } from '../../CryptoContext';

const useStyles = makeStyles((theme) => ({
  carousel: {
    height: '50%',
    display: 'flex',
    alignItems: 'center',
  },
}));
const Carousel = () => {
  const [trending, setTrending] = useState([]);
  const classes = useStyles();
  const { currency } = CryptoState();
  const fetchTrendingCoins = async () => {
    // fetch data via api call from api.js file in config folder in app
    const { data } = await axios.get(TrendingCoins(currency));
    // setting the fetched data
    setTrending(data);
  };

  console.log(trending);
  // called function when app load first time
  useEffect(() => {
    fetchTrendingCoins();
  }, [currency]); // pass currency every time when user changed the currency
  return <div className={classes.carousel}>Carousel</div>;
};

export default Carousel;
