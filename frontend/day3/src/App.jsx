// import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/login';
import Navbar from './components/nav';
import ProfileDashboard from './components/dashboard';
import UpcomingEvent from './pages/dashboard/upcoming';

function App() {
  return (
    <Router>
      {/* <div className="App"> */}
        <Routes>
          {/* <Route path="/" element = {<Login/>} />  */}
          <Route path="/" element = {<ProfileDashboard/>} /> 
          <Route path="/upcoming" element = {<UpcomingEvent/>} /> 
          {/* <Route path="/" element = {<Navbar/>} />  */}
          

         
          {/* <Route path="/signup" element = {<SignUpPage/>} /> */}
        </Routes>
      {/* </div> */}
    </Router>
  );
}

export default App;