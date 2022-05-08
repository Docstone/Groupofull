import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Adminbutton = (props) => {
    const auth = localStorage.getItem('token')
    const userUuid = localStorage.getItem('userId')
    const navigate = useNavigate()

    const deletePost = () => {
        axios.delete(`http://localhost:3300/post/deletePost/${props.postUuid}`, {
            headers: {
                Authorization: `Bearer ${auth}`,
                auth: userUuid
            }
        }).then(() =>  navigate('/HomePage/'))
    }

    const deleteComment = () => {
        axios.delete(`http://localhost:3300/post/deleteComment/${props.commentUuid}`, {
            headers: {
                Authorization: `Bearer ${auth}`,
                auth: userUuid
            }
        }).then(() => {
            props.getComments(oldComments => [...oldComments])
        })
    }    

    return (
        <div className='button__delete'>   
           {props.commentUuid && <button onClick={deleteComment}>Supprimer</button>}
           {props.postUuid && <button onClick={deletePost}>Supprimer</button>}
        </div> 
    );
}

export default Adminbutton;
