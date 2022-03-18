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
    case 'DEPOSIT':
      return { ...state, savings: state.savings + action.payload };
    case 'WITHDRAW':
      return { ...state, savings: state.savings - action.payload };
    default:
      return state;
  }
};

export const Bank = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h4>残高:{state.savings.toLocaleString()}円</h4>
      <div className='operationArea'>
        <div>
          <input type='number' />
          <span>円</span>
        </div>
        <div className='buttons'>
          <button>預け入れ</button>
          <button>引き出し</button>
        </div>
      </div>
    </div>
  );
};
