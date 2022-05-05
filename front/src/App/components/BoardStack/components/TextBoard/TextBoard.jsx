import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import Post from '../Post/Post'



function TextBoard(props) {
    const [ posts, setPosts] = useState([])

    const getPosts =  () => {
        const auth = localStorage.getItem('token')
        axios.get('http://localhost:3300/post/', {
            headers: {
                "Authorization": `Bearer ${auth}`
            }
        }).then(res => {
            setPosts(res.data)
        })
    }

    useEffect(() => {
        getPosts()
      }, [])
   
      const textPosts = posts.length > 0 && (
        <ul className='board__postList'>
            {posts.map(post => (
                 post.type === 'text' ?
               <Post key={post.uuid}  post={post} boardState={props.boardState}/> : <span key={post.uuid}></span>
            ))}
        </ul>
    )

    return (

        <div className='board'>
            <h1 className='board__boardTitle'>Publications Texte</h1>
                {textPosts}
            <p>. . .</p>
            { posts.length > 0 && <p className='board__endPosts' >Fin des Posts</p> }
            { posts.length < 1 && <p className='board__endPosts' >Aucun Post</p> }
        </div>
    );
}

export default TextBoard;
