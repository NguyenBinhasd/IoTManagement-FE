import { createContext, useReducer } from "react";
import {roomReducer} from '../reducers/roomReducer';
import { apiUrl, LOCAL_STORAGE_TOKEN_NAME } from "./constants";
import setAuthToken from '../utils/setAuthToken';
import axios from "axios";

export const RoomContext = createContext();

const RoomContextProvider = ({children}) => {

    const [roomState, dispatch] = useReducer(roomReducer, {
        room: null,
        rooms: [],
        roomsLoading: true
    });

    //get room
    const getRooms = async () => {
        if(localStorage[LOCAL_STORAGE_TOKEN_NAME]) {
            setAuthToken(localStorage[LOCAL_STORAGE_TOKEN_NAME]);
        }
        try{
            const response = await axios.get(`${apiUrl}/room`);
            if(response.data.success) {
                dispatch({
                    type: 'ROOM_LOADED_SUCCESS',
                    payload: response.data.room  
                });
            }
        } catch(err) {
            dispatch(({
                type: 'ROOM_LOADED_FAIL'
            }));
        }
    }

    // add room
    const addRoom = async newRoom => {
        try{
            const response = await axios.post(`${apiUrl}/room`, newRoom);
            if(response.data.success) {
                dispatch({
                    type: 'ADD_ROOM',
                    payload: response.data.room
                });
                return response.data
            }
        } catch (err) {
            return err.response.data ? err.response.data : {success:false, message: 'Server error'}
        }
    }

    const deleteRoom = async roomId => {
        try {
            const response = await axios.delete(`${apiUrl}/room/${roomId}`);
            if(response.data.success) {
                dispatch({
                    type: 'DELETE_ROOM',
                    payload: roomId
                })
            }
        } catch (err) {
            console.log(err);
        }
    }


    //add device
    const addDevice = async (updateRoom, roomId) => {
        try {
            const response = await axios.put(`${apiUrl}/room/${roomId}`, updateRoom);
            if(response.data.success){
                dispatch({
                    type: 'ADD_DEVICE',
                    payload: response.data.device
                });
                return response.data
            }
        } catch (err) {
            return err.response.data ? err.response.data : {success:false, message: 'Server error'}
        }
    }

    //roomContextData
    const roomContextData = {roomState, getRooms, addRoom, deleteRoom, addDevice}

    return (
        <RoomContext.Provider value={roomContextData}>
            {children}
        </RoomContext.Provider>
    )
}

export default RoomContextProvider
