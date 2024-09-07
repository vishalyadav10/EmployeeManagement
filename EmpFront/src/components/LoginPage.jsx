import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/Employeeservice";


function LoginPage(){
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [error, setError] = useState('')
const navigate = useNavigate();
const handleSubmit = async (e) => {
    e.preventDefault();


    try {
        const userData = await login(email, password)
       // console.log(userData.data)
        if (userData.data.jwtToken) {
            localStorage.setItem('token', userData.data.jwtToken)
            navigate('/employee')
        }else{
            setError(userData.message)
        }
        
    } catch (error) {
        console.log(error)
        setError(error.message)
        setTimeout(()=>{
            setError('');
        }, 5000);
    }
}
    return(
        <div className="auth-container">
            <h2>Login</h2>
            {error && <p className="error-message">{error}</p>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Email: </label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Password: </label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}
export default LoginPage;