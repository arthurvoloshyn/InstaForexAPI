import React, { useReducer } from 'react';
import { CHANGE_SCREEN } from '../types';
import { MainContext } from "./MainContext";
import { MainReducer } from "./MainReducer";

const MainState = ({children}) => {
  const initialSate = {
    quoteId: null,
    header: 'Insta Forex Quotes',
    quoteData: {},

  };
  const [state, dispatch] = useReducer(MainReducer, initialSate);

  const changeScreen = quote => dispatch({type: CHANGE_SCREEN, payload: quote});

  return (
    <MainContext.Provider
      value={{
        changeScreen,
        quoteId: state.quoteId,
        quoteData: state.quoteData,
        header: state.header,
      }}
    >
      {children}
    </MainContext.Provider>
  )
};

export default MainState;