
import './App.css';

import { AuthProvider } from './context/AuthContext';
import Header from './components/Layout/Header'
import AppRouter from './components/Router';

function App() {
  return (
    <AuthProvider>
      <main>
        <Header />
       <AppRouter />
       
      </main>
    </AuthProvider>

  );
}

export default App;
