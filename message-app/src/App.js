
import './App.css';
import Layout from './components/Layout'
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';

function App() {
  return (

    <Layout>
      Chat App
       <Signup />
    
       <hr />   

       <Login />
    </Layout>

  );
}

export default App;
