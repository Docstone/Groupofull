import React from 'react';
import axios from 'axios';
import Button from '../../../Base/components/Button/Button';

export default function Signupform() {
    const[formData, setFormData] = React.useState({ firstName:"", lastName:"", email: "", password: "", message:"", errEmail: "", errPassword: "" })

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
                    if (res.status === 500){
                        setFormData({ message: "Identifiants Incorects"})
                } else {
                    localStorage.setItem('userId', res.data.userId)
                    localStorage.setItem('token', res.data.token)
                    localStorage.setItem('rank', res.data.rank)
                    setFormData({ message: "Utilisateur connecté"})
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
                    if(res.status === 200){
                        console.log(res)
                    setFormData({ message: "Nouvel utilisateur Créé"})
                } else if (res.satus === 400){
                    setFormData({ message: "Adresse Email déja utilisée"})
                }
            }).catch((err) => {
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
            {formData.message && <p>{formData.message}</p>} 
            <Button cname="button button__login" type="submit">S'inscrire</Button>
        </form>
    );
}
