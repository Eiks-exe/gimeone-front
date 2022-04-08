import {Button, Grid, Paper, SxProps, Typography } from '@mui/material'
import type { NextPage } from 'next'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

const sectionStyles : SxProps = {
  minHeight:'100vh',
  display:'flex',
  justifyContent:'center',
  alignItems:'center',
  borderBottom:'1px solid #dedede'
}
const Home: NextPage = () => {
  return (
    <Layout title='Home'>
      <Navbar/>
      <Grid container>
        <Grid item container sx={sectionStyles} className="home">
         <Grid item xs={12}>
           <Typography variant="h2" component="h1" textAlign={'center'}>
             Simple, Fast and Effective
           </Typography>
           <Typography variant='h5' textAlign={'center'}>Create your online ticket office with only a few cliks</Typography>
         </Grid>
         <Grid container direction='column' item alignItems='center' xs={12} spacing={3}>
           <Grid item xs={3}><Button variant='contained'>Demo</Button></Grid>
           <Grid item xs={3}><Button variant='contained'>Get Started</Button></Grid>
         </Grid>
        </Grid>
        <Grid item container sx={sectionStyles} className="events">
          <Grid item xs={6}>
            <Typography variant='h2' textAlign='center'>
                Current events
            </Typography>
          </Grid>
          <Grid item xs={6}>

          </Grid>
        </Grid>
        <Grid item container sx={sectionStyles} className="prices">
          <Grid item xs={12}>
            <Typography variant='h2' textAlign='center'>
                Prices
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Paper elevation={2} 
            sx={{
              margin:'auto',
              height:400,
              width:500,
            }}
            >
              <Typography variant="h4" component="h3" align="center">
                 a fair price
              </Typography>
              <Typography variant="h2" component="h3" align="center">
                  2.4% + 0.29€
              </Typography>
            </Paper>
          </Grid>
        </Grid>
        <Grid item container sx={sectionStyles} className='about'>
          <Grid item xs={12}>
            <Typography variant="h2"  textAlign="center">
              About us
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h3" textAlign="center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae voluptate mollitia dicta error delectus animi similique velit culpa! Tempore asperiores ullam, quod numquam quibusdam at omnis laborum ratione facere saepe!
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  )
}
//TODO  make a footer 

export default Home
