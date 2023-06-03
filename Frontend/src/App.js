import './App.css';
import Home from './components/Home'
import Critters from './components/Critters'
import { Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <nav>
        <ul id="navigation">
          <li className='left edge-left'>
            <Link to="/">Home</Link>
          </li>
          <li className='left'>
            <Link to="/critters">Critters</Link>
          </li>
          <li className='right edge-right'>
            <a target='blank' href='https://github.com/T0MIS0N/animal-crossing-collector-guide'>Github</a>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/critters" element={<Critters />} />
      </Routes>
    </div>
  );

}

export default App;
