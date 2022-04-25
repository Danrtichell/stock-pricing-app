import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {ApplicationState} from '../../store';
import {getStocksSuccess} from '../../store/stock';
import {Logs} from './Logs';
import {styles} from './styles.web';
import {Summary} from './Summary';

export function Home(): React.ReactElement {
  const [isPaused, setIsPaused] = useState(false);
  const {data, stocksInfo} = useSelector(
    (state: ApplicationState) => state.stock,
  );
  const dispatch = useDispatch();

  const getStocks = async () => {
    try {
      let response = await fetch('https://join.reckon.com/stock-pricing');
      response = await response.json();

      dispatch(
        getStocksSuccess({
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          stocks: response as any,
          updatesFor: getCurrentTimestamp(),
          isPaused,
        }),
      );
    } catch (error) {
      console.log('error', error);
    }
  };

  const getCurrentTimestamp = () => {
    const d = new Date();
    const date = d.toISOString().split('T')[0];
    const time = d.toTimeString().split(' ')[0];
    return `${date} ${time}`;
  };

  useEffect(() => {
    const interval = setInterval(getStocks, 2000);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Logs isPaused={isPaused} setIsPaused={setIsPaused} data={data} />
      <Summary stocksInfo={stocksInfo} />
    </SafeAreaView>
  );
}
