import React, { useState } from 'react';
import './App.css';
import UserForm from './components/cardForm/cardForm';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Container, Grid } from '@mui/material';

function App() {

  let gastos = [
    {
      id: 0,
      name: "Apple pay",
      price: 5000,
      date: new Date(2022, 7, 9)
    },
    {
      id: 1,
      name: "Amazon Prime",
      price: 1000,
      date: new Date(2022, 9, 15)
    },
    {
      id: 2,
      name: "AFIP taxes",
      price: 40000,
      date: new Date(2023, 1, 23)
    },
    {
      id: 3,
      name: "Maratea's football club donation",
      price: 10000,
      date: new Date(2023, 2, 12)
    }
  ];

  const [gasto, setGasto] = useState(gastos);

  let quitarUltimoGasto = () =>{
    setGasto(gastos.pop())
    console.log(gasto)
    console.log(gastos)
  }

   let reiniciar = () => {
     setGasto(gastos);
     console.log(gastos)
   }


  return (
    <Container sx={{width: '100vw'}} >
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{
          backgroundColor:'dimgrey',
          height: '100vh',
          width: '100vw',
          
        }}
      >
        <Grid item xs={12} md={12}>
          <UserForm gastos={gastos} />
          <Stack spacing={2}>
            <Button variant='contained' color='error' onClick={quitarUltimoGasto} >Quitar el ultimo gasto</Button>
            <Button variant='contained' onClick={reiniciar}  >Recargar control de gastos</Button>
          </Stack>
        </Grid>
      </Grid>

    </Container>
  );
}

export default App;
