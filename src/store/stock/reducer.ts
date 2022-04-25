import {Reducer} from 'typesafe-actions';
import {StockAction, StockActionTypes, StockState} from './types';
export const initialState: StockState = {
  data: [],
  stocksInfo: {},
};

const reducer: Reducer<StockState, StockAction> = (
  state = initialState,
  action,
): StockState => {
  switch (action.type) {
    case StockActionTypes.GET_STOCKS_SUCCESS:
      return {
        ...state,
        ...(!action.payload.isPaused && {
          data: [action.payload, ...state.data],
        }),
        stocksInfo: action.payload.stocks.reduce((acc, curValue) => {
          return {
            ...acc,
            [curValue.code]: {
              starting:
                state.stocksInfo[curValue.code]?.starting ?? curValue.price,
              lowest: [
                ...(state.stocksInfo[curValue.code]?.lowest ?? []),
                curValue.price,
              ].sort(),
              highest: [
                ...(state.stocksInfo[curValue.code]?.highest ?? []),
                curValue.price,
              ]
                .sort()
                .reverse(),
              current: curValue.price,
            },
          };
        }, {}),
      };

    default: {
      return state;
    }
  }
};

export {reducer as stockReducer};
