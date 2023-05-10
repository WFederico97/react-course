import React, {useState} from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function UsersForm(props) {

  const { users } = props;
  return (
    <>
      {users.map((user) => (
        <div key={user.id}>
          <Card sx={{ maxWidth: 600 }} className="userCard">
            <CardMedia
              sx={{ height: 200 , width: 400, alignContent: 'center' }}
              image="logo192.png"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {user.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Age: {user.age}
                <br />
                Inscription date: {user.date.toString()}
              </Typography>
            </CardContent>
          </Card>
        </div>
      ))}
    </>
  );
}
