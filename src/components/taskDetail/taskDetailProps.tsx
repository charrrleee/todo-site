
interface TaskDetailProps {
    task: Task;
    onSubmit: (task: Task) => void;
    onDelete: (task: Task) => void;
    onClose: () => void; 
  }
  
