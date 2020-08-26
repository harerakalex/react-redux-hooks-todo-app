import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import uuid from 'uuid/v4';

const initialState = {
  todos: [
    {
      id: uuid(),
      name: 'Poor dad, Rich dad',
      completed: false,
    },
    {
      id: uuid(),
      name: 'Inner engineering',
      completed: true,
    },
  ],
};

export const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware())
);

function reducer(state, { type, payload }) {
  switch (type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, payload],
      };
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === payload ? { ...todo, completed: !todo.completed } : todo
        ),
      };
    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== payload),
      };

    default:
      return state;
  }
}

export const addTodoAction = (todo) => ({
  type: 'ADD_TODO',
  payload: todo,
});

export const toggleTodoAction = (todoId) => ({
  type: 'TOGGLE_TODO',
  payload: todoId,
});

export const deleteTodoAction = (todoId) => ({
  type: 'DELETE_TODO',
  payload: todoId,
});
