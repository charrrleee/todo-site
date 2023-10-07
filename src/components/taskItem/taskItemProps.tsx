
interface Task {
  id: string;
  completed: boolean; 
  name: string;
  description?: string;
  list: string;
  dueDate?: string;
  tag?: string;
}

interface TaskItemProps {
  task: Task;
  onToggleTask: (task: Task) => void;
  onOpenDetails: (task: Task) => void;

}