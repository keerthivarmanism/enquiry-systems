import React, { useState } from 'react';
import '../assets/adminlogin.css';
import { Link } from 'react-router-dom';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const handleLogin = (e) => {
    e.preventDefault();
    // Perform login logic here
    console.log('Logging in with:', username, password);
  }

  return (
    <div className="login-container">
      <form onSubmit={handleLogin} className="login-form">
        <h2>Admin Login</h2>
        <div className="input-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
       <Link to='/adminpage' ><button type="submit">Login</button></Link> 
        {/* <Link to='/hu'>
         <button type="button" className="submit-btn" onClick={handleLogin}> Login</button>
         </Link> */}
        
      </form>
    </div>
  );
}

export default AdminLogin;
