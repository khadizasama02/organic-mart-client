import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import {UserContext} from '../../App'
import { useHistory, useLocation } from 'react-router';



if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    firebase.app(); // if already initialized, use that one
}

const Login = () => {
    const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
   
    var provider = new firebase.auth.GoogleAuthProvider();
    const [user, setUser] = useState({
        isSignedIn: false,

        name: '',
        email: '',
        password: '',
        photo: '',
        error: '',
        success: false
    })
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);

    const handleSignIn = () =>
    {
        firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            console.log(result)
          var credential = result.credential;
          var token = credential.accessToken;
          var user = result.user;
          const {displayName ,email} = result.user;
          setUser(user)
          const signedInUser ={displayName, email }
          setLoggedInUser(signedInUser);
          history.replace(from);
          
        }).catch((error) => {
          
          var errorCode = error.code;
          var errorMessage = error.message;
          var email = error.email;
          var credential = error.credential;
          // ...
        });
    }
    return (
        <div>
            <h1>this is log in</h1>
            <div class="card w-50 mx-auto p-3" >

            
            <form>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        
                </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1"/>
                </div>
                        
                            <button type="submit" class="btn btn-primary w-75 ">Login</button>
            </form>
            </div>
            <div style={{textAlign:"center",marginTop: "10px"}}>
                    <h3>OR</h3>
                    <button onClick={handleSignIn} class="btn btn-danger btn-google-style">Continue with Google</button>
                </div>
        </div>
    );
};

export default Login;