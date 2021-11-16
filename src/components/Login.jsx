import React from "react";
import { firebase} from "../firebase";

function Login() {
    const SignInWithFirebase = () => {
        var google_provider = new firebase.auth.GoogleAuthProvider();
        google_provider.addScope("https://www.googleapis.com/auth/youtube.force-ssl")
        firebase.auth().signInWithPopup(google_provider).then((re) => {
          console.log(re);
        })
        .catch((err)=>{
            console.log(err)
        })
      };
  return (
    <button onClick={SignInWithFirebase}>Sign ın</button>
  );
}



export default Login;
