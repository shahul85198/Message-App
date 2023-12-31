import React from 'react';
import { useRooms } from '../../context/RoomContext';
import ChatView from './ChatView';
import RoomList from './RoomList';
import { useAuth } from '../../context/AuthContext';



var  ChatRoom = () => {

    const {rooms = [], selectedRoom, onRoomClick} = useRooms();
    const {user = {}} = useAuth();
    const {loading} = useRooms();
    console.log(":: CHAT ROOM ::", {rooms, selectedRoom})

    const roomsWithUser = rooms.map(room => {
        console.log("checking for owner", room.owner, user.uid, room.owner === user.uid)
        return {
            ...room,
            isOwner: room.owner === user.uid,
            isJoined: (room.users || []).includes(user.uid)
        }
    })

    var HandleLoading = () => <p className='text-2xl flex justify-center mt-56'>Loding...</p>


    return <div className='flex h-screen'>
        <aside className='flex-2 w-64 bg-white border-r-2 border-slate-900 ui-chat-rooms'>
           {loading ? <HandleLoading /> : <ul classNaame>
            {roomsWithUser.map(room => <RoomList
                key={room.id}
                room={room}
                onClick={onRoomClick}
                isSelected={room.id === selectedRoom?.id}
                />)}
                </ul>}

                </aside>
                <ChatView />
                </div>
         
           
}

export default ChatRoom



