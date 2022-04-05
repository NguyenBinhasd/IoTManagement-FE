import React from 'react';
import '../../assets/css/Form.css';

const RoomInfo = ({room}) => {



    return (
        <div className='container'>
            <h1 className='text-gradient mt-5'>{room.name}</h1>
                <table className='table'>
                    <thead className='thead-dark'>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {room.devices.map((device, index) => (
                        <tr key={index}>
                            <td>{index}</td>
                            <td>{device.name}</td>
                            <td>{device.type}</td>
                            <td>{device.status}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
        </div>
    )
}

export default RoomInfo