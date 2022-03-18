import React, { useState, useReducer } from 'react';
import { reducer } from '../reducer';
import { initialState } from '../initialState';

type Todo = {
  value: string;
  readonly id: number;
  checked: boolean;
  removed: boolean;
};

type Filter = 'all' | 'checked' | 'unchecked' | 'removed';

export const TodoList = () => {
  const [text, setText] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([
    { value: 'test', id: 0, checked: false, removed: false },
  ]);
  const [filter, setFilter] = useState<Filter>('all');

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleOnSubmit = () => {
    dispatch({ type: 'submit' });
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'change', text: e.target.value });
  };

  const handleOnEdit = (id: number, value: string) => {
    dispatch({ type: 'edit', id, value });
  };

  const handleOnCheck = (id: number, checked: boolean) => {
    dispatch({ type: 'check', id, checked });
  };

  const handleOnRemove = (id: number, removed: boolean) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.removed = !removed;
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const handleOnEmpty = () => {
    const newTodos = todos.filter((todo) => !todo.removed);
    setTodos(newTodos);
  };

  const filteredTodos = state.todos.filter((todo) => {
    switch (state.filter) {
      case 'all':
        return !todo.removed;
      case 'checked':
        return todo.checked && !todo.removed;
      case 'unchecked':
        return !todo.checked && !todo.removed;
      case 'removed':
        return todo.removed;
      default:
        return todo;
    }
  });

  return (
    <>
      <select
        defaultValue='all'
        onChange={(e) => setFilter(e.target.value as Filter)}
      >
        <option value='all'>全てのタスク</option>
        <option value='checked'>完了したタスク</option>
        <option value='unchecked'>現在のタスク</option>
        <option value='removed'>ゴミ箱</option>
      </select>
      {filter === 'removed' ? (
        <button onClick={handleOnEmpty}>ゴミ箱を空にする</button>
      ) : (
        <>
          <form
            action=''
            onSubmit={(e) => {
              e.preventDefault();
              handleOnSubmit();
              console.log('送信されたよ');
            }}
          >
            <input
              type='text'
              value={state.text}
              disabled={filter === 'checked'}
              onChange={(e) => handleOnChange(e)}
            />
            <button
              type='submit'
              disabled={filter === 'checked'}
              // onClick={() => {
              //   console.log('追加ボタンが押されたよ');
              //   handleOnSubmit();
              // }}
              onSubmit={handleOnSubmit}
            >
              追加
            </button>
          </form>
        </>
      )}
      <ul>
        {filteredTodos.map((todo) => (
          <li key={todo.id}>
            <input
              type='checkbox'
              disabled={todo.removed}
              checked={todo.checked}
              onChange={() => handleOnCheck(todo.id, todo.checked)}
            />
            <input
              type='text'
              disabled={todo.checked || todo.removed}
              value={todo.value}
              onChange={(e) => handleOnEdit(todo.id, e.target.value)}
            />
            <button onClick={() => handleOnRemove(todo.id, todo.removed)}>
              {todo.removed ? '復元' : '削除'}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
