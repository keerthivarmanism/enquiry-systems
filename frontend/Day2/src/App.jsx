import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/login';

function App() {
  return (
    <Router>
      {/* <div className="App"> */}
        <Routes>
          <Route path="/" element = {<Login/>} /> 
          {/* <Route path="/signup" element = {<} /> */}
        </Routes>
      {/* </div> */}
    </Router>
  );
}

export default App;