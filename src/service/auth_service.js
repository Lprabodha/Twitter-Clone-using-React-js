
import { firebase } from "../config/firebase-config";

class AuthService{

authenticationUser = (provider) => {
  return firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
     
        return result;
    });
};

  signOut = async () =>  {
   await  firebase.auth().signOut();
  }
};
export default AuthService 