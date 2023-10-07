import React, { useState } from 'react';
import styles from './taskItem.module.css';

const TaskItem: React.FC<TaskItemProps> = ({ task, onToggleTask, onOpenDetails }) => {
  const [ complete, setComplete ] = useState(task.completed);

  return (
    <div className={styles.container + " row justify-content-between"}>
      <div className="col-auto">
        <input
          className={styles.input}
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggleTask(task)}
        />
        <span>{task.name}</span>
      </div>
      <div className="col-auto">
        <button className={styles.button} onClick={() => onOpenDetails(task)}>→</button>
      </div>
    </div>
  );
};

export default TaskItem;
