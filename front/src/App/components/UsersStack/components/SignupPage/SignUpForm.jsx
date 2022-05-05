import React from 'react';
import axios from 'axios';
import Button from '../../../Base/components/Button/Button';
import { useNavigate } from 'react-router-dom';

export default function Signupform() {
    const[formData, setFormData] = React.useState({ firstName:"", lastName:"", email: "", password: "", message:"", errEmail: "", errPassword: "" })
    const[signupMsg, setSignupMsg] = React.useState({ msg:"", errMsg: "" })
    const navigate = useNavigate()

    function handleChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }

    function autoLogin() {
       return axios.post('http://localhost:3300/auth/login', {
                    email: formData.email,
                    password: formData.password
                }).then(res => {
                 if (res.status === 200) {
                    localStorage.setItem('userId', res.data.userId)
                    localStorage.setItem('token', res.data.token)
                    localStorage.setItem('rank', res.data.rank)
                    navigate("/HomePage/HomeBoard")
                }
            }).catch((err) => {
                console.log(err)
            })        
    }

    function handleSubmit(event) {
        event.preventDefault()
        return axios.post('http://localhost:3300/auth/signup', {
                    firstName: formData.firstName,
                    lastName: formData.lastName,
                    email: formData.email,
                    password: formData.password
                }).then(res => {
                    if(res.status === 201){
                        console.log(res)
                    setSignupMsg({ msg: "Nouvel utilisateur Créé"})
                    autoLogin()
                } 
            }).catch((err) => {
                setSignupMsg({ errMsg: "Adresse Email déja utilisée"})
                console.log(err)
            })          
    }

    return (
        <form  
            onSubmit={handleSubmit}
            className='signup__form'>
            <div className='signup__input'>
                <label htmlFor="firstName" className='signup__label'>Prénom:</label>
                <input
                    type="text" 
                    id='firstName' 
                    name='firstName' 
                    onChange={handleChange} 
                    placeholder="Jean"
                    className='signup__input--box'
                    />
            </div>
            <div className='signup__input'>
                <label htmlFor="lastName" className='signup__label'>Nom:</label>
                <input 
                    type="text" 
                    id='lastName' 
                    name='lastName' 
                    onChange={handleChange} 
                    placeholder="Dupont"
                    className='signup__input--box'
                    />
            </div>
            <div className='signup__input'>
                <label htmlFor="email" className='signup__label'>Email:</label>
                <input 
                    type="email" 
                    id='email' 
                    name='email' 
                    onChange={handleChange} 
                    placeholder="exemple@mail.com"
                    className='signup__input--box'
                    />
            </div>
            <div className='signup__input'>
                <label htmlFor="password" className='signup__label'>Mot de passe:</label>
                <input 
                    type='password'
                    id='password' 
                    name='password' 
                    placeholder="******"
                    onChange={handleChange} 
                    className='signup__input--box'
                    />
            </div>
            {signupMsg.msg && <p className='signup__msg'>{signupMsg.msg}</p>} 
            {signupMsg.errMsg && <p className='signup__msg'>{signupMsg.errMsg}</p>} 
            <Button cname="button button__login" type="submit">S'inscrire</Button>
        </form>
    );
}
