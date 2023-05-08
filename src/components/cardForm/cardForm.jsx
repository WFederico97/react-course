import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function UsersForm(props) {
  const { users } = props;
  return (
    <>
      {users.map((user) => (
        <div key={user.id}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 200 , width: 200, alignContent: 'center' }}
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
