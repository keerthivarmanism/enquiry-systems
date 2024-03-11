// ReportPage.jsx

import React from 'react';
import '../assets/report.css';

const Report = () => {
  return (
    <div className="report-page">
      <h1>Enquiry Management System Report</h1>
      <div className="report-content">
        <h2>Enquiry Statistics</h2>
        <div className="statistics">
          <div className="statistic">
            <h3>Total Enquiries</h3>
            <p>100</p>
          </div>
          <div className="statistic">
            <h3>Open Enquiries</h3>
            <p>20</p>
          </div>
          <div className="statistic">
            <h3>Closed Enquiries</h3>
            <p>80</p>
          </div>
        </div>
        
        <h2>Top Enquiry Sources</h2>
        <ul className="enquiry-sources">
          <li>Website Contact Form - 50 enquiries</li>
          <li>Email - 30 enquiries</li>
          <li>Phone Call - 20 enquiries</li>
        </ul>

        <h2>Enquiry Trends</h2>
        <div className="trends-chart">
          
        </div>
      </div>
    </div>
  );
};

export default Report;
