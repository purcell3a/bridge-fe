import { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import './Signup.css';

function SignUp () {
    const navigate = useNavigate()
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: ''
    })
    const [error, setError] = useState('')
    const handleSubmit = (e) => {
       e.preventDefault()
       console.log(form)
       setError("submited")
    }
    const handleChange = (e) => {
        setForm({...form, 
            [e.target.name]: e.target.value   
           })
    }

    return (
        <div className='Signup'>
            <div>
                <img src="bridge.webp" alt="logo" className='logo'/>
            </div>
            <form onSubmit={handleSubmit}>
                <label> Email: </label>
                <input placeholder = "Email" type="email" name="email" value={form.email} onChange={handleChange}/>

                <label> Name: </label>
                <input placeholder = "Name" type="text" name="name" value={form.name} onChange={handleChange}/>

                <label> Password: </label>
                <input placeholder = "Password" type="text" name="password" value={form.password} onChange={handleChange}/>

                <input type="submit" value="Submit" />
            </form>
            {error && <div className="error-message">{error}</div>} {/* Display error message if it exists */}
            <Link className="form-link" to="/login">Have an account? Sign in</Link>
        </div>
    )
}
export default SignUp