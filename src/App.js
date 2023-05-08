
import './App.css';
import UserForm from './components/cardForm/cardForm';
import Expenses from './components/expenses/expenses';

function App() {
  const users = [
    {
      id : 0,
      name: "John Doe",
      age: 30,
      date: new Date(2022,7,9)
    },
    {
      id : 1,
      name: "Tomas Smith",
      age: 50,
      date: new Date(2022, 9, 15)
    },
    {
      id : 2,
      name: "Jack Graham",
      age: 22,
      date: new Date(2023,1,23)
    },
    {
      id : 3,
      name: "Charles Vane	",
      age: 31,
      date: new Date(2023,2,12)
    }
  ];
  return (
    <div className="App">
          <UserForm users={users} />
    </div>
  );
}

export default App;
