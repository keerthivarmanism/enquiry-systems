import React from 'react'
import '../assets/applied.css';


 function Appliedcourse() {
  const handleViewCoursesClick = () => {
    // Add any logic you want to execute when the "View Courses" button is clicked
    console.log('View Courses button clicked');
  };
  return (
    
    <div>

        <div className="bod_body">
        <div className="ev">
          <h2>Cources You Applied</h2>
          </div>
        <div className="event__section">
          <div className="event__card">
            <p>Foundations of British Literature</p>
            <p>January 28 - july 28</p>
            <p>7pm - 9pm</p>
            <p>Online</p>
            <p>₹699</p>
            <button>BUY NOW</button>
          </div>
          <div className="event__card">
            <p>Advanced English Grammar and Composition</p>
            <p>1 year course</p>
            <p></p>
            <p>₹497</p>
            <button>BUY NOW</button>
          </div>
          <div className="event__card">
            <p>Open Mic - Indrajeet Tiwari 2</p>
            <p>January 1 | 10PM - January 29 | 11PM</p>
            <p>Online</p>
            <p>FREE</p>
            <button>BUY NOW</button>
          </div>
          <div className="event__card">
            <p>Open Mic - Indrajeet Tiwari 2</p>
            <p>January 1 | 10PM - January 29 | 11PM</p>
            <p>Online</p>
            <p>FREE</p>
            <button>BUY NOW</button>
          </div>
          <div className="event__card">
            <p>Open Mic - Indrajeet Tiwari 2</p>
            <p>January 1 | 10PM - January 29 | 11PM</p>
            <p>Online</p>
            <p>FREE</p>
            <button>BUY NOW</button>
          </div>
          <div className="event__card">
            <p>Open Mic - Indrajeet Tiwari 2</p>
            <p>January 1 | 10PM - January 29 | 11PM</p>
            <p>Online</p>
            <p>FREE</p>
            <button>BUY NOW</button>
            
          </div>
          
        </div>
        <div className="view-courses-button-container">
          <button className="view-courses-button" onClick={handleViewCoursesClick}>
            View applied Courses
          </button></div>
        </div>
        


    </div>
  )
}
export default Appliedcourse;