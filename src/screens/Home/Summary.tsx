/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View} from 'react-native';
import {StocksInfo} from '../../store/stock';
import {styles} from './styles';

type Props = {
  stocksInfo: {
    [key: string]: StocksInfo;
  };
};

export function Summary({stocksInfo}: Props): React.ReactElement {
  const renderTableHeader = (): React.ReactElement => {
    const tableHeaders = ['Stock', 'Starting', 'Lowest', 'Highest', 'Current'];
    return (
      <View style={styles.tableHeadersContainer}>
        {tableHeaders.map((item, index) => (
          <View style={{flex: 1}} key={index.toString()}>
            <Text style={styles.tableHeaderTitle}>{item}</Text>
          </View>
        ))}
      </View>
    );
  };

  const renderItemValue = (value: string | number): React.ReactElement => {
    return (
      <View style={{flex: 1}}>
        <Text style={{fontSize: 12}}>{value}</Text>
      </View>
    );
  };

  const renderTableValues = (stocks: {
    [key: string]: StocksInfo;
  }): React.ReactElement => {
    return (
      <>
        {Object.entries(stocks).map(([key, value]) => {
          const {starting, lowest, highest, current} = value as StocksInfo;
          return (
            <View style={styles.tableValuesContainer} key={key}>
              {renderItemValue(key)}
              {renderItemValue(starting)}
              {renderItemValue(lowest[0])}
              {renderItemValue(highest[0])}
              {renderItemValue(current)}
            </View>
          );
        })}
      </>
    );
  };

  return (
    <View style={styles.rightContainer}>
      <Text style={styles.headerTitle}>Summary</Text>
      <View style={styles.tableView}>
        <View style={{flexDirection: 'column'}}>
          {renderTableHeader()}
          {stocksInfo && renderTableValues(stocksInfo)}
        </View>
      </View>
    </View>
  );
}
