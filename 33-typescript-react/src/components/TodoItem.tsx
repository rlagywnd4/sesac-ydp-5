import React from 'react';
import { ToDoItem } from '../types/types';
import TodoList from './TodoList';

interface Props {
  todo: ToDoItem;
  toggleComplete: (id: number) => void;
}

export default function TodoItem({ todo, toggleComplete }: Props) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          onChange={(e) => toggleComplete(todo.id)}
          defaultChecked={todo.completed}
        />
        {todo.text}
      </label>
    </li>
  );
}
