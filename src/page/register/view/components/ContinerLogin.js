import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { githubAuth, googleAuth } from '../../../../config/firebase-config';
import { register } from '../../../../service/auth_service';
import useRegisterUser from '../../hook/useRegisterUser';

const useStyles = makeStyles((theme) => ({

 text:{
   color:'#fff',
  fontSize:'1.4rem',
  letterSpacing:'2px',
},

textContiner:{
 flexGrow:'1',
  textAlign:'center',
},

continer:{

marginRight: theme.spacing(2),

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

}));

export default function ContinerLogin () {
  const classes  =useStyles();
  const registerUser  = useRegisterUser();
  return (
   <div className={classes.continer}>
        <div className={classes.box} onClick={()=> registerUser(githubAuth)}>
          <img src={process.env.PUBLIC_URL + '/assets/github.png'}
           alt="github"
           width="60px"
           height="60px"

           />

           <div className={classes.textContiner}>
           <Typography className={classes.text}>Github</Typography>
           </div>
         
        </div>
          <div className={classes.box} onClick={()=> registerUser(googleAuth)}>
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
  )
}