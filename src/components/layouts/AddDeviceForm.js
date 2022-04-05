import React, { useContext, useState } from 'react';
import { RoomContext } from '../../contexts/RoomContext';
import {Link} from 'react-router-dom'
import '../../assets/css/Form.css'


const AddDeviceForm = ({room}) => {


    const {
        addDevice,
    } = useContext(RoomContext);


    const [device, setDevice] = useState({
        deviceName: '',
        type: '',
        status: ''
    });

    const {deviceName, type, status} = device;

    const onChangeNewDevice = event => setDevice({...device, [event.target.name]: event.target.value})

    const addNewDevice = async (event) => {
        event.preventDefault();
        const {success, message} = await addDevice(device, room._id);
        if(success) {
            alert(message);
        } else {
            alert(message);
        }
    }


    return (
        <div className='container'>
            <div className="box-nav d-flex justify-between mt-5">
                <div className="filter">
                    <Link to='/dashboard'><i className="fas fa-angle-double-left"></i>Room</Link>
                </div>
            </div>

            <form onSubmit={addNewDevice} className='add-device'>
                <div className='form-control'>
                    <label className='text-gradient' htmlFor='device-name'>Device Name</label><br />
                    <input 
                        type="text" 
                        id='device-name' 
                        name='deviceName' 
                        value={deviceName}
                        onChange = {onChangeNewDevice}
                    />
                </div>
                <div className='form-control'>
                    <label className='text-gradient label-select' htmlFor='type'>Type</label><br />
                    <select 
                        name='type'
                        value={type}
                        onChange = {onChangeNewDevice}
                        id='type'
                    >
                        <option>--Please choose your device type--</option>
                        <option value='Television'>Television</option>
                        <option value='Light'>Light</option>
                        <option value='Speaker'>Speaker</option>
                        <option value='Camera'>Camera</option>
                    </select>
                </div>
                <div className='form-control'>
                    <label className='text-gradient label-select' htmlFor='status'>Status</label><br />
                    <select 
                        name='status'
                        value={status}
                        onChange = {onChangeNewDevice}
                        id='status'
                    >
                        <option>--device status--</option>
                        <option value='On'>On</option>
                        <option value='Off'>Off</option>
                    </select>
                </div>
                <div className='form-group'>
                    <button className='btn' type='submit'>Add Device</button>
                </div>
            </form>
        </div>
    )
    }

export default AddDeviceForm