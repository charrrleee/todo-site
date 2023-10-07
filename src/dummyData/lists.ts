Copy code
interface List {
  color: string;
  name: string;
  total: number;
}

const lists: List[] = [
  {
    color: 'red',
    name: 'Personal',
    total: 3,
  },
  {
    color: 'green',
    name: 'Work',
    total: 6,
  },
  {
    color: 'yellow',
    name: 'List 1',
    total: 3,
  }
];

export default lists;