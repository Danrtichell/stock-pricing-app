import {action, Action} from 'typesafe-actions';
import {DataItem, StockActionTypes} from './types';

export const getStocksSuccess = (payload: DataItem): Action =>
  action(StockActionTypes.GET_STOCKS_SUCCESS, payload);
