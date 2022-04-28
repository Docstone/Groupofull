import React from "react"

export default function LoginForm() {
    const[formData, setFormData] = React.useState({ email: "", password: "" })
    console.log(formData)
    function handleChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }

    return(
        <form 
            action="http://localhost:3000/auth/login" 
            method='post' 
            className='login__form'
        >

            <div className='login__input'>
                <label htmlFor="email" className='login__label__email'>Email:</label>
                <input 
                    type="email" 
                    id='email'
                    name='email' 
                    onChange={handleChange} 
                    className='login__input__email'
                    />
            </div>
            <div className='login__input'>
                <label htmlFor="password" className='login__label__password'>Mot de passe:</label>
                <input 
                    type="password" 
                    id='password' 
                    name='password' 
                    onChange={handleChange}
                    className='login__input__password'/>
            </div>  
            <input className='login__button' type="submit" value='Se connecter'/>        
        </form>
    )
}
