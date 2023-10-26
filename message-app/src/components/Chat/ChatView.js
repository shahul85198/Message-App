import React from 'react'
import { useRooms } from '../../context/RoomContext';
import RoomInvitation from './RoomInvitation';
import NoRoomSelected from './NoRoomSelected';

function ChatView() {
      const {selectedRoom, joinRoom} = useRooms();
      const {isOwner, isJoined} = selectedRoom || {};
       
      if(isOwner || isJoined) {
        return "Display Message";
      }

  return (
    <section className='flex-1 p-4'>
        {selectedRoom ? <RoomInvitation room={selectedRoom} onClick={() => joinRoom(selectedRoom)} /> : <NoRoomSelected />}
    </section>
  )
}

export default React.memo(ChatView);