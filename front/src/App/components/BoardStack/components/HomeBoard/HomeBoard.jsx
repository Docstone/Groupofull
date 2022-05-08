import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import Post from '../Post/Post'

function HomeBoard(props) {
    const [ posts, setPosts] = useState([])

    const getPosts =  () => {
        const auth = localStorage.getItem('token')
        axios.get('http://localhost:3300/post/', {
            headers: {
                "Authorization": `Bearer ${auth}`
            }
        }).then(res => {
            const sortedData = res.data.sort(function(a,b){
                return new Date(b.createdAt) - new Date(a.createdAt)
              })
            setPosts(sortedData)
        })
    }

    useEffect(() => {
        getPosts()
      }, [])
   
      const postList = posts.length > 0 && (
        <ul className='board__postList'>
            {posts.map(post => (
               <Post key={post.uuid}  post={post}/>
            ))}
        </ul>
    )

    return (
        <div className='board'>
            <h1 className='board__boardTitle'>Toutes les Publications</h1>
                {postList}
            <p>. . .</p>
            { posts.length > 0 && <p className='board__endPosts' >Fin des Posts</p> }
            { posts.length < 1 && <p className='board__endPosts' >Aucun Post</p> }
        </div>
    );
}

export default HomeBoard;
