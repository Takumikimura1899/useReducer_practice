import React, { useState } from 'react';

type Todo = {
  value: string;
  readonly id: number;
};

export const TodoList = () => {
  const [text, setText] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([{ value: 'test', id: 0 }]);

  const handleOnSubmit = () => {
    if (!text) return;
    const newTodo: Todo = {
      value: text,
      id: new Date().getTime(),
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
              type='text'
              value={todo.value}
              onChange={(e) => handleOnEdit(todo.id, e.target.value)}
            />
          </li>
        ))}
      </ul>
    </>
  );
};
