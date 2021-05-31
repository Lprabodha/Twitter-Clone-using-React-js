import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
 
root:{
  height:"100vh",
  background:"#16202C",
  display:'flex',
  justifyContent:'center',
  alignItems:'center',


},
continer:{

marginRight: theme.spacing(2),

},

text:{

 
  color:'#fff',
  fontSize:'1.4rem',
  letterSpacing:'2px',

},

textContiner:{
 flexGrow:'1',
  textAlign:'center',
},

box:{
  borderRadius:'10px',
  width:'300px',
  background:'#3E3C3F',
  display:'flex',
  alignItems:'center',
  //justifyContent:'center',
  marginBottom:theme.spacing(2),
  transition: theme.transitions.create("background-color",{
    duration:theme.transitions.duration.shorter
  }),
  "&:hover":{
    backgroundColor:'#7d73f9',

  },
cursor:'pointer',
  
},

title:{
  color:'#fff',

},
desc:{
  color:'#fff',
  fontSize:'1.3rem',
}


}));

export default function  Register() {
  const classes  =useStyles();
  return (
    <div className={classes.root}>
     
    <div>
      <h1 className={classes.title}>Register</h1>
      <div className={classes.continer}>
        <div className={classes.box}>
          <img src={process.env.PUBLIC_URL + '/assets/github.png'}
           alt="github"
           width="60px"
           height="60px"

           />

           <div className={classes.textContiner}>
           <Typography className={classes.text}>Github</Typography>
           </div>
         
        </div>
          <div className={classes.box}>
          <img src={process.env.PUBLIC_URL + '/assets/google.png'}
           alt="github"
           width="60px"
           height="60px"

           />

           <div className={classes.textContiner}>
            <Typography className={classes.text}>Google</Typography>
           </div>
       
        </div>
      </div>
      <Typography className={classes.desc}>The most secure and easy authentication</Typography>
    </div>

<img src={process.env.PUBLIC_URL+ '/assets/creative-team.svg'} alt="" width="500px"/>
    </div>
  )
}