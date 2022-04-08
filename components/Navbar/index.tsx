import * as React from 'react';
import { Button, Grid } from '@mui/material';
import Navlogo from './Navlogo';
import NavLink from './NavLink';
import { padding } from '@mui/system';


interface INavbarProps { 
}


const Navbar: React.FunctionComponent<INavbarProps> = (props) => {
  return(
    <Grid container sx={{
        background: 'black',
        height: '70px',
        displayflex: 'flex',
        justifyContent: 'space-between',
        alignItems : 'center',
        position: 'sticky',
        top: 0 ,
        paddingLeft:'1.5rem'
    }}>
        <Grid item xs={3}><Navlogo label="GimeOne"/></Grid>
        <Grid item container xs={3}>
            <NavLink name='Events' to='events'/>
            <NavLink name='Prices' to='prices'/>
            <NavLink name='About' to='about'/>
        </Grid>
        <Grid item container xs={3} spacing={1}>
            <Grid item><Button variant='outlined'>log in</Button></Grid>
            <Grid item><Button variant='contained' href="./auth/Register">sign up</Button></Grid>
        </Grid>
    </Grid>
  ) ;
};

export default Navbar ;