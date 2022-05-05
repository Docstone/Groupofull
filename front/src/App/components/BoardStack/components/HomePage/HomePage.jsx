import React, { useEffect } from 'react';
import Nav from '../../../Base/components/Nav/Nav';
import HomeBoard from '../HomeBoard/HomeBoard';
import iconBack from  '../../../../../App/images/icon.svg';
import TextBoard from '../TextBoard/TextBoard';
import MediaBoard from '../MediaBoard/MediaBoard';
import PostBoard from '../PostBoard/PostBoard';

import { Routes, Route } from 'react-router-dom';

const Homepage = () => {
   

    return (
        <div className='backgroundImage' style={{ backgroundImage:  `url(${iconBack})`}}>
            <Nav />
            <Routes>
                 <Route path="/HomeBoard" element={ <HomeBoard /> }/>  
                 <Route path="/TextBoard" element={ <TextBoard /> }/>  
                 <Route path="/MediaBoard" element={ <MediaBoard /> }/>  
                 <Route path="/PostBoard" element={ <PostBoard /> }/>  
            </Routes>
            
        </div>
    );
}

export default Homepage;
