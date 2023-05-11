import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, Container } from "@mui/material";
import { red } from '@mui/material/colors';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export default function ListaDeGastos(props) {
  const { gastos } = props;
  return (
    <>
      {gastos.map((gasto) => (
        <div key={gasto.id}>


            <Card
              sx={{
                maxWidth: "100vw",
                maxHeight: "100vh",
                display: "flex",
                flexDirection: "row",
                justifyContent: 'center',
                alignItems: 'center'
              }}
              className="userCard"
            >
              <CardContent
                sx={{
                  width: 1 / 10,
                  height: 85,
                  border: 3,
                  margin: 1,
                  borderRadius: "16px",
                  flexShrink: 1,
                }}
              >
                <Typography variant="h6" color="text.primary" align="center">
                  {gasto.date.toDateString()}
                </Typography>
              </CardContent>

              <CardContent sx={{ width: 1 / 3, }} >
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  textAlign={"center"}
                >
                  {gasto.name}
                </Typography>
              </CardContent>

              <CardContent
                sx={{
                  width: 1 / 3,
                  height: 50,
                  border: 3,
                  margin: 1,
                  borderRadius: "16px",
                  backgroundColor: "blue",
                  display: "flex",
                  justifyContent: 'center'
                }}
              >
                <Typography variant="h4" color="white"   >
                  $ {gasto.price}
                  <Button>
                    <DeleteForeverIcon  sx={{fontSize:40, color: red[500]}} />
                  </Button>
                </Typography>
              </CardContent>

            </Card>
        </div>
      ))}
    </>
  );
}
