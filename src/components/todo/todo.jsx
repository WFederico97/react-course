import React, { useState } from "react";
import Form from "./form";
export let TodoList = () => {
  const [lista, setLista] = useState([]);
  const onSubmit = () => {
    console.log("onSubmit");
  }
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
