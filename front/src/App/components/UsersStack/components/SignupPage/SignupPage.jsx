import React from 'react'
import LoginLogo from '../../../../../App/images/icon-left-font-monochrome-white.png';
import SignupForm from './SignUpForm';
import { Link } from "react-router-dom";


export default function signupPage() {
    
    return(
        <div className='fill-window'>
            <div className='signup'>
                <img src= {LoginLogo} className='login__logo' alt="Logo Compagnie Groupomania" />
                <div className='signup__container'>
                    <h1>Inscription</h1>
                    <SignupForm />
                    <Link className='signup__loginLink' to="/">Se connecter</Link>
                </div>
            </div>
        </div>
    )
}
