import * as React from 'react';
import Button from '@mui/material/Button';
import Navbar from './components/Navbar/Navbar';
import Grid from '@mui/material/Grid';
import { Outlet } from 'react-router-dom';
function App() {
  return (
    <Grid container>
      <Navbar/>
      <Outlet/>
    </Grid>
  );
}

export default App;
