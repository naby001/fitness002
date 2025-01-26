import { BrowserRouter, Routes, Route,Navigate } from 'react-router-dom';
import { useAuthContext } from './Hooks/useAuthContext';
import Home from './pages/Home'; 
import './App.css';
import Navbar from './components/Navbar'; 
import Login from './pages/login';
import Signup from './pages/Signup';




function App() {
  const {user}=useAuthContext();
  return (
    <>
      <BrowserRouter>
        
       <Navbar/>
   
        <div className="pages">
          <Routes> 
            <Route path="/" element={user?< Home />:<Navigate to ="/login"/>} />
            <Route path="/login" element={!user? <Login /> :<Navigate to ="/"/>} />
            <Route path="/signup" element={!user?<Signup />:<Navigate to ="/"/>} />
            
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
