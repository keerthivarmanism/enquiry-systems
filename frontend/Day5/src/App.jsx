import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/login';
import SignUp from './components/signup';
// import ProfilePage from './components/profile';
import Navbar from './components/nav';
// import ProfileDashboard from './components/dashboard';
// import UpcomingEvent from './pages/dashboard/upcoming';
import HomePage from './components/home';
import AboutUs from './components/about';
import Contact from './components/contact';
import Report from './components/report';
import CoursePage from './components/course';


// import Profile from './components/profile';

function App() {
  return (
    <Router>
      {/* <div className="App"> */}
        <Routes>
          <Route path="/" element = {<Login/>} /> 
          <Route path="/Singup" element = {<SignUp/>} />
          {/* <Route path="/ProfilePage" element = {<ProfilePage/>} /> */}
          {/* <Route path="/" element = {<ProfileDashboard/>} />  */}
          {/* <Route path="/upcoming" element = {<UpcomingEvent/>} />  */}
          
          <Route path="/Home" element = {<HomePage/>} />
          <Route path="/about" element = {<AboutUs/>} />
          <Route path="/contact" element = {<Contact/>} />
          <Route path="/report" element = {<Report/>} />
          <Route path="/course" element = {<CoursePage/>} />
          

          

          {/* <Route path="/" element = {<Profile/>} />  */}

    

        </Routes>
      
    </Router>
  );
}

export default App;