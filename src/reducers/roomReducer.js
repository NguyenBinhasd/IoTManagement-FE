export const roomReducer = (state, action) => {
    const {type, payload} = action;
    
    switch(type) {
        case 'ROOM_LOADED_SUCCESS':
            return {
                ...state,
                rooms: payload,
                roomsLoading: false
            }

        case 'ROOM_LOADED_FAIL':
            return {
                ...state,
                rooms: payload,
                roomsLoading: false
            }
        
        case 'ADD_ROOM':
            return {
                ...state,
                rooms: [...state.rooms, payload]
            }

        case 'DELETE_ROOM':
            return {
                ...state,
                rooms: state.rooms.filter(room => room._id !== payload)
            }


        case 'ADD_DEVICE':
            const newDevice = state.rooms.map(room => {
                if(room._id === payload._id)
                    return payload
                return room
            })
            return {
                ...state,
                rooms: newDevice
            }
        default:
            return state;
    }
}