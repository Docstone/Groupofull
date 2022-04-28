import React from 'react'
import LoginLogo from '../../../../../App/images/icon-above-font.png';
import LoginForm from './LoginForm'

export default function LoginPage() {
    return(
        <div className='login'>
            <img src= {LoginLogo} className='login__logo' alt="Logo Compagnie Groupomania" />
            <div className='login__container'>
                <h1>Connexion</h1>
                <LoginForm />
                <a href="">S'inscrire</a>
            </div>
        </div>
    )
}

