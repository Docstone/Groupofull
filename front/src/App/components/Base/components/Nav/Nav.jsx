import NavLogo from "../../../../../App/images/icon-left-font-monochrome-white.png"
import React , { useState, useEffect }from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import DeleteAccount from "../../../UsersStack/components/DeleteAccount/DeleteAccount";

const Nav = ( props ) => {
    const [ board, setBoard ] = useState('home')
    
    const logOut = () => {
        localStorage.clear()
    }

    return (
        <nav className='nav'>
            <img src={NavLogo} className="nav__logo" alt="Logo Groupomania" />
            <div className='nav__links'>
            <div className='nav__boardLink'>  
                <Link to ="/HomePage/HomeBoard">
                    <button  onClick={() => setBoard('home')} className={`button button__nav button  ${ board === 'home' ? 'button__nav--active' : ''}`}>Accueil</button> 
                </Link>
                <Link to="/HomePage/TextBoard">
                    <button onClick={() => setBoard('text')} className={`button button__nav button  ${ board === 'text' ? 'button__nav--active' : ''}`}>Publication Texte</button> 
                </Link>
                <Link to="/HomePage/MediaBoard">
                    <button onClick={() => setBoard('media')}  className={`button button__nav button  ${ board === 'media' ? 'button__nav--active' : ''}`}>Publication Multimédia</button> 
                </Link>
            </div>
            <Link to="/HomePage/PostBoard">
                <Button onClick={() => setBoard('')} cname='button button__post'>Creer un Post</Button>
            </Link>
            <Link to="/">
                <button onClick={logOut} className='button__nav button__nav__logout'>Déconnexion</button>
            </Link>
            <DeleteAccount />
        </div>
        </nav>
    );
}

export default Nav;
