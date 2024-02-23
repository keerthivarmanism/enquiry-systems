import React, { useState, useEffect } from 'react';
import '../assets/report.css';

const Report = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    // Simulate fetching reports from an API
    fetchReports();
  }, []);

  const fetchReports = async () => {
    // Simulated API call to fetch reports
    const response = await fetch('https://api.example.com/reports');
    const data = await response.json();
    setReports(data);
  };

  return (
    <div className="report-page">
      <header>
        <h1>Reports</h1>
        <p>View and analyze the latest reports here</p>
      </header>
      <div className="report-list">
        {reports.map((report, index) => (
          <div className="report-item" key={index}>
            <h2>{report.title}</h2>
            <p>{report.description}</p>
            <p>Submitted by: {report.submitter}</p>
            <p>Date: {new Date(report.date).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Report;
