import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Header from './Components/Header'
import Main from './Components/Main'
import Footer from './Components/Footer';
import Card from './Components/Card'

function App() {
  return (
   <>
    <Router>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/Card' element={<Card />} />
        </Routes>
        
        {/* <div>
          <Link to='/'>Main</Link>
          <Link to='/Card'>Product</Link>
        </div> */}
      </Router>
   </>
  );
}

export default App;
