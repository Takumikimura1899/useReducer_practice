import React, { useState } from 'react';

type Todo = {
  value: string;
  readonly id: number;
  checked: boolean;
};

export const TodoList = () => {
  const [text, setText] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([
    { value: 'test', id: 0, checked: false },
  ]);

  const handleOnSubmit = () => {
    if (!text) return;
    const newTodo: Todo = {
      value: text,
      id: new Date().getTime(),
      checked: false,
    };
    // console.log('formから送信されたよ');

    setTodos([...todos, newTodo]);
    setText('');
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleOnEdit = (id: number, value: string) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.value = value;
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const handleOnCheck = (id: number, checked: boolean) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.checked = !checked;
      }
      return todo;
    });
    setTodos(newTodos);
  };

  return (
    <>
      <form
        action=''
        onSubmit={(e) => {
          e.preventDefault();
          handleOnSubmit();
          console.log('送信されたよ');
        }}
      >
        <input type='text' value={text} onChange={(e) => handleOnChange(e)} />
        <button
          type='submit'
          // onClick={() => {
          //   console.log('追加ボタンが押されたよ');
          //   handleOnSubmit();
          // }}
          onSubmit={handleOnSubmit}
        >
          追加
        </button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type='checkbox'
              checked={todo.checked}
              onChange={() => handleOnCheck(todo.id, todo.checked)}
            />
            <input
              type='text'
              disabled={todo.checked}
              value={todo.value}
              onChange={(e) => handleOnEdit(todo.id, e.target.value)}
            />
          </li>
        ))}
      </ul>
    </>
  );
};
