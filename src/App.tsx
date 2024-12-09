import React from 'react';
import { useState } from 'react';
import { useTodos } from './hooks/useTodos';
import { LayoutGrid, Plus } from 'lucide-react';
import { Sidebar } from './components/Sidebar';
import { TodoList } from './components/TodoList';
import { WelcomeBanner } from './components/WelcomeBanner';
import { TaskMetrics } from './components/TaskMetrics';
import { formatFullDate } from './utils/date';
import { NewTaskModal } from './components/NewTaskModal';

export default function App() {
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodos();
  const [isNewTaskModalOpen, setIsNewTaskModalOpen] = useState(false);
  const dateString = formatFullDate(new Date());

  const metrics = {
    completedToday: todos.filter(t => t.completed && isToday(new Date(t.createdAt))).length,
    completedThisWeek: todos.filter(t => t.completed && isThisWeek(new Date(t.createdAt))).length,
    completionRate: calculateCompletionRate(todos),
    averageTime: '45 mins',
    currentStreak: 5
  };

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-dark-bg">
      <Sidebar />
      
      <main className="flex-1 p-8 overflow-y-auto dark:bg-dark-bg">
        <div className="max-w-4xl mx-auto">
          <header className="mb-8">
            <h1 className="text-2xl font-semibold text-gray-900 dark:text-dark-text-primary mb-1">
              Good Evening, Camero 🥳
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              {dateString}
            </p>
          </header>

          <TaskMetrics {...metrics} />
          <WelcomeBanner />
          
          <button
            onClick={() => setIsNewTaskModalOpen(true)}
            className="w-full px-4 py-3 mb-4 border-2 border-dashed border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-600 rounded-lg flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors"
          >
            <Plus className="w-5 h-5" />
            <span>New Task</span>
          </button>

          <TodoList 
            todos={todos}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
          />
        </div>

        <NewTaskModal
          isOpen={isNewTaskModalOpen}
          onClose={() => setIsNewTaskModalOpen(false)}
          onSubmit={(task) => {
            addTodo(task.title);
            setIsNewTaskModalOpen(false);
          }}
        />
      </main>
    </div>
  );
}

function isToday(date: Date): boolean {
  const today = new Date();
  return date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear();
}

function isThisWeek(date: Date): boolean {
  const today = new Date();
  const weekStart = new Date(today.setDate(today.getDate() - today.getDay()));
  const weekEnd = new Date(today.setDate(today.getDate() - today.getDay() + 6));
  return date >= weekStart && date <= weekEnd;
}

function calculateCompletionRate(todos: Array<any>): number {
  if (todos.length === 0) return 0;
  const completed = todos.filter(t => t.completed).length;
  return Math.round((completed / todos.length) * 100);
}