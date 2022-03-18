export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'change': {
      return { ...state, text: action.text };
    }
    case 'check': {
      const newTodos = state.todos.map((todo) => {
        if (todo.id === action.id) {
          todo.checked = !action.checked;
        }
        return todo;
      });
      return { ...state, todos: newTodos };
    }
    case 'submit': {
      if (!state.text) return state;

      const newTodo: Todo = {
        value: state.text,
        id: new Date().getTime(),
        checked: false,
        removed: false,
      };

      return { ...state, todos: [newTodo, ...state.todos], text: '' };
    }
    default: {
      return state;
    }
  }
};
