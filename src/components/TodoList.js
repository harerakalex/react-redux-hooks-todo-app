import React from 'react';
import { useSelector } from 'react-redux';
import { useActions } from '../redux/useActions';
import { toggleTodoAction, deleteTodoAction } from '../redux/redux';

function TodoList() {
  const todos = useSelector((state) => state.todos);
  const toggleTodo = useActions((todoId) => toggleTodoAction(todoId));
  const deleteTodo = useActions((todoId) => deleteTodoAction(todoId));

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
          />
          <span className={todo.completed ? 'complete' : null}>
            {todo.name}
          </span>
          <span
            className="delete-button"
            onClick={deleteTodo.bind(null, todo.id)}
          >
            X
          </span>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
