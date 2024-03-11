
// import  { useState, useEffect } from 'react';
// import axios from 'axios';
// import '../assets/course.css';

// const Cources = () => {
//   const [servicesData, setServicesData] = useState([]);

//   useEffect(() => {
//     fetchData();
//   }, []); // Fetch data when the component mounts

//   const fetchData = async () => {
//     try {
//       const token = localStorage.getItem('token');
  
//       if (!token) {
//         console.error('Token not found. Please log in again.');
//         // Handle the absence of token, e.g., redirect to the login page
//         return;
//       }
  
//       const response = await axios.get('http://localhost:8080/add', {
//         headers: {
//           Authorization: `Bearer ${token}`,  // Wrap in backticks
//         },
//       });
  
//       console.log('Fetched data:', response.data);
  
//       // Update the state with the fetched data
//       setServicesData(response.data);
//     } catch (error) {
//       console.error('Fetching data failed:', error);
//       // Handle the error, e.g., show an error message
//     }
//   };
  
//   return (
//     <div className='adminback'>
//       <div className='viewback'>
//         <div className="views">
//           <section id="view">
//             <center>
//               <h2 className='h2ad'>View Courses</h2>
//             </center>
//             <table className='admintable'>
//               <thead>
//                 <tr>
//                   <th>Coursename</th>
//                   <th>Duration</th>
//                   <th>Timings</th>
//                   <th>Mode</th>
//                   <th>Fee</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {servicesData.map((service, index) => (
//                   <tr key={index}>
//                     <td>{service.coursename}</td>
//                     <td>{service.duration}</td>
//                     <td>{service.timings}</td>
//                     <td>{service.mode}</td>
//                     <td>{service.fee}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </section>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cources;


import React from 'react';
import "../assets/course.css";
import Navbar from './nav';

function HeroSection() {
  return (
    <section className="hero-section">
      <div className='high'>
        <Navbar/>
      
      <div className="card-grid">
        <a className="card" href="#">
          <div className="card__background" style={{backgroundImage: "url(https://images.unsplash.com/photo-1557177324-56c542165309?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)"}}></div>
          <div className="card__content">
            <p className="card__category">Beginner</p>
            <h3 className="card__heading">Choose a Course</h3>
          </div>
        </a>
        <a className="card" href="#">
          <div className="card__background" style={{backgroundImage: "url(https://images.unsplash.com/photo-1557187666-4fd70cf76254?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60)"}}></div>
          <div className="card__content">
            <p className="card__category"> Intermediate </p>
            <h3 className="card__heading">Review Basics</h3>
          </div>
        </a>
        <a className="card" href="#">
          <div className="card__background" style={{backgroundImage: "url(https://images.unsplash.com/photo-1556680262-9990363a3e6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60)"}}></div>
          <div className="card__content">
            <p className="card__category">Advanced </p>
            <h3 className="card__heading">Stay Updated</h3>
          </div>
        </a>
        <a className="card" href="#">
          <div className="card__background" style={{backgroundImage: "url(https://images.unsplash.com/photo-1557004396-66e4174d7bf6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60)"}}></div>
          <div className="card__content">
            <p className="card__category">Course Details</p>
            <h3 className="card__heading">specific type</h3>
          </div>
        </a>
      </div>
      </div>
    </section>
  );
}

export default HeroSection;

  