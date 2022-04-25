import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 50,
    alignItems: 'flex-start',
    justifyContent: 'center',
    height: '100vh',
    marginHorizontal: 20,
  },
  leftContainer: {
    flex: 2,
    flexDirection: 'column',
    marginRight: 20,
  },
  rightContainer: {
    flex: 4,
    flexDirection: 'column',
  },
  headerTitle: {
    fontSize: 30,
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  scrollView: {
    minHeight: 300,
    maxHeight: 600,
    marginTop: 20,
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 1,
    padding: 10,
  },
  tableView: {
    height: 300,
    marginTop: 20,
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 1,
    padding: 20,
  },
  logsItemContainer: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 10,
  },
  tableHeadersContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  tableHeaderTitle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  tableValuesContainer: {
    flex: 1,
    flexDirection: 'row',
  },
});
