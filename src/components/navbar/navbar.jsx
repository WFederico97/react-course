import React from "react";
import AppBar from '@mui/material/AppBar'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
export default function NavBar () {

    return (
        <>
        <AppBar position="static">
            <Container maxWidth="xl">
            <Typography >
                React Course by FW
            </Typography>
            </Container>
        </AppBar>
        </>
    )
}