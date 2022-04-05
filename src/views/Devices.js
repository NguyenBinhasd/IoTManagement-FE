import React, {useContext} from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import NavBarMenu from '../components/layouts/NavBarMenu';
import { RoomContext } from '../contexts/RoomContext';
import RoomInfo from '../components/layouts/RoomInfo';
import AddDeviceForm from '../components/layouts/AddDeviceForm';

const Devices = () => {

    const {roomState: {rooms}
    } = useContext(RoomContext);

    const {roomId} = useParams();

    const room = rooms.find(room => room._id.toString() === roomId);

    const { authState : {isAuthenticated} } = useContext(AuthContext);
    if (!isAuthenticated)
        return <Navigate to='/login' />

    return (
        <div>
            <NavBarMenu />
            <AddDeviceForm room={room} />
            <div className='device-container'>
                {room && <RoomInfo room={room} /> }
            </div>
        </div>
    )
}

export default Devices