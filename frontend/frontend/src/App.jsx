import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home'; 
import Navbar from './components/navbar'; 



function App() {
  return (
    <>
      <BrowserRouter>
        
       <Navbar/>
     
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
