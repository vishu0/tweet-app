import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import Login from './MyComponents/Login';
import Registration from './MyComponents/Registration';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
   
   <div >
    
   <Router>
    
    <Header/>
    
    <Routes>
    <Route path="/" element={<Login />} />
        <Route path="/SinUp" element={<Registration />} />
        
   </Routes>
   </Router>
   </div>
   
  );
}

export default App;
