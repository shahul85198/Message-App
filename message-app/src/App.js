
import './App.css';

import { AuthProvider } from './context/AuthContext';
import Header from './components/Layout/Header'
import AppRouter from './components/Navigation/Router';
import { RoomProvider } from './context/RoomContext';

function App() {
  return (
    <AuthProvider>
      <RoomProvider>
      <main className='ui-page'>

        <Header />
        
        <section className='ui-page-container'>
       <AppRouter />
       </section>
       
      </main>
      </RoomProvider>
    </AuthProvider>

  );
}

export default App;
