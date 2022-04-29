import React from "react";
import LoginPage  from '../App/components/UsersStack/components/LoginPage/LoginPage.jsx';
import SignupPage  from '../App/components/UsersStack/components/SignupPage/SignupPage.jsx';
import { BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";

function App() {
    return(
        <Router>
            <div>
                <LoginPage />
                <Routes>
                    <Route path="SignupPage/" element={ <SignupPage /> } />
                    <Route path="/" element={ <SignupPage /> } />
                </Routes>
            </div>
        </Router>
      
    )
}

export default App