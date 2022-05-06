import React , { useState, useEffect }from 'react';
import { Link } from 'react-router-dom';

const NavMobile = ( props ) => {
    const [ board, setBoard ] = useState()


    const logOut = () => {
        localStorage.clear()
    }
    

    useEffect(() => {
      }, [board])

    return (
        <nav className='navMobile'>
            <div className='navMobile__linkContainer'>
                <Link to="/HomePage/PostBoard">
                    <button onClick={() => setBoard('')} className='navMobile__button navMobile__button--post' >Creer un Post</button>
                </Link>
                <Link to ="/HomePage/HomeBoard">
                    <button  onClick={() => setBoard('home')} className={`navMobile__button  ${ board === 'home' ? 'navMobile__button--active' : ''}`}>Accueil</button> 
                </Link>
                <Link to="/HomePage/TextBoard">
                    <button onClick={() => setBoard('text')} className={`navMobile__button  ${ board === 'text' ? 'navMobile__button--active' : ''}`}>Texte</button> 
                </Link>
                <Link to="/HomePage/MediaBoard">
                    <button onClick={() => setBoard('media')}  className={`navMobile__button  ${ board === 'media' ? 'navMobile__button--active' : ''}`}>Média</button> 
                </Link>
                <Link to="/">
                    <button onClick={logOut} className='navMobile__button navMobile__button--logout'>Déconnexion</button>
                </Link>
            </div>
        </nav>
    );
}

export default NavMobile;

