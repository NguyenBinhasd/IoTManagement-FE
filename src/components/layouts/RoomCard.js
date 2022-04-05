import React, { useContext } from 'react';
import '../../assets/css/Card.css';
import { RoomContext } from '../../contexts/RoomContext';
import {Link} from 'react-router-dom';

const RoomCard = (props) => {

    const {deleteRoom} = useContext(RoomContext);

    return (
            <div className='card-content'>
                <h1>Room: {props.room.name}</h1>
                <h2>Devices: {props.room.devices.length}</h2>
                <div className="btn-container">
                    <div 
                        className='btn btn-add' 
                        title='Delete room'
                        onClick={deleteRoom.bind(this, props.room._id)}
                    >
                        <i className="fa-solid fa-trash"></i>
                    </div>
                    <Link to={`/dashboard/${props.room._id}`}>
                        <div 
                            className='btn btn-remove' 
                            title='Add devices'
                        >
                            <i className="fa-solid fa-circle-plus"></i>
                        </div>
                    </Link>
                </div>
            </div>
    )
}

export default RoomCard