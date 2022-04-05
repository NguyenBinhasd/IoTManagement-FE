import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { useState, useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

const LoginForm = () => {

    const {loginUser} = useContext(AuthContext);

    const navigate = useNavigate();

    const [loginForm, setLoginForm] = useState({
        username: '',
        password: ''
    });


    const {username, password} = loginForm;

    const onChangeLoginForm = e => setLoginForm({...loginForm, [e.target.name]: e.target.value});

    const login = async event => {
        event.preventDefault();

        try{
            const loginData = await loginUser(loginForm);

            if(loginData.success) {
                navigate('/dashboard');
            } else {
                alert(loginData.message);
            }
        } catch (err) {
            console.log(err);
        }

    }

    return (
        <div>
            <form onSubmit={login}>
                <div className="new_user">
                    <div className="form-group">
                        <label htmlFor="name" className="text-light">Username</label>
                        <input 
                            type="text" 
                            name='username' 
                            placeholder="Enter your username" 
                            value={username}
                            onChange = {onChangeLoginForm}
                            required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className="text-light">Password</label>
                        <input 
                            type="password" 
                            name='password'  
                            placeholder="Enter your password" 
                            value ={password}
                            onChange = {onChangeLoginForm}
                            required />
                    </div>

                    <div className="form-group">
                        <p className="text-light">Bạn chưa có tài khoản? <Link className="text-gradient" to="/register">Đăng ký</Link></p>
                    </div>

                    <div className="form-group">
                        <button type="submit" className="btn text-dark update">Login</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default LoginForm