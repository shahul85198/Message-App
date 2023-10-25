
import './App.css';

import { AuthProvider } from './context/AuthContext';
import Header from './components/Layout/Header'
import AppRouter from './components/Router';
import { RoomProvider } from './context/RoomContext';

function App() {
  return (
    <AuthProvider>
      <RoomProvider>
      <main>
        <Header />
       <AppRouter />
       
      </main>
      </RoomProvider>
    </AuthProvider>

  );
}

export default App;
