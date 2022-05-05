import React from 'react';
import axios from 'axios';

const Adminbutton = (props) => {

    const deleteComment = () => {
        const auth = localStorage.getItem('token')
        const userUuid = localStorage.getItem('userId')
        axios.delete()
    }

    return (
  
        <div>   
           {props.comment && <button onClick={deleteComment}>Supprimer</button>}
           {props.post && <button onClick={deletePost}>Supprimer</button>}
        </div> 
    );
}

export default Adminbutton;
