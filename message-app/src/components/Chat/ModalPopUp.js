import PageLink from '../Navigation/PageLink'
import {Modal, Input, Button} from 'antd';
import {useAuth} from '../../contexts/AuthContext';
import { useRooms } from '../../context/RoomContext';
import { useEffect, useState } from 'react';

var ModalPopUp = () => {
    const {user = {}} = useAuth();
    const {addNewRoom} = useRooms()
    const [isModalOpen, setIsModalOpen] = useState(null);
    const [roomName, setRoomName] = useState('');
    const [error, setError] = useState(false);

    const handleonchange = (event) => {
        var {
            target: {value},
        } = event;
        setRoomName(value);
        setError(false);
    };

    const handleok = () => {
        if (roomName) {
            setError(null);
            setRoomName('');
            setIsModalOpen(false);

            const newRoom = {
                users: [],
                name: roomName,
                owner: user.uid
            };
            addNewRoom(newRoom);
        } else {
            setError(true)
        }
    }

    const handlecancel = () => {
        setIsModalOpen(false);
    };

    const showmodal = () => {
        setIsModalOpen(true)
    }

    useEffect(() => {
        setError(null);
        setRoomName('');
    }, [isModalOpen]);

    return (
        <>
         <PageLink to='/chat-room' onClick={showmodal} >
            createChatRoom
         </PageLink>

         <Modal
            open={isModalOpen}
            footer={null}
            onCancel={handlecancel}
            className='w-80'
            >

            <h1 className='text-center text-2xl text-blue-500'>Create Room</h1>

            {error ? (
                <p className='text-red-600 text-center mt-6 text-xl mb-2'>
                    Please Provide Room Name
                </p>
            ) : (
                <p className='text-blue-500 mt-8 text-xl ml-11'>
                    Enter Your Room Name Here
                </p>
            )}

            <Input 
              placeholder='Room Name'
              className='w-96 ml-11 mt-4 pl-4'
              onChange={handleonchange}
              value={roomName}
              allowClear
            />

            <section className='mt-12 flex justify-center gap-6'>
                <Button className='w-24' onClick={handlecancel}>
                    Cancle
                </Button>
                <Button 
                  type='primary'
                  htmlType='submit'
                  className='bg-blue-500 w-24'
                  onClick={handleok}
                    >
                    Ok
                </Button>

            </section>

         </Modal>
        </>
    )
}

export default ModalPopUp