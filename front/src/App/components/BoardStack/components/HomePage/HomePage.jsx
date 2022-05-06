import React, { useEffect } from 'react';
import Nav from '../../../Base/components/Nav/Nav';
import NavMobile from '../../../Base/components/Nav/NavMobile';
import HomeBoard from '../HomeBoard/HomeBoard';
import iconBack from  '../../../../../App/images/icon.svg';
import TextBoard from '../TextBoard/TextBoard';
import MediaBoard from '../MediaBoard/MediaBoard';
import PostBoard from '../PostBoard/PostBoard';

import { Routes, Route, Navigate } from 'react-router-dom';

const Homepage = () => {
   

    return (
        <div className='backgroundImage' style={{ backgroundImage:  `url(${iconBack})`}}>
            <Nav />
            <NavMobile />
            <Routes>
                 <Route path="/HomeBoard" element={ <HomeBoard /> }/>  
                 <Route path="/TextBoard" element={ <TextBoard /> }/>  
                 <Route path="/MediaBoard" element={ <MediaBoard /> }/>  
                 <Route path="/PostBoard" element={ <PostBoard /> }/>  
                 <Route path="*" element= {<Navigate to="/HomePage/HomeBoard" replace />} />
            </Routes>
            
        </div>
    );
}

export default Homepage;
