import React , { useState, useEffect }from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import NavLogo from "../../../../../App/images/icon-left-font-monochrome-white.png"

const Nav = ( props ) => {
    const [ board, setBoard ] = useState()
    const navigate = useNavigate()


    const logOut = () => {
        localStorage.clear()
    }

    useEffect(() => {
      }, [board])

    return (
        <nav className='nav'>
            <img src={NavLogo} className="nav__logo" alt="Logo Groupomania" />
            <div className='nav__boardLink'>  
                <Link to ="/HomePage/HomeBoard">
                    <button  onClick={() => setBoard('home')} className={`button button__nav ${ board === 'home' ? 'button__nav--active' : ''}`}>Accueil</button> 
                </Link>
                <Link to="/HomePage/TextBoard">
                    <button onClick={() => setBoard('text')} className={`button button__nav ${ board === 'text' ? 'button__nav--active' : ''}`}>Publication Texte</button> 
                </Link>
                <Link to="/HomePage/MediaBoard">
                    <button onClick={() => setBoard('media')}  className={`button button__nav ${ board === 'media' ? 'button__nav--active' : ''}`}>Publication Multimédia</button> 
                </Link>
            </div>
            <Link to="/HomePage/PostBoard">
                <Button onClick={() => setBoard('')} cname='button button_post'>Creer un Post</Button>
            </Link>
            <Link to="/">
                <button onClick={logOut} className='button__nav button__nav__logout'>Déconnexion</button>
            </Link>
        </nav>
    );
}

export default Nav;
