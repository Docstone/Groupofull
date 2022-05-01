import axios from 'axios';
import React from 'react';

const getPost = async () => {
    const auth = localStorage.getItem('token')
    const res = await axios.get('http://localhost:3300/post/', {
        headers: {
            "Authorization": `Bearer ${auth}`
        }
    })
    return res
}

function HomeBoard() {
    getPost().then(res => console.log(res.data))

    return (
        <div>
            <h1>homeboard</h1>
        </div>
    );
}

export default HomeBoard;
