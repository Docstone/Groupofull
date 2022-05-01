import React from "react";
import LoginPage  from './App/components/UsersStack/components/LoginPage/LoginPage.jsx';
import SignupPage  from './App/components/UsersStack/components/SignupPage/SignupPage.jsx';
import HomePage from './App/components/BoardStack/components/HomePage/HomePage.jsx';

import { BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";

function App() {
 
    return(
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={ <LoginPage/> } />
                    <Route path="/SignupPage" element={ <SignupPage /> } />
                    <Route path="/HomePage" element={ <HomePage /> } />        
                </Routes>
            </div>  
        </Router>
      
    )
}

export default App