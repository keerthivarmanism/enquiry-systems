
import React from 'react';
import '../assets/home.css';
import Navbar from './nav';
import Type from './card';
import Slide from './slide';



const HomePage = () => {
  return (
    <div><Navbar />
    <Slide/>
    <div className="home-page-container">
      
      <header className='ho'>
        <div className=''>
        {/* <h1>Welcome to British English Certification</h1> */}
        <p>A platform to manage all your inquiries efficiently</p>
        </div>
      </header>
    

      <main>
        <section>
          <h2>How it Works</h2>
          <p>Our Enquiry System simplifies the process of handling inquiries. Just follow these simple steps:</p>
          <ol>
            <li>Create an account: Sign up for an account to access our system.</li>
            <li>Submit your inquiry: Fill out our inquiry form with details about your request.</li>
            <li>Our team will handle it promptly: Our dedicated team will review and respond to your inquiry.</li>
            <li>Receive updates on your inquiry status: Stay informed with real-time updates on the progress of your inquiry.</li>
          </ol>
        </section>
        <section>
          <h2>Why Choose Us</h2>
          <p>We are dedicated to providing:</p>
          <ul>
            <li>Quick response times: Our team strives to respond to inquiries promptly to ensure customer satisfaction.</li>
            <li>Efficient inquiry management: We utilize advanced systems to streamline the inquiry management process.</li>
            <li>Excellent customer service: Our knowledgeable and friendly team is committed to providing exceptional customer service.</li>
            <li>User-friendly interface: Our platform features an intuitive interface designed for ease of use.</li>
          </ul>
        </section>
      </main>
    <Type/>
  
   
   
      <footer>

        <p>Contact us for more information: info@enquirysystem.com</p>

      </footer>
    </div>
    
    

    
    </div>
    


  );
}

export default HomePage;




