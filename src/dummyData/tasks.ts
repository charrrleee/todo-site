import { v4 as uuidv4 } from 'uuid';

interface Task {
  id: string,
  completed: boolean; 
  name: string;
  description?: string;
  list: string;
  dueDate?: string;
  tag?: string;
}

  const dummyTasks: Task[] = [
    {
      id: uuidv4(),
      name: 'Research Content Ideas',
      list: 'Personal',
      completed: false,
    },
    {
      id: uuidv4(),
      name: 'Create a Database of Guest Authors',
      list: 'Work',
      description: 'Set up a database for managing guest author information.',
      completed: false,
    },
    {
      id: uuidv4(),
      name: 'Renew Drivers\' License',
      list: 'Personal',
      dueDate: '22-03-2022',
      completed: false,
    },
    {
      id: uuidv4(),
      name: 'Consult Accountant',
      list: 'List 1',
      completed: false,
    },
    {
      id: uuidv4(),
      name: 'Print Business Card',
      list: 'Work',
      completed: false,
    },
  ];
  
  export default dummyTasks;