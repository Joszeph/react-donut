import{BrowserRouter as Router, Routes, Route} from "react-router-dom"

import Start from './pages/Start/Start'
import Menu from './pages/Menu/Menu'
import Payment from './pages/Payment/Payment'
import Preparation from './pages/Preparation/Preparation'
import Ready from './pages/Ready/Ready'

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Start />}/>
          <Route path="/menu" element={<Menu />}/>
          <Route path="/payment" element={<Payment />}/>
          <Route path="/preparation" element={<Preparation />}/>
          <Route path="/ready" element={<Ready />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
