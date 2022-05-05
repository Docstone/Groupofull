import React, { useState, useContext } from 'react';
import axios from 'axios';
import Button from '../../../Base/components/Button/Button';



const Commentpost = (props) => {

 

    const[ commentInput, setCommentInput ] = useState({ body: ""})

    function handleChange(event) {
        setCommentInput(prevCommentInput => {
            return {
                ...prevCommentInput,
                [event.target.name]: event.target.value
            }
        })
    }

    const handleSubmit =  (event) => {
        event.preventDefault()
        const auth = localStorage.getItem('token')
        const userId = localStorage.getItem('userId')
        axios.post('http://localhost:3300/post/createComment/',{ 
            body: commentInput.body,
            userUuid: userId,
            postUuid: props.postUuid
        }, {
            headers: {
                "Authorization": `Bearer ${auth}`
            }
        }).then(res => {
            const newComment = {...res.data.comment}
            props.setComments(oldComments => [...oldComments, newComment])
        })
    }
    
    return (
        <div>
            <form  
                onSubmit={handleSubmit}
                className='comment__form'>
             <div className='comment__formContainer' >
                 <textarea className='comment__textArea' onChange={handleChange} name="body" id="body"  rows="1"  placeholder='votre commentaire'></textarea>
                 <Button cname="button__comment" type="submit">Commenter</Button>
             </div>
            </form>
        </div>
    );
}

export default Commentpost;
