import React, { useState } from 'react';
import styles from './taskList.module.css';
import AddTask from '../addTask/addTask';
import TaskItem from '../taskItem/taskItem';
import TaskDetail from '../taskDetail/taskDetail';
import { v4 as uuidv4 } from 'uuid';

const TaskList: React.FC<TaskListProps> = ({ tasks, updateTaskList }) => {
  const [newtasks, setNewTasks] = useState(tasks);
  const [taskDetail, setTaskDetail] = useState<Task | null>(null);

  const handleAddTask = (newTaskName: string) => {
    const newTask = {
      id: uuidv4(),
      name: newTaskName,
      list: 'Personal',
      completed: false,
    }
    setNewTasks([...newtasks, newTask]);
    updateTaskList(newtasks);
  };

  const handleToggleTask = (task: Task) => {
    const updatedTasks = newtasks.filter(t => t.id !== task.id);
    setNewTasks(updatedTasks);
    updateTaskList(updatedTasks);
  };
  
  const handleOpenDetails = (task: Task) => {
    setTaskDetail(task);
  };

  const handleCloseDetails = () => {
    setTaskDetail(null);
  };

  const handleDeleteTask = (task: Task) => {
    const updatedTasks = newtasks.filter(t => t.id !== task.id);
    setNewTasks(updatedTasks);
    updateTaskList(updatedTasks);
    setTaskDetail(null);
  }

  const handleUpdateTask = (task: Task) => {
    const updatedTasks = newtasks.map(t => {
      if (t.id === task.id) {
        return task;
      } else {
        return t;
      }
    });
    setNewTasks(updatedTasks);
    updateTaskList(updatedTasks);
    setTaskDetail(null);
  }

  return (
    <div className={styles.container + ' row'}>
      <div className='col'>
        <div className={styles.header +' row'}>
          <h2 className='col'>Today</h2>
          <p className={styles.taskNumber + ' col'}>{newtasks.length}</p>
        </div>
        <hr />

        <div className='col'>
          <div className="add-task">
              <AddTask 
                onAddTask={handleAddTask} 
              />
          </div>
          <div className="tasks">
            { newtasks.length > 0 ? (
                newtasks.map((task, index) => (
                  <TaskItem
                    key={index}
                    task={task}
                    onToggleTask={handleToggleTask}
                    onOpenDetails={handleOpenDetails}
                  />
                ))
              ) : (
                <p>No todos found</p>
              )
            }
          </div>
        </div>
      </div>
      {taskDetail !== null && 
        <div className={'col'} >
          <TaskDetail task={taskDetail} 
            onClose={handleCloseDetails} 
            onSubmit={handleUpdateTask} 
            onDelete={handleDeleteTask} />
        </div>
      }
    </div>
  );
};

export default TaskList;
