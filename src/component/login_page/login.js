import React, {useState} from 'react';
import './login.css';
import {users} from './users';
import {useNavigate} from 'react-router-dom';


function Login({authy}){

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)

    const navigate = useNavigate()

    const submitform = (e) => {
        e.preventDefault()
        const newEntry = {email: email ,password: password}
        if(users[0].email === newEntry.email && users[0].password === newEntry.password)
        {
            authy()
            navigate('/test')
        }else{

        }
    }

    return (
        <div className="login-container">
            <div className='login'>
                <h1>Uassess</h1>
                <div className='login-form-container'> 
                    <form action="" onSubmit={submitform} className="login-form">
                            <div className="EMAIL">
                                <label htmlFor="email">Email</label>
                                <br/>
                                <input className="email" type="text" name="email" id="email" autoComplete="off" value={email}
                                    required onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                            <div className="PASSWORD">
                                <label htmlFor="password">Password</label>
                                <br/>
                                <input className="password" type="password" name="password" id="password" autoComplete="off" value={password} 
                                    required onChange={(e) => setPassword(e.target.value)}/>
                            </div>  

                            <button type="submit" className="home-btn">Login</button>
                            {error && "Invalid Login Credentials.."}
                            
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Login;