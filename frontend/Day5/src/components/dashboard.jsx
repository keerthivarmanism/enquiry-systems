import React from 'react';
import '../assets/dash.css';
import { Link } from 'react-router-dom';

const ProfileDashboard = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <h2>Profile Dashboard</h2>
          <div className="tab-container">
            <ul className="nav nav-tabs nav-tabs-left nav-centered" role="tablist">
              <li role="presentation" className="active">
                <a href="#profile" data-toggle="tab" role="tab">
                  Profile
                </a>
              </li>
              <li role="presentation">
                <a>
                  <Link to="/upcoming">Upcoming Events</Link>
                </a>
              </li>
              <li role="presentation">
                
                  Resources
              </li>
              <li role="presentation">
                <a href="#volu" data-toggle="tab" role="tab">
                  Volunteer
                </a>
              </li>
            </ul>
            <div id="my_side_tabs" className="tab-content side-tabs side-tabs-left">
              <div className="tab-pane fade in active" id="profile" role="tabpanel">
                <div className="col-sm-6" id="pro">
                  <h3>Profile</h3>
                  <table style={{ width: "500px" }}>
                    <tr>
                      <td>Name</td>
                      <td>Joshua Alastair</td>
                    </tr>
                    <tr>
                      <td>Age</td>
                      <td>25</td>
                    </tr>
                    <tr>
                      <td>Disease</td>
                      <td>Diabetes</td>
                    </tr>
                    <tr>
                      <td>Email</td>
                      <td>alaistarj@gmail.com</td>
                    </tr>
                  </table>
                </div>
              </div>
              <div className="tab-pane fade" id="upcoming" role="tabpanel">
                <div className="col-sm-6">
                  <iframe src="https://calendar.google.com/calendar/embed?src=iapg.dakshamahealth%40gmail.com&ctz=America/New_York" style={{ border: "0" }} width="800" height="600" frameBorder="0" scrolling="no"></iframe>
                </div>
              </div>
              <div className="tab-pane fade" id="reso" role="tabpanel">
                <h3>Resources</h3>
                <ul>
                  <li><a href="https://www.niddk.nih.gov/health-information/health-communication-programs/ndep/am-i-at-risk/Pages/index.aspx">Are you at risk?</a></li>
                  <li><a href="https://www.niddk.nih.gov/health-information/health-communication-programs/ndep/living-with-diabetes/Pages/index.aspx">Living with diabetes.</a></li>
                  <li><a href="https://www.niddk.nih.gov/health-information/diabetes">Diabetes Health Topics.</a></li>
                </ul>
              </div>
              <div className="tab-pane fade" id="volu" role="tabpanel">
                <h3>No forms available yet.</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileDashboard;


