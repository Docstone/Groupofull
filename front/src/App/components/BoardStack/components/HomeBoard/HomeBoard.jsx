import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { DateFormat , TimeFormat} from '../../../../helpers/DateFormat';
import { CapitalizeFirst } from '../../../../helpers/CapitalizeFirst';
import CommentBoard from '../CommentBoard/CommentBoard';


function HomeBoard() {
    const [ posts, setPosts] = useState([])
    const [ showComments, setShowComments ] = useState(false)


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
   
      
    return (

        <div className='homeBoard'>
            <h1 className='homeBoard__title'>Toutes les Publications</h1>
            {posts.length > 0 && (
                <ul className='homeBoard__postList'>
                    {posts.map(post => (
                    <li key={post.uuid} >
                        <div className='homeBoard__typeContainer'>
                            <h4 className='homeBoard__type'>{post.type.toUpperCase()}</h4>
                        </div>
                        <div className='homeBoard__post'>
                            <div className='homeBoard__postInfo'>
                                <div className='homeBoard__postInfo__author'>
                                    <p  className='homeBoard__postInfo'><strong> {CapitalizeFirst(post.user.firstName)} {CapitalizeFirst(post.user.lastName)}</strong></p>
                                </div>
                                <div>
                                    <p  className='homeBoard__postInfo'><strong>le {DateFormat(post.createdAt)}-</strong>{TimeFormat(post.createdAt)}</p>
                                </div>
                            </div>
                                <h2 className='homeBoard__postTitle'>{post.title}</h2>
                                <h3 className='homeBoard__postBody' >{post.body}</h3>
                                {post.type === 'media' &&  (
                                    <img className='homeBoard__postImg' src={post.mediaUrl} alt={post.title} />
                                )}
                                    <p onClick={() => setShowComments(true)}>Voir les Commentaires</p>
                                    <CommentBoard comments={post.comments}/>
                            </div>
                        </li>
                    ))}
                </ul>
            )}  
        </div>
    );
}

export default HomeBoard;
