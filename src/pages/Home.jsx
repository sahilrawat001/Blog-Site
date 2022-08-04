import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import {getDocs,collection, deleteDoc ,doc } from  "firebase/firestore"
import {db,auth } from '../firebase-config'
import { async } from '@firebase/util';

const Home = ( isAuth) => {
  const [posts,setPosts]=useState([]);
  const postsCollectionRef=collection(db ,'posts');
  const deletePost=async( id)=>{
    const postDOc=doc(db , "posts" , id  )
    await deleteDoc( postDOc );
  }
  useEffect( ()=>{
    const getPosts=async ()=>{
      const data =await getDocs( postsCollectionRef );
      setPosts( data.docs.map( (doc) => ( { ...doc.data(),id :doc.id  } )  ) );
     };

    getPosts();
  } ,[deletePost]);
  
   return (
    <div className='homePage' >
      {posts.map( (post)=>{
        return ( <div className="post"> 
         <div className="postHeader">
          <div className="title">
            <h1>
              {post.title}
            </h1>
          </div>
          <div className="deletePost">
           {isAuth && post.author.id===auth.currentUser.uid &&( <button
             onClick={()=> 
             {deletePost(post.id); }} 
            >
              {" "}
               &#128465;
            </button>
      )}
          </div>
        </div>
        <div className="postTextContainer">
          {post.text}

        </div>
        <h3>@ {post.author.name}  </h3>
        </div>
        );
      } )}  
      
      </div>
  );
}

export default Home;