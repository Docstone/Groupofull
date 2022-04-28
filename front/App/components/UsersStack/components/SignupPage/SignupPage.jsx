import React from 'react'
import LoginLogo from '../../../../../App/images/icon-above-font.png';

export default function signupPage() {
    return(
        <div className='signup'>
            <img src= {LoginLogo} className='login__logo' alt="Logo Compagnie Groupomania" />
            <div className='signup__container'>
                <h1>Inscription</h1>
                <form action="http://localhost:3000/auth/signup" method='post' className='signup__form'>
                    <div className='signup__input'>
                        <label htmlFor="email" className='signup__label__email'>Email:</label>
                        <input type="email" id='email' name='email' className='signup__input__email'/>
                    </div>
                    <div className='signup__input'>
                        <label htmlFor="password" className='signup__label__password'>Mot de passe:</label>
                        <input type="password" id='password' name='password' className='signup__input__password'/>
                    </div>      
                    <input type='submit' className='signup__button'></input>    
                </form>

                <a href="">Se connecter</a>
            </div>
        </div>
    )
}
