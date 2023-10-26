import React, { createContext, useContext, useEffect, useState } from 'react'
import { firebaseDB } from '../services/firebase';
import { addDoc, collection, getDocs, updateDoc, doc } from 'firebase/firestore';
import { useAuth } from './AuthContext';

export const RoomContext = createContext({});

export function RoomProvider({children}) {

    const [rooms, setRooms] = useState([]);
    const [selectedRoom, setSelectedRoom] = useState(null);
    const [loading, setLoading] = useState(true)
    const {user} = useAuth();

    useEffect(() => {
        getRoomList();
    }, [])


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
            setLoading(false)
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


    const joinRoom = async (room) => {
        console.log(room, user)
        try {
            await updateDoc(
                doc(firebaseDB, 'rooms', room.id),
                {
                    users: [...room.users, user.uid]
                }
            )
        
        getRoomList();
    } catch (error) {
        console.log(":: updateDoc ERROR ::", error);
    }
}

    return <RoomContext.Provider value={{
        rooms, 
        selectedRoom,
        onRoomClick: setSelectedRoom,
        addNewRoom,
        joinRoom,
        loading
        }}>

          {children}
    </RoomContext.Provider>
}

export const useRooms = () => useContext(RoomContext);


