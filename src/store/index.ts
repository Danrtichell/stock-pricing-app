import {combineReducers} from 'redux';
import {stockReducer, StockState} from './stock';

// The top-level state object
export interface ApplicationState {
  stock: StockState;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const createRootReducer = () =>
  combineReducers<ApplicationState>({
    stock: stockReducer,
  });
