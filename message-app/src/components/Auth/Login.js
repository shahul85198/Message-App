import React, {useCallback, useState} from 'react'
import { signInWithEmailAndPassword, getAuth} from 'firebase/auth'
//import firebaseApp from '../..services/firebase'

function Login() {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("") 

  const handleLogin = useCallback((e) => {
      e.preventDefault();
      if(email && password) {

        (async () => {
            await  signInWithEmailAndPassword(
              getAuth(firebaseApp),
              email,
              password
              
            )
        })();   
      }
  }, [email, password])

  return (
    <div>
      <form onSubmit={handleLogin}>
      <input 
      onChange={e => setEmail(e.target.value)} 
      value={email} type="email" 
      placeholder='Please provide email' />

      <input 
      onChange={e => setpassword(e.target.value)} 
      value={password} type='password' 
      placeholder='Please enter password' />

      <button>Login</button>
      </form>
    </div>
  )
}

export default Login


