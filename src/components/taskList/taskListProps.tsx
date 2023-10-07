
interface TodoListProps {
    tasks: Task[];
    onAddTask: (name: string) => void;
    onToggleTask: (id: number) => void;
  }
  
interface TaskListProps {
  tasks: Task[];
  updateTaskList: (newList: Task[]) => void;
}