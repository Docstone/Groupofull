import React, { useState, useEffect} from 'react';
import Comment from "../Comment/Comment"
import axios from 'axios';
import CommentPost from '../CommentPost/CommentPost';


const CommentBoard = ( props ) => {
    const [ comments, setComments ] = useState([])

    const getComments =  () => {
        const postUuid = props.postUuid
        const auth = localStorage.getItem('token')
        axios.get(`http://localhost:3300/post/${postUuid}`, {
            headers: {
                "Authorization": `Bearer ${auth}`
            }
        }).then(res => {
            setComments(res.data.comments)
        })
    }

    useEffect(() => {
        getComments()
      }, [])

   
    return (
        <div>
            <CommentPost  postUuid={props.postUuid} getComments={getComments} />
            {comments.length > 0 && (
            <ul className='commentList'>
                    {comments.map(comment => (
                    <Comment key={comment.uuid}  comment={comment} getComments={getComments} />
                    ))}
            </ul>
            )}
        </div>

    );
}

export default CommentBoard;
