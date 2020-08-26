import React, { useState, useEffect } from 'react';
import { default as UUID } from 'uuid';
import { addTodoAction } from '../redux/redux';
import { useActions } from '../redux/useActions'; // custom useActions

const TodoInput = () => {
  const [todo, setTodo] = useState('');
  const addTodo = useActions((todo) => addTodoAction(todo));

  useEffect(() => {
    console.log('useEffect has been called for input!', todo);
  }, [todo]);

  const onChange = (event) => {
    setTodo(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (todo.trim() === '') return;

    const newInput = {
      id: UUID.v4(),
      name: todo,
      completed: false,
    };
    addTodo(newInput);
    setTodo('');
  };
  return (
    <form onSubmit={onSubmit}>
      <div className="form-div">
        <input
          type="text"
          name="todo"
          placeholder="add a todo..."
          value={todo}
          onChange={onChange}
          autoComplete="off"
        />
        <button type="submit">Add todo</button>
      </div>
    </form>
  );
};

export default TodoInput;
