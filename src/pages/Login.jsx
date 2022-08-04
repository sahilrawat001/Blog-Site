import React from 'react'
import { auth, provider} from "../firebase-config";

import { signInWithPopup } from 'firebase/auth'
import {  useNavigate } from 'react-router-dom'


const Login = ( { setIsAuth } ) => {
 const Navigate=useNavigate();
const signInWithGoogle=()=>{

  signInWithPopup(auth,provider).then( (result)=>{
   
    localStorage.setItem( "isAuth" ,true  );
    setIsAuth(true);
  Navigate("/ ")
  }  )  
}

  return (
    <div className='loginPage' > 
    <p>
      sign in with google
    </p>
  <button className="login-with-google-btn"  
  onClick={signInWithGoogle  }
  >  
  sign in
  </button>
    </div>
  )
}

export default Login