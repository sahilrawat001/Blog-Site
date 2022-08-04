import React from 'react'
import { useState ,useEffect} from 'react'
import { addDoc, collection } from 'firebase/firestore'
import {db,auth } from '../firebase-config'
import  {useNavigate} from "react-router-dom"
 const CreatePost = ( {isAuth}  ) => {
const [title,setTitle]=useState("");
const [text,setText]=useState("");
 
const postsCollectionRef=collection(db ,'posts');
let navigate=useNavigate();
const createPost=async ()=>{
  await addDoc(postsCollectionRef ,{title ,text    
  ,author:{ name: auth.currentUser.displayName, id: auth.currentUser.uid  },
 }  );
 navigate("/");
};
useEffect( ()=>{
 if(!isAuth){
  navigate("/login");
 }
} ,[ ] )

  return (
    <div className='createPostPage' > 
    <div className="cpContainer">

      <h1>Create A Post</h1>

      <div className="inputGp">
       <label >
        Title:
       </label>
       <input type="text" placeholder='Title.....' onChange={(e)=>{setTitle(e.target.value );} } />
      </div>
      <div className="inputGp">
      <label >      
        POST :
      </label>
    <textarea name="text"  placeholder='Post..' onChange={(e)=>{setText(e.target.value ); } }  />

      </div>
      <button onClick={createPost} >
        Post
      </button>
    </div>
    
    </div>
  )
}

export default CreatePost