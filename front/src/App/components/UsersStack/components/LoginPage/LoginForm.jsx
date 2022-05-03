import React from "react"
import axios from 'axios'
import Button from "../../../Base/components/Button/Button"
import { useNavigate } from "react-router-dom"

export default function LoginForm() {

    const[formData, setFormData] = React.useState({ email: "", password: ""})
    const[loginMsg, setLoginMsg] = React.useState({ msg:"", errMsg: "", errPassword: "" })
    const navigate = useNavigate()

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
            return axios.post('http://localhost:3300/auth/login', {
                        email: formData.email,
                        password: formData.password
                    }).then(res => {
                    if(res.status === 200){
                        localStorage.setItem('userId', res.data.userId)
                        localStorage.setItem('token', res.data.token)
                        localStorage.setItem('rank', res.data.rank)
                        setLoginMsg({ msg: "Utilisateur connecté"})
                        navigate("/HomePage/HomeBoard")
                    } 
                }).catch((err) => {
                    setLoginMsg({ errMsg: "Identifiants Incorects"})
                    console.log(err)
                })          
        }
 
    return(
        <form 
            onSubmit={handleSubmit}
            className='login__form'
        >

            <div className='login__input'>
                <label htmlFor="email" className='login__label'>Email:</label>
                <input 
                    type="email" 
                    id='email'
                    name='email'
                    onChange={handleChange} 
                    placeholder="exemple@mail.com"
                    className='login__input--box'
                    />
                    {/* {formData.errEmail && <p className="login_errorMsg">{formData.message}</p>} */}
            </div>
            <div className='login__input'>
                <label htmlFor="password" className='login__label'>Mot de passe:</label>
                <input 
                    type="password" 
                    id='password' 
                    name='password'
                    onChange={handleChange}
                    placeholder="********"
                    className='login__input--box'/>
                {/* {formData.errPassword && <p className="login_errorMsg">{formData.errPassword}</p>} */}
            </div>  
            {loginMsg.msg && <p className="login__msg">{loginMsg.msg}</p>}
            {loginMsg.errMsg && <p className="login__msg">{loginMsg.errMsg}</p>}
            <Button cname="button button__login" type="submit">Se connecter</Button>      
        </form>
    )
}
