import {Action} from 'typesafe-actions';

// eslint-disable-next-line no-shadow
export enum StockActionTypes {
  GET_STOCKS_SUCCESS = '@@stocks/GET_STOCKS_SUCCESS',
}

export interface StockItem {
  code: string;
  price: number;
}

export interface DataItem {
  updatesFor: string;
  isPaused: boolean;
  stocks: StockItem[];
}

export interface StocksInfo {
  starting: number;
  lowest: Array<number>;
  highest: Array<number>;
  current: number;
}

export interface StockState {
  data: DataItem[];
  stocksInfo: {
    [key: string]: StocksInfo;
  };
}

interface GetStocksState
  extends Action<typeof StockActionTypes.GET_STOCKS_SUCCESS> {
  type: typeof StockActionTypes.GET_STOCKS_SUCCESS;
  payload: DataItem;
}

export type StockAction = GetStocksState;
