// EnquiryPage.js
import React, { useState } from 'react';
import '../assets/enquiry.css';
import axios from 'axios';
const Enquiry= () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [course, setCoursename] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit =async (e) => {
    e.preventDefault();
    try{
      const response =await axios.post(
        "http://localhost:8080/enquiry",{
          name,
          email,
          course,
          message,
        },
      );
      console.log("Details added Successfully");
      console.log(response.data);
      window.alert("Successfully added");
    }
    catch(error){
      console.log("Failed");
      console.log(error);
    }
  }

  return (
    <div className='dod1'>
     <div className="enquiry-container1">
      <div className='head1'><h1><center className='en'>Enquiry</center></h1>
      <form className="enquiry-form1">
        <div className="form-group1">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group1">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group1">
          <label htmlFor="course">Course Name:</label>
          <input
            type="course"
            id="course"
            value={course}
            onChange={(e) => setCoursename(e.target.value)}
          />
        </div>
        <div className="form-group1">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleSubmit}>Submit</button>
      </form>
      {/* <div className="button-container1">
        <button className="enquire-now-button" onClick={handleEnquireNowClick}>
          Enquire Now
        </button> */}
        
      </div>
    </div>
    </div>
    // </div>
  );
};

export default Enquiry;
