import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LoginForm from './components/auth/LoginForm';
import RegisterForm from './components/auth/RegisterForm';
import AuthContextProvider from './contexts/AuthContext';
import Dashboard from './views/Dashboard';
import RoomContextProvider from './contexts/RoomContext';
import Devices from './views/Devices';

ReactDOM.render(
    <React.StrictMode>
        <AuthContextProvider>
            <RoomContextProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<App />}>
                            <Route path='login' element={<LoginForm />}/>
                            <Route path='register' element={<RegisterForm />}/>
                        </Route>

                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/dashboard/:roomId" element={<Devices />} />
                    </Routes>
                </BrowserRouter>
            </RoomContextProvider>
        </AuthContextProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
