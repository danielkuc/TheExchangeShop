import './App.css';
import { Cart, Home, NavBar, Profile } from './components';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './auth/protected-route';

function App() {  
  return (
    <div>
      <NavBar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='cart' element={<Cart />} />
          <Route path="profile" element={<ProtectedRoute component={Profile} />} />
        </Routes>
    </div>
  );
}

export default App;
