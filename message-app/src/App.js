
import './App.css';
import Layout from './components/Layout'
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';

function App() {
  return (

    <Layout>
      
       <Signup />

       

       <Login />
    </Layout>

  );
}

export default App;
