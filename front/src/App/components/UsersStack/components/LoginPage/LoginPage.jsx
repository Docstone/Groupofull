import React from 'react'
import LoginLogo from '../../../../../App/images/icon-left-font-monochrome-white.png';
import LoginForm from './LoginForm'
import { Link } from "react-router-dom";


export default function LoginPage() {
    return(
        <div className='fill-window'>
            <div className='login'>
                <img src= {LoginLogo} className='login__logo' alt="Logo Compagnie Groupomania" />
                <div className='login__container'>
                    <h1>Connexion</h1>
                    <LoginForm />
                    <Link className='login__signupLink' to="SignupPage/">S'inscrire</Link>
                </div>
            </div>
        </div>
    )
}

