import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/login';
import SignUp from './components/signup';
// import ProfilePage from './components/profile';
import Navbar from './components/nav';
// import ProfileDashboard from './components/dashboard';
// import UpcomingEvent from './pages/dashboard/upcoming';
import HomePage from './components/home';
// import Profile from './components/profile';

function App() {
  return (
    <Router>
      {/* <div className="App"> */}
        <Routes>
          <Route path="/" element = {<Login/>} /> 
          <Route path="/signup" element = {<SignUp/>} />
          {/* <Route path="/ProfilePage" element = {<ProfilePage/>} /> */}
          {/* <Route path="/" element = {<ProfileDashboard/>} />  */}
          {/* <Route path="/upcoming" element = {<UpcomingEvent/>} />  */}
          <Route path="/nav" element = {<Navbar/>} /> 
          {/* <Route path="/home" element = {<HomePage/>} /> */}
          {/* <Route path="/" element = {<Profile/>} />  */}

    

        </Routes>
      
    </Router>
  );
}

export default App;