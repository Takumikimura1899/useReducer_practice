import React, { useReducer } from 'react';

type State = {
  savings: number;
};

type Action =
  | { type: 'DEPOSIT'; payload: number }
  | { type: 'WITHDRAW'; payload: number };

const initialState = {
  savings: 100000,
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const Bank = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <div>Bank</div>;
};
