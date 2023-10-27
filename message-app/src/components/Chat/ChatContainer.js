import React from 'react'
import Button from '../Button'
import {useRooms} from '../../context/RoomContext'
import {UserOutlined} from '@ant-design/icons'

function ChatContainer() {

  const {selectedRoom} = useRooms();

  if (!selectedRoom) return null;

  return <section className='ui-chat-container bg-blue-100 flex-1 flex flex-col'>
    <header className='bg-blue-300 p-3 flex justify-between align-start'>
        Select title
    </header>
      
      <h4>{selectedRoom?.name}</h4>
      <div>
        <span className='cursor-pointer'>
             <UserOutlined />
        </span>

        <div className='p-2 bg-white shadow-xl absolute'>
                {selectedRoom?.users?.map(user => <div className='p-1 border-b rounded'>{user}</div>)}
        </div>
      </div>

    <div className='ui-chat-container-messages flex-1'>
        </div>
        <footer className='bg-white p-3'>
            <form className='flex'>
                <input className='border rounded flex-1 py-1 px-2' />
                <Button>Send</Button>
            </form>
        </footer>
  </section>
    
  
}

export default ChatContainer