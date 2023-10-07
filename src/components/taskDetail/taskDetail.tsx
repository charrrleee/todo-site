import React, { useState } from 'react';
import styles from './taskDetail.module.css';

const TaskDetail: React.FC<TaskDetailProps> = ({ task, onSubmit, onDelete, onClose }) => {
  const [name, setName] = useState(task.name)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const updatedTask = JSON.parse(JSON.stringify(task));

    // Update the name property
    updatedTask.name = name;

  // Use the updated copy in your state update
    onSubmit(updatedTask); // Pass the updated task data to the parent component
    onClose();
  };

  const handleDelete = () => {
    onDelete(task); // Notify the parent component about the delete action
    onClose();
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <div className={styles.container + ' col justify-content-between'}>
      <div className={styles.headerContainer + ' row justify-content-between'}>
        <h2 className={styles.header + ' col'}>Task</h2>
        <button onClick={handleClose} className={styles.closeButton + " col-auto"}>
          X
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            className={styles.taskName}
            type="text"
            placeholder="title"
            value={name}
            onChange={(e) => setName(e.target.value)} // Use setName directly as the onChange handler
            required
          />
        </div>
        <div className={styles.buttonGroup +' row justify-content-around'}>
          <button className={styles.deleteButton + " col-auto"} onClick={handleDelete}>Delete Task</button>
          <button className={styles.saveButton + " col-auto"} type="submit">Save Changes</button>
        </div>
      </form>
    </div>
  );
};

export default TaskDetail;
