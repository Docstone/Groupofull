import React from "react";
import LoginPage  from './App/components/UsersStack/components/LoginPage/LoginPage.jsx';
import SignupPage  from './App/components/UsersStack/components/SignupPage/SignupPage.jsx';
import HomePage from './App/components/BoardStack/components/HomePage/HomePage.jsx';
import ErrorPage from "./App/components/Base/components/ErrorPage/ErrorPage.jsx";
import Protectedroutes from "./App/components/UsersStack/components/ProtectedRoutes/ProtectedRoutes.jsx";

import { BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";

function App() {
 
    return(
        <Router>
            <Routes>
                <Route path="/" element={ <LoginPage/> } />
                <Route path="/SignupPage" element={ <SignupPage /> } />
                <Route element={ <Protectedroutes/> } >
                    <Route path="/HomePage/*" element={ <HomePage /> } >  
                    </Route> 
                </Route>
                <Route path="*" element={ <ErrorPage /> } />        
            </Routes>
        </Router>
      
    )
}

export default App