import React from 'react';
import { Todo } from '../types';
import { MoreVertical } from 'lucide-react';

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export function TodoList({ todos, onToggle, onDelete }: TodoListProps) {
  return (
    <div className="space-y-2">
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="flex items-center gap-3 py-3 px-4 bg-white dark:bg-dark-surface rounded-lg group hover:shadow-sm transition-shadow"
        >
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggle(todo.id)}
            className="w-4 h-4 rounded border-gray-300 dark:border-gray-600 text-blue-500 focus:ring-blue-500"
          />
          <span
            className={`flex-1 text-sm ${
              todo.completed ? 'line-through text-gray-400 dark:text-gray-500' : 'text-gray-700 dark:text-gray-300'
            }`}
          >
            {todo.text}
          </span>
          <span className="text-xs text-gray-400 dark:text-gray-500">Today</span>
          <button
            onClick={() => onDelete(todo.id)}
            className="p-1 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <MoreVertical className="w-4 h-4" />
          </button>
        </div>
      ))}
    </div>
  );
}