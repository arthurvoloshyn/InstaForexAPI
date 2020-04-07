import { CHANGE_SCREEN } from "../types";

export const MainReducer = (state, action) => {
  switch (action.type) {
    case CHANGE_SCREEN: {
      return {
        ...state,
        quoteId: action.payload.symbol,
        quoteData: action.payload,
        header: action.payload.symbol === null ?
          'Insta Forex Quotes'
          : action.payload.symbol,
      }
    }

    default:
      return state;
  }
};