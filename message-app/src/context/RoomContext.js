import React, { createContext, useContext, useState } from 'react'
import { firebaseDB } from '../services/firebase';
import { addDoc, collection, getDocs } from 'firebase/firestore';

export const RoomContext = createContext({});

export function RoomProvider({children}) {

    const [rooms, setRooms] = useState([]);
    const [selectedRoom, setSelectedRoom] = useState(null);


    const getRoomList = async () => {
        try {
            const roomsCollection = collection(firebaseDB, 'rooms');
            const query = await getDocs(roomsCollection);
            const roomsList = [];
            query.forEach(result  => {
                const room = {...result.data(), id: result.id}
                roomsList.push(room)
            });
            setRooms(roomsList);
        } catch (e) {
            console.log(":: GET ROOMS ERROR ::", e);
        }
    }

    const addNewRoom = async (room) => {
        try {
            const roomsCollection = collection(firebaseDB, 'rooms');
            await addDoc(roomsCollection, room)
            getRoomList();
        } catch (error) {
            console.log(":: addNewRoom ERROR ::", error)
        }
    }


    return <RoomContext.Provider value={{
        rooms, 
        selectedRoom,
        onRoomClick: setSelectedRoom,
        addNewRoom
        }}>

          {children}
    </RoomContext.Provider>
}

export const useRooms = () => useContext(RoomContext);


