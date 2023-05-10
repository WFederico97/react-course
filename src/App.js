import React , {useState} from 'react';
import './App.css';
import UserForm from './components/cardForm/cardForm';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

function App() {
  const [updateArray, setUpdatedArray] = useState(false)
  let users = [
    {
      id: 0,
      name: "John Doe",
      age: 30,
      date: new Date(2022, 7, 9)
    },
    {
      id: 1,
      name: "Tomas Smith",
      age: 50,
      date: new Date(2022, 9, 15)
    },
    {
      id: 2,
      name: "Jack Graham",
      age: 22,
      date: new Date(2023, 1, 23)
    },
    {
      id: 3,
      name: "Charles Vane",
      age: 31,
      date: new Date(2023, 2, 12)
    }
  ];
  let quitarUltimoUser = () => {
   
    setUpdatedArray(users.pop())
    console.log("Usuario eliminado: " + updateArray)
    console.log(users)
    
  }

  let reiniciar = () => {
    setUpdatedArray(users);
    console.log(users)
  }


  return (
    <div className="App">
      <UserForm users={users} />
      <Stack>
      <Button variant='outlined' onClick={quitarUltimoUser}>Quitar el ultimo usuario</Button>
      <Button variant='outlined'onClick={reiniciar} >Reiniciar</Button>
      </Stack>

    </div>
  );
}

export default App;
