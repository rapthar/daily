import { addDays, addHours } from '../utils/date';

export interface Task {
  id: string;
  text: string;
  completed: boolean;
  createdAt: string;
  dueDate?: string;
  category: 'work' | 'personal' | 'today';
  assignees?: string[];
}

const now = new Date();

export const tasks: Task[] = [
  {
    id: '1',
    text: 'Finish the sales presentation for the client meeting at 2:00 PM',
    completed: false,
    createdAt: now.toISOString(),
    dueDate: addHours(now, 4).toISOString(),
    category: 'today',
    assignees: ['user1', 'user2']
  },
  {
    id: '2',
    text: 'Send follow-up emails to potential leads',
    completed: false,
    createdAt: now.toISOString(),
    dueDate: addHours(now, 6).toISOString(),
    category: 'today'
  },
  {
    id: '3',
    text: 'Review and approve the marketing budget for Q4',
    completed: true,
    createdAt: now.toISOString(),
    dueDate: addHours(now, 2).toISOString(),
    category: 'today',
    assignees: ['user1', 'user2', 'user3', 'user4']
  },
  {
    id: '4',
    text: 'Attend the team meeting at 10:30 AM',
    completed: true,
    createdAt: now.toISOString(),
    dueDate: addHours(now, -2).toISOString(),
    category: 'today'
  },
  {
    id: '5',
    text: 'Do 30 minutes of physical exercise',
    completed: false,
    createdAt: now.toISOString(),
    dueDate: addHours(now, 8).toISOString(),
    category: 'personal'
  },
  {
    id: '6',
    text: 'Read one chapter of the book you want to finish',
    completed: false,
    createdAt: now.toISOString(),
    dueDate: addDays(now, 1).toISOString(),
    category: 'personal',
    assignees: ['user1', 'user2', 'user3']
  },
  {
    id: '7',
    text: 'Pay the electricity bill and other bills',
    completed: true,
    createdAt: now.toISOString(),
    dueDate: addDays(now, 2).toISOString(),
    category: 'personal',
    assignees: ['user1', 'user2']
  },
  {
    id: '8',
    text: 'Take 10 minutes for meditation or deep breathing',
    completed: false,
    createdAt: now.toISOString(),
    dueDate: addDays(now, 3).toISOString(),
    category: 'personal'
  },
  {
    id: '9',
    text: 'Complete Monthly Report',
    completed: false,
    createdAt: now.toISOString(),
    dueDate: addHours(now, 6).toISOString(),
    category: 'work'
  }
];