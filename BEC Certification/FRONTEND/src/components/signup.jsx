// import React from 'react';
// import '../assets/sign.css'; // Import CSS file for styling

// function SignUp() {
//     const handleRegister = async (e) => {
//         e.preventDefault();
//         if (validateInputs()) {
//           try {
//             const response = await Axios.post('http://localhost:8080/auth/new', {
//               name,
//               email,
//               password,
//               roles: 'USER',
//             });
//             console.log(response.data);
//             // login();  
//           } catch (error) {
//             console.error('Error registering user:', error);
//           }
//         }
//       };
//     return (
//         <div className="container">
//             <header>
//                 <h1>Create an Account</h1>
//                 <p>Please fill in this form to create an account.</p>
//             </header>
//             <main>
//                 <form className="signup-form" onSubmit={handleRegister}>
//                     <div className="form-group">
//                         <label htmlFor="username">Username:</label>
//                         <input type="text" id="username" name="username" />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="email">Email:</label>
//                         <input type="email" id="email" name="email" />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="password">Password:</label>
//                         <input type="password" id="password" name="password" />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="confirm-password">Confirm Password:</label>
//                         <input type="password" id="confirm-password" name="confirm-password" />
//                     </div>
//                     <button type="submit">Sign Up</button>
//                 </form>
//             </main>
//         </div>
//     );
// }

// export default SignUp;

import Axios from 'axios';
import { useState } from 'react';
import '../assets/sign.css';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError('Invalid email format');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    try {
      const response = await Axios.post('http://localhost:8080/auth/new', {
        name,
        email,
        password,
        roles: 'USER',
      });
      console.log(response.data);
      console.log('Signup successful');
      navigate('/'); // Redirect to login page after successful signup
    } catch (error) {
      console.error('Error registering user:', error);
      setError('Error signing up');
    }
  };
  const navigateToLogin = () => {
    window.location.href = '/';
  };

  return (
    <div className="div3">
      {/* <img src="https://res.cloudinary.com/dv3xtovhk/image/upload/v1708443233/chess_hfdqjt.gif" className="len"/> */}
      <div className="login-box1">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="user-box1">
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <label>Name</label>
          </div>
          <div className="user-box1">
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label>Email</label>
          </div>
          <div className="user-box1">
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label>Password</label>
          </div>
          <div className="user-box1">
            <input
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <label>Confirm Password</label>
          </div>
          <button type="submit">Sign Up</button><br></br><br></br>
          <div style={{ textAlign: 'center' }}>
           Already have an account?{' '}
            <a href="#" className="jet" onClick={navigateToLogin}>
              Login
            </a>
          </div>
          {error && <p className="error">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Signup;