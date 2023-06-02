import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import Critters from './components/Critters'
import { Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <nav>
        <ul id="navigation">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/critters">Critters</Link>
          </li>
          <li>
            <a target='blank' href='https://github.com/T0MIS0N/animal-crossing-collector-guide'>Github</a>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route exact path="" element={<Home />} />
        <Route exact path="critters" element={<Critters />} />
      </Routes>
    </div>
  );

}

export default App;
