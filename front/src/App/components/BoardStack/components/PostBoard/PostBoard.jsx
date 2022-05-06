import React, { useState } from 'react';
import axios from 'axios';
import Button from '../../../Base/components/Button/Button';
import { useNavigate } from 'react-router-dom';


const PostBoard = () => {
    const navigate = useNavigate()
    const[ postInput, setPostInput ] = React.useState({ title: "", body: "", type: ""})
    const[ file, setFile ] = React.useState()

    function handleUpload(event) {
        setFile(prevFile => {
            return {
                ...prevFile,
                [event.target.name]: event.target.files[0]
            }
        })
    }

    function handleChange(event) {
        setPostInput(prevPostInput => {
            return {
                ...prevPostInput,
                [event.target.name]: event.target.value
            }
        })
    }

    const handleSubmit =  (event) => {
        event.preventDefault()
        const auth = localStorage.getItem('token')
        const userId = localStorage.getItem('userId')
        if(postInput.type === 'media'){
            axios.post('http://localhost:3300/post/createPost/',{ 
            title: postInput.title,
            body: postInput.body,
            type: postInput.type,
            upload: file.upload,
            userUuid: userId,
        }, {
            headers: {
                "Authorization": `Bearer ${auth}`,
                "Content-type": "multipart/form-data",
            }
        }).then(res => {
            navigate("/HomePage/HomeBoard")
        })
        } else if ( postInput.type === 'text') {
            axios.post('http://localhost:3300/post/createPost/',{ 
            title: postInput.title,
            body: postInput.body,
            type: postInput.type,
            userUuid: userId,
        }, {
            headers: {
                "Authorization": `Bearer ${auth}`,
                "Content-type": "multipart/form-data",
            }
        }).then(res => {
            navigate("/HomePage/HomeBoard")
        })
        }
        
    }
    
    return (
        <div className='board'>
            <h1 className='postForm__boardTitle'>Publier un post</h1>
                <form
                    onSubmit={handleSubmit}
                    className='postForm'>
               
                    <div className='postForm__inputContainer'>
                        <label className='postForm__inputLabel' htmlFor="title">Titre du post</label>
                        <input className='postForm__input' onChange={handleChange} name="title" id="title" required  placeholder='Votre titre...'></input>
                    </div>
                    <div className='postForm__inputContainer'>
                        <label className='postForm__inputLabel' htmlFor="body">Contenu du post</label>
                        <textarea className='postForm__input' onChange={handleChange} name="body" id="body" required rows="3"  placeholder='Votre contenu...'></textarea>
                    </div>

            
                    <div className='postForm__radioContainer'>
                        <div>
                            <label className='postForm__radioLabel' htmlFor="type">Publication Texte</label>
                            <input type="radio" value="text" name="type" id='type' onChange={handleChange} required/>
                         </div>
                        <div>
                            <label className='postForm__radioLabel' htmlFor="type">Publication Multimédia</label>
                            <input type="radio" value="media" name="type" id='type' onChange={handleChange} />
                        </div>
                    </div>
                    { postInput.type === 'media' && <input type="file" name="upload" id ="upload" required onChange={handleUpload}></input> }
                    <Button cname="button__input" type="submit">Publier</Button>
                </form>
        </div>
    );
}

export default PostBoard;
    