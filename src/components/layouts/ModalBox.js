import React, { useContext, useState } from 'react';
import '../../assets/css/Main.css';
import { RoomContext } from '../../contexts/RoomContext';

const ModalBox = () => {

    const handleCloseModal = () => {
        setNewRoom({
            roomName: ''
        });
        const close = document.querySelector('.modal');
        close.classList.add('close')
    }

    const {addRoom} = useContext(RoomContext);

    const [newRoom, setNewRoom] = useState({
        roomName: '',
    });

    const {roomName} = newRoom;

    const onChangeNewRoomForm = event => setNewRoom({...newRoom, [event.target.name]: event.target.value});

    const addNewRoom = async event => {
        event.preventDefault();
        const {success, message} = await addRoom(newRoom);
        if(success) {
            alert(message);
        } else {
            alert(message);
        }
        handleCloseModal();
        setNewRoom({
            roomName: ''
        })
    }

    return (
        <div className='modal'>
            <div className="modal-content">
                <span onClick={handleCloseModal} className="close"><i className="fa-solid fa-circle-xmark"></i></span>
                <div className='modal-form'>
                    <form onSubmit={addNewRoom}>
                        <div className='form-group'>
                            <label htmlFor='room-name'>Add Room:</label><br />
                            <input 
                                name='roomName' 
                                className='room-name' 
                                id="room-name" 
                                placeholder='Enter your room name here' 
                                value={roomName}
                                onChange={onChangeNewRoomForm}
                            />
                        </div>
                        <button className='btn-add-room' type='submit'>Add</button>
                        <span className='btn-cancel' onClick={handleCloseModal}>Cancel</span>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ModalBox