import React from 'react';
import backgroundImage from '../assets/image/home.jpg'; // Import your image

const Slide = () => {
  const containerStyle = {
    position: 'relative',
    width: '100%',
    height: '100vh',
  };

  const backgroundImageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: -1,
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.5)', // Adjust the last value (0.5) for the level of transparency
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const welcomeMessageStyle = {
    fontSize: '36px',
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
    color: '#333', // Change color as needed
  };

  return (
    <div style={containerStyle}>
      <img src={backgroundImage} alt="Background" style={backgroundImageStyle} />
      <div style={overlayStyle}>
        <h1 style={welcomeMessageStyle}>Welcome to British English Certification</h1>
      </div>
    </div>
  );
}

export default Slide;
