

import { githubAuth, googleAuth } from '../../config/firebase-config';
const content ={
    title:'Register',
    desc:'The most secure and easy authentication',
    mainImg: process.env.PUBLIC_URL+ '/assets/creative-team.svg',


    authMethod:[
        {
            text:"Github",
            img:process.env.PUBLIC_URL + '/assets/github.png',
            method:githubAuth,
        },
        {
            text:"Googel",
            img:process.env.PUBLIC_URL + '/assets/google.png',
            method:googleAuth,
        }
    ]

};

export default content;
