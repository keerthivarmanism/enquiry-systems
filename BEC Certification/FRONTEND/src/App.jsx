import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/login';
import SignUp from './components/signup';
import ProfilePage from './components/profile';
import Navbar from './components/nav';

// import UpcomingEvent from './pages/dashboard/upcoming';
import HomePage from './components/home';
import AboutUs from './components/about';

import Report from './components/report';
import CoursePage from './components/course';
import Enquiry from './components/enquiry';
import Appliedcourse from './components/applied';
import AdminLogin from './components/adminlogin';
import AdminPage from './components/adminpage';



// import Profile from './components/profile';

function App() {
  return (
    <Router>
      {/* <div className="App"> */}
        <Routes>
          <Route path="/" element = {<Login/>} /> 
          <Route path="/signup" element = {<SignUp/>} />
          <Route path="/profile" element = {<ProfilePage/>} />
          

          {/* <Route path="/upcoming" element = {<UpcomingEvent/>} />  */}
          
          <Route path="/Home" element = {<HomePage/>} />
          <Route path="/about" element = {<AboutUs/>} />

          <Route path="/report" element = {<Report/>} />
          <Route path="/course" element = {<CoursePage/>} />
          <Route path="/enquiry" element = {<Enquiry/>} />
        

          <Route path="/applied" element = {<Appliedcourse/>} />
          <Route path="/admin" element = {<AdminLogin/>} />
          <Route path="/adminpage" element = {<AdminPage/>} />
          
          

          

          {/* <Route path="/" element = {<Profile/>} />  */}

    

        </Routes>
      
    </Router>
  );
}

export default App;