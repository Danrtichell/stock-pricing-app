import React from 'react';
import {Button, ScrollView, Text, View} from 'react-native';
import {DataItem} from '../../store/stock';
import {styles} from './styles';

type Props = {
  data: DataItem[];
  isPaused: boolean;
  setIsPaused: (paused: boolean) => void;
};

export function Logs({data, isPaused, setIsPaused}: Props): React.ReactElement {
  const renderItemLog = (item: DataItem): React.ReactElement => {
    return (
      <View style={styles.logsItemContainer} key={item.updatesFor}>
        <Text>Updates for {item.updatesFor}</Text>
        {item.stocks.map((stock) => (
          <Text key={stock.code}>
            {stock.code} : ${stock.price}
          </Text>
        ))}
      </View>
    );
  };

  return (
    <View style={styles.leftContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.headerTitle}>Logs</Text>
        <Button
          title={isPaused ? 'Resume Log' : 'Pause Log'}
          onPress={() => {
            setIsPaused(!isPaused);
          }}
        />
      </View>
      <ScrollView style={styles.scrollView} scrollEnabled>
        {data.map((item) => renderItemLog(item))}
      </ScrollView>
    </View>
  );
}
