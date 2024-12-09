export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: string;
  dueDate?: string;
  assignees?: string[];
}