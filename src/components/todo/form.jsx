import React from 'react'
import { TextField, Button } from '@mui/material'
export default function Form() {
    return (

        <>
            <form>
                <TextField type="text" name="title" label="titulo" />
                <TextField type="text" name="description" label="Descripcion" />
                <Button
                    variant="contained"
                    type="submit"
                >
                    enviar
                </Button>
            </form>

        </>
    )
}
