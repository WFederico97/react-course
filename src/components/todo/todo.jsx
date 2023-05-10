import React, { useState } from "react";
import { TextField, Button, Grid } from "@mui/material";
import Form from "./form";
export let TodoList = () => {
    const [lista, setLista] = useState([]);  ///state hook
    const onSubmit = () => {
        console.log("onSubmit");
    };
    return (
        <>
            <Grid container spacing={2}>
                <Grid item display="flex" direction="column" gap="20px">
                    <Form onSubmit={onSubmit} />
                </Grid>
            </Grid>
        </>
    );
};
