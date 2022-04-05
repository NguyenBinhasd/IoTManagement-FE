import './assets/css/Form.css';
import React, {useEffect, useContext} from 'react';
import { Outlet, useNavigate, Navigate } from 'react-router-dom';
import { AuthContext } from './contexts/AuthContext';
import Spinner from 'react-bootstrap/esm/Spinner';

function App() {

    const navigate = useNavigate();
    useEffect(() => {
        navigate("login", { replace: true });
    },[]);

    const {authState: {authLoading, isAuthenticated}} = useContext(AuthContext);

    let body

    if(authLoading)
        body = (
            <div className='d-flex justify-content-center mt-2'>
                <Spinner animation='border' variant='info' />
            </div>
        )
    else if (isAuthenticated)
        return <Navigate to='/dashboard' />
    else
        body = (
            <div>
                <div className="form-title text-center">
                    <h2 className="text-dark">Smart Home</h2>
                    <span className="text-light">Welcome to SmartHome App</span>
                </div>
                <Outlet />
            </div>
        )

    return (
        <div>
            {body}
        </div>
    );
}

export default App;
