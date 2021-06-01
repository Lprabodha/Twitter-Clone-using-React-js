
import { firebase } from "../config/firebase-config";

const register = (provider) =>{
  return firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      console.log(result);
        return result;
    });
};

export {register};