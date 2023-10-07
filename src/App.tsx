import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import TaskList from './components/taskList/taskList';
import "./App.css";
import FoldMenu from './components/foldMenu/foldMenu';
import dummyTasks from './dummyData/tasks';

const App = () => {
  const [list, setList] = useState(dummyTasks.filter(t => !t.completed));
  const [taskNo, setTaskNo] = useState(list.length);
  const updateTaskList = (newList: Task[]) => {
    const size = newList.length;
    setList(newList);
    setTaskNo(size);
  }

  return (
    <div className='row'>
      <div className='col-auto'>
        <FoldMenu taskNo={taskNo} />
      </div>

      <div className='col'>
        <TaskList tasks={list} updateTaskList={updateTaskList} />
      </div>
    </div>
  )
}

export default App;