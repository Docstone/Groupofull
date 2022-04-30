import React from "react"

export default function LoginForm() {
    const[formData, setFormData] = React.useState({ email: "", password: "", message:"", errEmail: "", errPassword: "" })

    function handleChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }
 function handleSubmit(event) {
        event.preventDefault()
        return fetch('http://localhost:3000/auth/login', {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify({
                    email: formData.email,
                    password: formData.password
                })
            }).then((res) => {
                if( res.ok ){
                    setFormData({ message: "Utilisateur connecté"})
                } else {
                    setFormData({ message: "Identifiants Incorects"})
                }
            }).catch((err) => {
                console.log(err)
            })          
    }
 
    return(
        <form 
            onSubmit={handleSubmit}
            action="http://localhost:3000/auth/login"
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
                    {formData.errEmail && <p className="login_errorMsg">{formData.message}</p>}
            </div>
            <div className='login__input'>
                <label htmlFor="password" className='login__label__password'>Mot de passe:</label>
                <input 
                    type="password" 
                    id='password' 
                    name='password'
                    onChange={handleChange}
                    className='login__input__password'/>
                {formData.errPassword && <p className="login_errorMsg">{formData.errPassword}</p>}
            </div>  
            {formData.message && <p className="login_errorMsg">{formData.message}</p>}
            <input className='login__button' type="submit" value='Se connecter'/>        
        </form>
    )
}
