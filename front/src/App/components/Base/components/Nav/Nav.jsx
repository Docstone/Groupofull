import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import NavLogo from "../../../../../App/images/icon-left-font-monochrome-white.png"

const Nav = () => {
    return (
        <nav className='nav'>
            <img src={NavLogo} className="nav__logo" alt="Logo Groupomania" />
            <div className='nav__boardLink'>  
                <Link to ="/HomePage/HomeBoard">
                    <Button cname="button button__nav">Accueil</Button>
                </Link>
                <Link to="/HomePage/TextBoard">
                    <Button cname="button button__nav">Publication Texte</Button>
                </Link>
                <Link to="/HomePage/MediaBoard">
                    <Button cname="button button__nav button__nav--active">Publication Multimédia</Button>
                </Link>
            </div>
            <Link to="/HomePage/PostBoard">
                <Button cname='button button_post'>Creer un Post</Button>
            </Link>
        </nav>
    );
}

export default Nav;
