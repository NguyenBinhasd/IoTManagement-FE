import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

const NavBarMenu = () => {

    const {
        authState: {user: {username}},
        logoutUser
    } = useContext(AuthContext);

    const logout = () => logoutUser();

    return (
        <div className='menu-container'>
            <div className='menu-info'>
                <Link to="/dashboard"><h1 className='menu-logo'>Smart Home</h1></Link>
                <div className='menu-contact'>
                    <Link to="/dashboard"><h3 className='menu-logo'>About</h3></Link>
                    <Link to="/dashboard"><h3 className='menu-logo'>Contact</h3></Link>
                </div>
            </div>
            <div className='user-info'>
                <p className='text-name'><span>Welcome Back: </span> {username}</p>
                <div 
                    className='btn btn-logout'
                    onClick={logout}
                >
                Logout <i className="fa-solid fa-arrow-right-from-bracket"></i>
                </div>
            </div>
        </div>
    )
}

export default NavBarMenu