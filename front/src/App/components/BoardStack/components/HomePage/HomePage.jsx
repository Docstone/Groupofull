import React from 'react';
import Nav from '../../../Base/components/Nav/Nav';
import HomeBoard from '../HomeBoard/HomeBoard';
// import TextBoard from '../TextBoard/TextBoard';
// import MediaBoard from '../MediaBoard/MediaBoard';

import { Routes, Route } from 'react-router-dom';


const Homepage = () => {
    return (
        <div>
            <Nav />
            <Routes>
                 <Route path="/HomeBoard" element={ <HomeBoard /> }/>  
                 {/* <Route path="/TextBoard" element={ <TextBoard /> }/>  
                 <Route path="/MediaBoard" element={ <MediaBoard /> }/>   */}
            </Routes>
            
        </div>
    );
}

export default Homepage;
