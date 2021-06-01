import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Particles from 'react-particles-js';
import ContinerLogin from './components/ContinerLogin';

const useStyles = makeStyles((theme) => ({
 
root:{
  height:"100vh",
  
  display:'flex',
  justifyContent:'center',
  alignItems:'center',


},






title:{
  color:'#fff',

},
desc:{
  color:'#fff',
  fontSize:'1.3rem',
},
canvas:{
  position:'absolute',
  width:'100%',
  height:'100%',
  zIndex:'-1',
  background:"#16202C",

}


}));

export default function  Register() {
  const classes  =useStyles();
  return (
    <div className={classes.root}>
     
    <div>
      <h1 className={classes.title}>Register</h1>
      <ContinerLogin/>
      <Typography className={classes.desc}>The most secure and easy authentication</Typography>
    </div>

<img src={process.env.PUBLIC_URL+ '/assets/creative-team.svg'} alt="" width="500px"/>

<Particles
className={classes.canvas}
params={{
  particles:{
    number:{
      value:50,
    },
    size:{
     value:2, 
    },
    shape:{
      type:['circle'],
    },
  },
}

}

/>



    </div>
  )
}