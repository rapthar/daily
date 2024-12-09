import React from 'react';
import { MoreVertical } from 'lucide-react';
import { Todo } from '../types';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <div className="flex items-center gap-3 py-3 px-4 bg-white border border-gray-200 rounded-lg group animate-fadeIn hover:shadow-sm transition-shadow">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className="w-4 h-4 border-2 border-gray-300 rounded checked:bg-blue-500 checked:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 transition-colors"
      />
      <span
        className={`flex-1 text-gray-700 ${
          todo.completed ? 'line-through text-gray-400' : 'text-sm'
        }`}
      >
        {todo.text}
      </span>
      <button
        onClick={() => onDelete(todo.id)}
        className="p-1 text-gray-400 hover:text-gray-600 focus:outline-none rounded opacity-0 group-hover:opacity-100 transition-all"
        aria-label="Task options"
      >
        <MoreVertical className="w-4 h-4" />
      </button>
    </div>
  );
}