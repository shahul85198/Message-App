import React, {useCallback, useState} from 'react'
import { signInWithEmailAndPassword, getAuth} from 'firebase/auth'
import firebaseApp from '../../services/firebase'
import {useHistory} from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [error, setError] = useState('');
  const history = useHistory();

  const handleLogin = useCallback(
    async (e) => {
      e.preventDefault();

      if (email && password) { 
      try{
        await signInWithEmailAndPassword(getAuth(firebaseApp), email, password);
        history.push('/chat-room');
      } catch (error) {
        console.log('SIGNIN ERROR', error.messaage);
        setError('Invalid email or password')
      }
    }
    else {
      setError('Please enter email & password')
    }
  },
   [email, password]
  );

  return (
    <div className='min-h-screen flex items-center justify-center bg-red-100'>
      <form onSubmit={handleLogin} className='w-96 flex flex-col gap-8'>
      <h1 className='text-slate-900 text-3xl'>Login</h1>
      <input 
      onChange={e => setEmail(e.target.value)} 
      value={email} 
      type="email" 
      className='w-full p-2 pl-4 border-b-2 border-slate-900 focus:outline-none'
      placeholder='Please provide email' />

      <input 
      onChange={e => setpassword(e.target.value)} 
      value={password} 
      type='password' 
      className='w-full p-2 pl-4 border-b-2 border-slate-900 focus:outline-none'
      placeholder='Please enter password' />
 
      {error && <p className='bg-red-500 text-white rounded'>{error}</p>}

      <button className='w-full p-2 bg-blue-600 text-white hover:bg-blue-800 mt-4 transition'>Login</button>
      </form>
    </div>
  )
}

export default Login


