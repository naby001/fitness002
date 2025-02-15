import { BrowserRouter, Routes, Route,Navigate } from 'react-router-dom';
import { useAuthContext } from './Hooks/useAuthContext';
import Home from './pages/Home'; 
import './App.css';
import Navbar from './components/Navbar'; 
import Login from './pages/login';
import Signup from './pages/Signup';
import Recommendation from './pages/recomendation';
import Form from './components/Form';




function App() {
  const {user}=useAuthContext();
  return (
    <div style={{ backgroundColor: '#f0f0f0', minHeight: '100%' }}>
      <BrowserRouter>
        
       <Navbar/>
   
        <div className="pages">
          <Routes> 
            <Route path="/" element={user?< Home />:<Navigate to ="/login"/>} />
            <Route path="/login" element={!user? <Login /> :<Navigate to ="/"/>} />
            <Route path="/signup" element={!user?<Signup />:<Navigate to ="/"/>} />
            <Route path="/reco" element={user?<Recommendation />:<Navigate to ="/login"/>} />
            <Route path="/form" element={user ? <Form /> : <Navigate to="/login" />} />
            
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
