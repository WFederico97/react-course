import React from 'react'
import {TextField} from 
export default function Form() {
  return (

    <>
    <form>
    <TextField type="text" name="title" label="titulo"/>
    <TextField type="text" name="description" label="Descripcion"/>
    <Button 
    variant="contained"
    >
        enviar
    </Button>
    </form>

    </>
  )
}
