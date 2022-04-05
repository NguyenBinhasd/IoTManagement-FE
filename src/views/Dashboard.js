import React, {useContext, useEffect, useState} from 'react';
import {Navigate} from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import NavBarMenu from '../components/layouts/NavBarMenu';
import '../assets/css/Main.css';
import '../assets/css/Form.css';
import { RoomContext } from '../contexts/RoomContext';
import RoomCard from '../components/layouts/RoomCard';
import ModalBox from '../components/layouts/ModalBox';

const Dashboard = () => {

    const [modal, setModal] = useState(false);

    const {
        roomState: {rooms, roomsLoading}, 
        getRooms
    } = useContext(RoomContext);

    //Start: get room
    useEffect( () => {
        getRooms();
    }, [])

    const handleShowModal = () => {
        setModal(!modal);
    }

    let body = null

    if(roomsLoading) {
        body = (
            <></>
        )
    } else if (rooms.length === 0) {
        body = (
            <>
                <h1 className='text-center text-dark mt-5'>You dont have any Room</h1>
            </>
        )
    } else {
        body = (
            <div className='card-container'>
                {rooms.map(room => (
                    <RoomCard room={room} key={room._id} />
                ))}
            </div>
        )
    }

    const { authState : {isAuthenticated} } = useContext(AuthContext);
    if (!isAuthenticated)
        return <Navigate to='/login' />
        
    return (
        <div>
            <NavBarMenu />
            {body}
            {modal && <ModalBox />}
            <div className='open-modal' onClick={handleShowModal}><i className="fa-solid fa-pen-to-square"></i></div>
        </div>
  )
}

export default Dashboard