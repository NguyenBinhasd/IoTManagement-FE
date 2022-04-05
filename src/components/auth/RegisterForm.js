import React, { useContext, useState } from 'react';
import {Link} from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';   

const RegisterForm = () => {

    const {registerUser} = useContext(AuthContext);

    const [registerForm, setRegisterForm] = useState({
        username: '',
        password: '',
        confirmPassword: ''
    });


    const {username, password, confirmPassword} = registerForm;

    const onChangeRegisterForm = e => setRegisterForm({...registerForm, [e.target.name]: e.target.value});

    const register = async event => {
        event.preventDefault();

        if(password !== confirmPassword){
            alert('Password do not match');
        }

        try{
            const registerData = await registerUser(registerForm);

            if(registerData.success) {
                alert(registerData.message);
            } else {
                alert(registerData.message);
            }
        } catch (err) {
            console.log(err);
        }

    }


    return (
        <div>
            <form onSubmit={register}>
                <div className="new_user">
                    <div className="form-group">
                        <label htmlFor="name" className="text-light">Username</label>
                        <input 
                            type="text" 
                            name="username" 
                            id="username" 
                            placeholder="Enter your username"
                            value = {username}
                            onChange = {onChangeRegisterForm}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className="text-light">Password</label>
                        <input 
                            type="password" 
                            name="password" 
                            id="pwd" 
                            placeholder="Enter your password"
                            value = {password}
                            onChange = {onChangeRegisterForm}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="passwordConfirmation" className="text-light">Password Confirmation</label>
                        <input 
                            type="password" 
                            name="confirmPassword" 
                            id="pwd2" 
                            placeholder="Password Confirmation"
                            value = {confirmPassword}
                            onChange = {onChangeRegisterForm}
                        />
                    </div>

                    <div className="form-group">
                        <p className="text-light">Bạn đã có tài khoản? <Link to="/login" className="text-gradient">Đăng nhập ngay</Link></p>
                    </div>

                    <div className="form-group">
                        <button type="submit" className="btn text-dark update">Sign Up</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default RegisterForm