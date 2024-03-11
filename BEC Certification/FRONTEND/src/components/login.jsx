// import '../assets/logi.css';
// import  { useState } from 'react';
// import { useNavigate,Link } from 'react-router-dom';
// import axios from 'axios';
// // import Signup from '../Signup/Signup';
// const Login = () => {
//   const [credentials, setCredentials] = useState({
//     email: '',
//     password: ''
//   });
  
//   const navigate = useNavigate();


//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     // setCredentials((prevState) => ({
//     //   ...prevState,
//     //   [name]: value,
//     // }));
//     setCredentials({
//       ...credentials,
//       [name]: value,
//     });
//   };
//   const handleLogin = async (e) => {
//     e.preventDefault();
//     // login();
//     try {
//       const response = await axios.post('http://localhost:8080/auth/authenticate', {
//         username: name,
//         password: password, 
//       });
//       console.log(response.data);

//       navigate('/Home');
//     } catch (error) {
//       console.error('Error logging in:', error);
//     }
//   };
  

//     return (
//       <>
        
  
//         <div className="hero">
         
//           <div className="form-box">
//             <h1>Login</h1>
//             <form onSubmit={handleLogin}  className="input-group">
//               <input
//                 type="text"
//                 className="input-field"
//                 // id="email"
//                 name="email"
//                 placeholder="Email"
//                 value={credentials.email}
//                 onChange={handleChange}
//                 required
//               />
//               <input
//                 type="password"
//                 className="input-field"
//                 // id="password"
//                 name="password"
//                 placeholder="Password"
//                 value={credentials.password}
//                 onChange={handleChange}
//                 required
//               />
//               <button type="submit" className="submit-btn" >Login </button>
//             </form>
//             <div className="signup">
            
//               <h2>Dont have an account?</h2> 
//               <Link to="/signup" >
//                 Signup Here
//                 </Link>
//             </div>
//           </div>
//         </div>
//       </>
//     );
//   }
  
//   export default Login;

// import { useState } from 'react';
// import '../assets/Login.css';
// import axios from 'axios'; // Import Axios
// import { useNavigate } from 'react-router-dom';

// const LoginBox = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Email validation
//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailPattern.test(email)) {
//       setError('Invalid email format');
//       return;
//     }

//     try {
//       const response = await axios.post(
//         "http://localhost:8080/api/products/authenticate",
//         {
//           email: email,
//           password: password,
//         }
//       );
      
//       // Assuming the response contains data indicating successful login
//       const { success } = response.data;

//       if (success) {
//         // Successful login
//         setError('');
//         alert('Login successful!');
//         navigate('/HomePage'); // Navigate to a common page
//       } else {
//         // Login failed
//         setError('Invalid email or password');
//       }
//     } catch (error) {
//       // Handle error
//       setError('Invalid email or password');
//     }
//   };

//   const navigateToSignUp = () => {
//     window.location.href = '/SignUp';
//   };

//   return (
//     <div className="dell">
//       <img src="https://res.cloudinary.com/dv3xtovhk/image/upload/v1708443233/chess_hfdqjt.gif" className="logo"/>
//       <div className="login-box">
//         <h2>Login</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="user-box">
//             <input
//               type="email"
//               name="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//             <label>Email</label>
//           </div>
//           <div className="user-box">
//             <input
//               type="password"
//               name="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//             <label>Password</label>
//           </div>
//           <button type="submit">Submit</button><br></br><br></br>
//           <div style={{ textAlign: 'center' }}>
//             have an account?{' '}
//             <a href="#" className="jet" onClick={navigateToSignUp}>
//               Sign Up
//             </a>
//           </div>
//           {error && <p className="error">{error}</p>}
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LoginBox;
import { useState } from 'react';
import '../assets/logi.css';
import axios from 'axios'; // Change import statement to use lowercase "axios"
import { Link,useNavigate } from 'react-router-dom';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
// if(username=="admin"&&password=="admin"){
//   navigate('/adminpage');
// }
    // Email validation
    // const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // if (!emailPattern.test(email)) {
    //   setError('Invalid email format');
    //   return;
    // }
// else{
    try {
      const response = await axios.post(
        "http://localhost:8080/auth/authenticate",
        {
          username: email,
          password: password,
        }
      );
      console.log(response.data);

      navigate('/Home');
    } catch (error) {
      console.error('Error logging in:', error);
    }
      // Assuming the response contains data indicating successful login
      // const { success } = response.data;

      // if (success) {
        // Successful login
        // setError('');
        // alert('Login successful!');
        // navigate('/HomePage'); // Navigate to a common page
    //   } else {
     
    //     setError('Invalid email or password');
    //   }
    // } catch (error) {
    //   // Handle error
    //   setError('Invalid email or password');
    // }
  };
  // }
  const navigateToSignUp = () => {
    window.location.href = '/signup';
  
  };

  return (
    <div className="dell">
      {/* <img src="https://res.cloudinary.com/dv3xtovhk/image/upload/v1708443233/chess_hfdqjt.gif" className="logo"/> */}
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="user-box">
            <input
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label>User Name</label>
          </div>
          <div className="user-box">
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label>Password</label>
          </div>
          <button type="submit">Submit</button><br></br><br></br>
          <div style={{ textAlign: 'center' }}>
           Don't have an account?{' '}
            <a href="#" className="jet" onClick={navigateToSignUp}>
              Sign Up
            </a>
          </div>
          {/* <div className="form-group col-lg-12 mx-auto d-flex align-items-center my-4">
                   <div className="border-bottom w-100 ml-5"></div>
                   <span className="px-2 small text-muted font-weight-bold text-muted">OR</span>
                   <div className="border-bottom w-100 mr-5"></div>
                 </div> */}
                 <br></br>
          <Link to="/admin" className="btn">
             <button>Admin Login</button>
           </Link>
          {error && <p className="error">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Login;