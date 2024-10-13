import React,{useState} from 'react'
import AuthForm from '../Pages/AuthForm.css'

function AF() {
    const [isLogin, setIsLogin] = useState(true);
return (
    <>
    <div className='container'>
        <div className='form-container'>
            <div className='form-toggle'>
                <button className={isLogin ? 'active' : ""}onClick={() => setIsLogin(true)}>Login</button>
                <button className={!isLogin ? 'active' : ""}onClick={() => setIsLogin(false)}>SignUp</button>
            </div>
            {isLogin ? <>
            <div className='form'>
                <h2>Login Form</h2>
                <input type= 'email' placeholder='Email'/>
                <input type= 'password' placeholder='Password'/>
                <a href='#'>Forget Password</a>
                <button>Login</button>
                <p>don't have an account?<a href='#' onClick={() => setIsLogin(false)}> SignUp</a></p>
            </div>
            </> : <>
            <div className='form'>
            <h2>SignUp Form</h2>
                <input type= 'username' placeholder='Username'/>
                <input type= 'email' placeholder='Email'/>
                <input type= 'password' placeholder='Password'/>
                <input type= 'confirm password' placeholder='Confirm Password'/>
                <select name="user_type" className="box">
                <option value="user">user</option>
                <option value="admin">admin</option>
                </select>
                <button>SignUp</button>
                <p>already have an account?<a href='#' onClick={() => setIsLogin(true)}> Login</a></p>
                </div>
            </>}
        </div>
    </div>
    </>
);
};
export default AF;