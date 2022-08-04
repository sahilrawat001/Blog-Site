
import './App.css';
import Home from "./pages/Home"
import Login from "./pages/Login"
import CreatePost from "./pages/CreatePost"
import  { BrowserRouter,  Routes,Route,Link} from "react-router-dom"
import { useState } from 'react';
import { signOut }  from "firebase/auth"
import { auth } from './firebase-config';
 

 function App() {
  const [isAuth,setIsAuth]=useState( localStorage.getItem("isAuth"));

   const signedOut=()=>{
    signOut(auth ).then( ()=>{
      localStorage.clear()
      setIsAuth(false);
 window.location.pathname="/login"    ;
    } )
  }
  return (
     <BrowserRouter >
    <nav>
  <Link to='/'> Home</Link> 
    { ! isAuth ?(
      <Link to='/login'> Login</Link> 
      )
      :
      (
        <>  
      <Link to='/post'> CreatePost</Link> 
      <button onClick={signedOut} >log out</button>
   
        </>
       )}

    </nav>
       <Routes>
      <Route path='/' element={<Home isAuth={isAuth} />} />
      <Route path='/login' element={<Login setIsAuth={setIsAuth} />} />
       <Route path='/post' element= {<CreatePost  isAuth={isAuth} />} />
       </Routes>
    </BrowserRouter>
  );
}

export default App;
