export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'change': {
      return { ...state, text: action.text };
    }
    default: {
      return state;
    }
  }
};
